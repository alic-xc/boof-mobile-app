import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

interface pickImageProps {
  notifier: (msg: string, status: "success" | "error" | "warning") => void;
  imageUri: string | null;
  setImageUri: (val: string) => void;
  width: number;
  height: number;
}

const pickImage = async (props: pickImageProps) => {
  const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!permission.granted) {
    props.notifier("Permission to access media library is required!", "error");
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    quality: 1,
    aspect: [props.width, props.height],
  });

  if (!result.canceled && result.assets) {
    const selectedImage = result.assets[0];
    const fileName = selectedImage.uri.split("/").pop();
    const destinationPath = `${FileSystem.documentDirectory}category/${fileName}`;

    try {
      // Create folder if it doesn't exist
      await FileSystem.makeDirectoryAsync(
        `${FileSystem.documentDirectory}category`,
        {
          intermediates: true,
        }
      );

      // Copy image
      await FileSystem.copyAsync({
        from: selectedImage.uri,
        to: destinationPath,
      });

      if (props.imageUri && props.imageUri !== destinationPath) {
        await FileSystem.deleteAsync(props.imageUri, { idempotent: true });
      }

      props.setImageUri(destinationPath);
      props.notifier("Image selected successfully", "success");
      return destinationPath;
    } catch (error) {
      props.notifier("Failed to save image", "error");
    }
  }
};

export default pickImage;
