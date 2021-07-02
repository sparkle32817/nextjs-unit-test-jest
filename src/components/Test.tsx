import React, { FC } from "react";
import MoonLoader from "react-spinners/MoonLoader";

type Props = {
  color?: string;
  size?: number;
};
const Loading: FC<Props> = ({
  color = "#4299e1",
  size = 60,
}) => {
  return <MoonLoader color={color} size={size} />;
};

export default Loading;
