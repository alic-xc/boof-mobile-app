import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";

interface DayProps {
  date: Date;
  isSelected: boolean;
  onSelect: (date: Date) => void;
}

const DayComponent = ({ date, isSelected, onSelect }: DayProps) => {
  const dayNames = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  return (
    <TouchableOpacity
      onPress={() => onSelect(date)}
      style={tw`items-center mx-2 px-3 py-2 ${
        isSelected ? "bg-blue-100 rounded-lg" : ""
      }`}
    >
      <Text style={tw`text-xs text-gray-500`}>
        {dayNames[date.getDay() === 0 ? 6 : date.getDay() - 1]}
      </Text>
      <Text
        style={tw`text-base ${
          isSelected ? "text-blue-500 font-bold" : "text-gray-800"
        }`}
      >
        {date.getDate()}
      </Text>
    </TouchableOpacity>
  );
};

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weekDates, setWeekDates] = useState<Date[]>([]);

  const getWeekDates = (date: Date) => {
    const curr = new Date(date);
    const week = [];

    // Set to Monday of current week
    curr.setDate(curr.getDate() - (curr.getDay() || 7) + 1);

    // Get all days of the week
    for (let i = 0; i < 7; i++) {
      const day = new Date(curr);
      week.push(day);
      curr.setDate(curr.getDate() + 1);
    }

    return week;
  };

  useEffect(() => {
    setWeekDates(getWeekDates(selectedDate));
  }, [selectedDate]);

  const handleWeekChange = (direction: "next" | "prev") => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + (direction === "next" ? 7 : -7));
    setSelectedDate(newDate);
  };

  return (
    <View style={tw`mt-4`}>
      <View style={tw`flex-row justify-between items-center mb-2`}>
        <Text style={tw`text-lg font-semibold`}>
          {selectedDate.toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={tw`bg-white border-gray-200`}
        onMomentumScrollEnd={(event) => {
          const offsetX = event.nativeEvent.contentOffset.x;
          console.log(offsetX);
          console.log(event.nativeEvent.velocity);

          if (offsetX > 0) {
            handleWeekChange("next");
          } else {
            handleWeekChange("prev");
          }
        }}
      >
        <View style={tw`flex-row`}>
          {weekDates.map((date, index) => (
            <DayComponent
              key={index}
              date={date}
              isSelected={date.toDateString() === selectedDate.toDateString()}
              onSelect={setSelectedDate}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Calendar;