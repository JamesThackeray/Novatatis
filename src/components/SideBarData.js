import React from 'react'
import  * as FaIcons from "react-icons/fa";
import  * as AiIcons from "react-icons/ai";
import  * as RiIcons from "react-icons/ri";
import  * as CgIcons from "react-icons/cg";

export const SideBar = [
  {
    title: 'Projects',
    path:"/",
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Questionnaire',
    path:"/questionnaire",
    icon: <RiIcons.RiQuestionnaireFill />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path:"/profile",
    icon: <CgIcons.CgProfile />,
    cName: 'nav-text'
  }
]