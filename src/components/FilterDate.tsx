import React, { useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { CalendarIcon } from "../icons";

interface FilterDateProps {
  onFilter?: (fromDate: Date, toDate: Date) => void;
}

const FilterDate: React.FC<FilterDateProps> = ({ onFilter }) => {
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setFromDate(selectedDate || null);
    setShowPicker(false);
  };

  const toggleDateSelection = () => {
    setShowPicker(true);
  };

  return (
    <View>
      <Pressable onPress={toggleDateSelection}>
        <CalendarIcon width={24} height={24} color={"white"} />
      </Pressable>
      {showPicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

export default FilterDate;
