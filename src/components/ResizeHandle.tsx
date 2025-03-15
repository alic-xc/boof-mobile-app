import React from "react";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { ResizeHandleProps } from "../types/app-types";
import { styles } from "../styles/styles";

export const ResizeHandle: React.FC<ResizeHandleProps> = ({
  position,
  onResize,
}) => {
  const resizeGesture = Gesture.Pan().onUpdate((event) => {
    onResize(event);
  });

  return (
    <GestureDetector gesture={resizeGesture}>
      <View style={[styles.resizeHandle, styles[position]]} />
    </GestureDetector>
  );
};
