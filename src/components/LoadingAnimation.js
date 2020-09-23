import React from "react";
import Lottie from "react-lottie";

import animation_data from "../lotties/loading_spinner.json";

const LoadingAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation_data,
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={200} />
    </div>
  );
};

export default LoadingAnimation;
