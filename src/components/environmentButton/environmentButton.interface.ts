import { RectButtonProps } from "react-native-gesture-handler";

export interface IEnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}