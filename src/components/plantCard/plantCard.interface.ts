import { RectButtonProps } from "react-native-gesture-handler";

export interface IPlantCardProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}