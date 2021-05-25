export interface IEnviromentProps {
  key: string;
  title: string;
}

export interface IPlantProps {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: Array<string>;
  frequency: {
    times: number;
    repeat_every: string;
  }
}