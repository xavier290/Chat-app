import React from "react";

import MailIcon from "@material-ui/icons/Mail";
import ContactsIcon from "@material-ui/icons/Contacts";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

export const SideBarData = [
  {
    title: "Messages",
    path: "/message",
    icon: <MailIcon />,
    className: "nav-text",
  },
  {
    title: "Contacts",
    path: "/contact",
    icon: <ContactsIcon />,
    className: "nav-text",
  },
  {
    title: "New Group",
    path: "/groups",
    icon: <GroupAddIcon />,
    className: "nav-text",
  },
  {
    title: "Invite Friends",
    path: "/invite",
    icon: <PersonAddIcon />,
    className: "nav-text",
  },
  {
    title: "Appereance",
    path: "/appereance",
    icon: <Brightness6Icon />,
    className: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
    className: "nav-text",
  },
];
