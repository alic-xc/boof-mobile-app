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
import JudgeIcon from "../../icons/JudgeIcon";
import ContractIcon from "../../icons/ContractIcon";

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
  const IconComponents = [JudgeIcon, ContractIcon];

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
            setCurrentIcon((prev) => (prev + 1) % 2);
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
      <View style={tw`flex flex-row`}>
        <Text style={tw`text-2xl px-2 font-light`}>LegalBoof</Text>
      </View>
      <View style={tw`flex flex-row justify-center mt-10`}>
        <Animated.View style={iconAnimStyle}>
          {React.createElement(IconComponents[currentIcon], {
            width: 250,
            height: 250,
          })}
        </Animated.View>
      </View>
      <View style={tw`bg-white rounded-5 h-60 m-2 `}>
        <View
          style={tw`flex flex-1 flex-col justify-between gap-2 px-4 pb-10 pt-15`}
        >
          <View>
            <Text style={tw`text-center text-3xl font-bold`}>
              Join the Club
            </Text>
            <Text style={tw`text-center text-lg font-semibold mt-1`}>
              Your legal assistant is here.
            </Text>
          </View>
          <Button
            style="py-2 mt-2 h-13 rounded-4xl"
            onPress={() => navigation.navigate("SubscriptionQuiz")}
          >
            <View
              style={tw`flex flex-row items-center gap-2 flex-1 justify-center`}
            >
              <Text style={tw`text-white text-lg`}>Get Started</Text>
            </View>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
