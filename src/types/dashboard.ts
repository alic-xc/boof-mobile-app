export interface IClient {
  name: string;
  avatar: string;
}

export interface ListItemProps {
  icon?: string | React.ReactNode;
  startIcon?: string | React.ReactNode;
  title?: string;
  component?: React.ReactNode;
  subTitle?: React.ReactNode | string;
  containerStyle?: string;
  textStyle?: string;
  isCheckBox?: boolean;
  description?: string;
  onPress?: () => void;
  uiSwitch?: boolean;
  isCompleted?: boolean;
}
