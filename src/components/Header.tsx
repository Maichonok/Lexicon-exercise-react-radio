import {
  HomeTwoTone,
  CustomerServiceOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  label: string | JSX.Element;
  key: string;
  icon?: JSX.Element;
  disabled?: boolean;
  children?: MenuItem[];
}

const Header = () => {
  const [current, setCurrent] = useState<string>("h");

  const onClick = (e: { key: string }) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items: MenuItem[] = [
    { key: "h", label: "Home", icon: <HomeTwoTone /> },
    { key: "c", label: "Channels", icon: <CustomerServiceOutlined /> },
    { key: "p", label: "Programs", icon: <VideoCameraOutlined /> },
    { key: "m", label: "My profile", icon: <UserOutlined /> },
  ];

  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to="/">{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

export default Header;
