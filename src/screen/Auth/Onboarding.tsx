import {
  Animated,
  View,
  Text,
  ImageBackground,
  StatusBar,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import PagerView from "react-native-pager-view";
import React, { useEffect, useRef, useState } from "react";
import tw from "twrnc";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constant/Color";
import RealTimeSyncIcon from "../../icons/RealTimeSyncIcon";
import OnlinePaymentIcon from "../../icons/OnlinePaymentIcon";
import AnalyticIcon from "../../icons/AnalyticIcon";

interface PageProps {
  id: number;
  bgImage: ImageSourcePropType;
  headerText: string | React.ReactNode;
  footerBtnText: string;
  onPress: () => void;
}

const Onboarding = ({ navigation }) => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const scaleAnim = React.useRef(new Animated.Value(0)).current;
  const [currentFinanceText, setCurrentFinanceText] = useState(0);
  const financeTextAnim = React.useRef(new Animated.Value(0)).current;
  const financeTexts = ["budget", "wealth", "savings", "investments"];
  const IconComponents = [AnalyticIcon, RealTimeSyncIcon, OnlinePaymentIcon];

  const textFadeAnim = React.useRef(new Animated.Value(1)).current;
  const translateAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Sequence of animations
    Animated.sequence([
      // Fade out and move up
      Animated.parallel([
        Animated.timing(textFadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateAnim, {
          toValue: -20,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),

      // Change text
      Animated.timing(textFadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(translateAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        setCurrentFinanceText((prev) => (prev + 1) % financeTexts.length);
      }, 2000);
    });
  }, [currentFinanceText]);

  useEffect(() => {
    const animateIcon = (iconIndex: number) => {
      fadeAnim.setValue(0);
      scaleAnim.setValue(0);

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 3,
          tension: 40,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Wait for a moment
        setTimeout(() => {
          // Animate icon out
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
          }).start(() => {
            // Move to next icon
            setCurrentIcon((prev) => (prev + 1) % 3);
          });
        }, 1500);
      });
    };

    animateIcon(currentIcon);
  }, [currentIcon]);

  const iconAnimStyle = {
    opacity: fadeAnim,
    transform: [
      {
        scale: scaleAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1],
        }),
      },
    ],
  };

  return (
    <SafeAreaView style={[tw`flex flex-col justify-between flex-1 pt-5 grow`]}>
      <View>
        <Text style={tw`text-center font-bold text-4xl text-[#1e2424] `}>
          Boof Assistant
        </Text>
      </View>
      <View style={tw`flex flex-row justify-center`}>
        <Animated.View style={iconAnimStyle}>
          {React.createElement(IconComponents[currentIcon], {
            width: 250,
            height: 250,
          })}
        </Animated.View>
      </View>
      <View style={tw`bg-white rounded-t-5 h-80`}>
        <View
          style={tw`flex flex-1 flex-col justify-between gap-4 px-4 pb-10 pt-15`}
        >
          <View>
            <Text style={tw`text-center text-3xl font-bold`}>Hi</Text>
            <Text style={tw`text-center text-lg font-semibold mt-1`}>
              Your legal assistant is here.
            </Text>
          </View>
          <Button
            style="py-2 mt-2 h-13 rounded-md"
            onPress={() => navigation.navigate("Registration")}
          >
            <View
              style={tw`flex flex-row items-center gap-2 flex-1 justify-center`}
            >
              <Text style={tw`text-white text-lg`}>Continue</Text>
            </View>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
