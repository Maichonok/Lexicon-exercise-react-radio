import { Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeTwoTone,
  CustomerServiceOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

interface MenuItem {
  label: string | JSX.Element;
  key: string;
  icon?: JSX.Element;
  disabled?: boolean;
  children?: MenuItem[];
  path: string; // Make the path property required
}

const Header = () => {
  const [current, setCurrent] = useState<string>("h");

  const onClick = (e: { key: string }) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items: MenuItem[] = [
    { key: "h", path: "/", label: "Home", icon: <HomeTwoTone /> },
    {
      key: "c",
      path: "/channels",
      label: "Channels",
      icon: <CustomerServiceOutlined />,
    },
    {
      key: "p",
      path: "/programs",
      label: "Programs",
      icon: <VideoCameraOutlined />,
    },
    { key: "m", path: "/profile", label: "My profile", icon: <UserOutlined /> },
  ];

  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

export default Header;
