import React from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as CgIcons from "react-icons/cg";

export const SideBar = [
  {
    title: "Projects",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Questionnaire",
    path: "/questionnaire",
    icon: <RiIcons.RiQuestionnaireFill />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
];

export const AdminSideBar = [
  {
    title: "All Projects",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Clients",
    path: "/clients",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <CgIcons.CgFile />,
    cName: "nav-text",
  },
];
