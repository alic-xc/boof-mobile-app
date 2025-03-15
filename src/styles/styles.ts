// styles.ts
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  imageWrapper: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  canvas: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 10,
    position: "relative",
  },
  footer: {
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resizeHandles: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  resizeHandle: {
    position: "absolute",
    width: 20,
    height: 20,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  topLeft: {
    top: -10,
    left: -10,
  },
  topRight: {
    top: -10,
    right: -10,
  },
  bottomLeft: {
    bottom: -10,
    left: -10,
  },
  bottomRight: {
    bottom: -10,
    right: -10,
  },
  imageActions: {
    position: "absolute",
    top: -40,
    right: 0,
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 20,
    padding: 5,
    gap: 10,
  },
});
