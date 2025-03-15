import { showMessage, hideMessage } from "react-native-flash-message";

const notifier = (content: string, type: "success" | "error" | "warning") => {
  if (type === "error")
    return showMessage({
      message: content,
      type: "danger",
      statusBarHeight: 40,
    });
  if (type === "success")
    return showMessage({
      message: content,
      type: "success",
      statusBarHeight: 40,
    });
  if (type === "warning")
    return showMessage({
      message: content,
      type: "warning",
      statusBarHeight: 40,
    });
};

export default notifier;
