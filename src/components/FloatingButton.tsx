import React, { useEffect } from "react";
import { View, Pressable, Animated, Easing } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import colors from "../constant/Color";

interface FloatingButtonProps {
  onPress: () => void;
  content: React.ReactNode;
}

const FloatingButton = (props: FloatingButtonProps) => {
  const navigation = useNavigation();
  const pulseAnim = new Animated.Value(1);

  useEffect(() => {
    const pulseSequence = Animated.sequence([
      Animated.timing(pulseAnim, {
        toValue: 1.2,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
      Animated.timing(pulseAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ]);

    Animated.loop(pulseSequence).start();

    return () => {
      pulseAnim.stopAnimation();
    };
  }, []);

  const animatedStyle = {
    transform: [{ scale: pulseAnim }],
  };

  return (
    <View style={tw`absolute bottom-5 right-5 z-[1000]`}>
      <Animated.View style={animatedStyle}>
        <Pressable
          onPress={props.onPress}
          style={tw`bg-[${colors.secondary}] text-white w-[60px] h-[60px] rounded-full justify-center items-center shadow-md`}
        >
          {props.content}
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default FloatingButton;
