import {
  FileOutlined,
  LeftOutlined,
  RightOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Modal, Button, Input } from "antd";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const Menus = [
    { title: "Articles", src: <FileOutlined /> },
    {
      title: "Settings",
      src: <SettingOutlined />,
      onClick: () => setIsModalVisible(true),
    },
    { title: "Profile", src: <UserOutlined />, gap: true },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <RightOutlined
          className={`absolute cursor-pointer -right-3 top-9 w-7 text-white border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <LeftOutlined
            className={`text-white cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Rogan UI Challenge
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
              onClick={Menu.onClick}
            >
              {Menu.src}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Modal
        title="Set User Name"
        visible={isModalVisible}
        okText="Submit"
        okButtonProps={{ className: "bg-blue-500" }}
        onOk={() => {
          setIsModalVisible(false);
        }}
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        <Input placeholder="Enter User name" />
      </Modal>
    </div>
  );
};
export default SideBar;
