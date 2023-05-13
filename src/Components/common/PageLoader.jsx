import React from "react";
import { Spin } from "antd";

const PageLoader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Spin size="large" />
    </div>
  );
};

export default PageLoader;
