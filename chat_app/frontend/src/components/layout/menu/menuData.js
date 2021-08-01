import React from "react";

import MailIcon from "@material-ui/icons/Mail";
import ContactsIcon from "@material-ui/icons/Contacts";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import HelpIcon from "@material-ui/icons/Help";
import DescriptionIcon from "@material-ui/icons/Description";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export const MenuData = [
  {
    path: "/home",
    icon: <MailIcon />,
    className: "menu-text",
  },
  {
    path: "/online",
    icon: <FiberManualRecordIcon />,
    className: "menu-text",
  },
  {
    path: "/groups",
    icon: <PeopleAltIcon />,
    className: "menu-text",
  },
];

export const SideBarData = [
  {
    title: "Messages",
    path: "/home",
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
    title: "Dark Mode",
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
  {
    title: "Help",
    path: "/help",
    icon: <HelpIcon />,
    className: "nav-text",
  },
  {
    title: "Legal & Policies",
    path: "/policies",
    icon: <DescriptionIcon />,
    className: "nav-text",
  },
];
