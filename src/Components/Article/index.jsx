import React from "react";
import PageLoader from "../common/PageLoader";
import SideBar from "./SideBar";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import ArticleSection from "./ArticleSection";

const index = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="p-5 w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-semibold">Articles</p>
          <Button
            type="primary"
            className="bg-blue-500 items-center flex"
            icon={<PlusCircleOutlined />}
          >
            Add Article
          </Button>
        </div>
        <ArticleSection />
      </div>
    </div>
  );
};

export default index;
