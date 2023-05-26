import {
  FileOutlined,
  LeftOutlined,
  RightOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Modal, Button, Input } from "antd";
import {create} from "zustand";

const InitialIcon = ({ name }) => {
  if (name.toString().length === 0){
    return(<UserOutlined/>);
  }
  const initials = name.toString().split(" ").map((word) => {return word[0].toUpperCase();}).join("");
  return (
      <div className="bg-blue-700 items-center justify-items-center rounded-[30px] w-[25px] h-[25px]">
        <span className="text-white">{initials}</span>
      </div>
  );
};

const profileStore = create((set) => ({
  Name: "",
  setName: (name) => set(state => ({Name:name})),
}));

let loginUser = "";
const SideBar = () => {

  const [open, setOpen] = useState(true);
  const [tmpName, setTmpName] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const profileName = profileStore((state) => state.Name);
  const setProfileName = profileStore((state) => state.setName);

  const Menus = [
    { title: "Articles", src: <FileOutlined /> },
    {
      title: "Settings",
      src: <SettingOutlined />,
      onClick: () => setIsModalVisible(true),
    },
    { title: (profileName === "") ? "Profile" : profileName, src: <InitialIcon name={profileName}/>, gap: true },
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
        open={isModalVisible}
        okText="Submit"
        okButtonProps={{ className: "bg-blue-500" }}
        onOk={() => {
          setIsModalVisible(false);
          setProfileName(tmpName);
          loginUser = tmpName;
        }}
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        <Input placeholder="Enter User name" onChange={(e) => setTmpName(e.target.value)}/>
      </Modal>
    </div>
  );
};
export {SideBar, loginUser as profileName};
