import { View, Image, StyleSheet } from "react-native";
import React from "react";

interface CustomImageProps {
  uri: string;
}

const CustomImage = (props: CustomImageProps) => {
  const [imageSize, setImageSize] = React.useState({ width: 0, height: 0 });
  const [containerSize, setContainerSize] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    // Get original image dimensions
    Image.getSize(props.uri, (width, height) => {
      setImageSize({ width, height });
    });
  }, [props.uri]);

  const onLayout = (event: any) => {
    const { width, height } = event.nativeEvent.layout;
    setContainerSize({ width, height });
  };

  return (
    <View style={styles.imageContainer} onLayout={onLayout}>
      <Image
        source={{ uri: props.uri }}
        style={styles.image}
        resizeMode="cover"
        progressiveRenderingEnabled={true}
        fadeDuration={300}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default CustomImage;
