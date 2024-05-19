import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AccessibleIcon from "@mui/icons-material/Accessible";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AddReactionIcon from "@mui/icons-material/AddReaction";

export default function Values() {
  const valueParagrahs = [
    {
      title: "Value",
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, impedit?`,
      Icon: AccountBalanceIcon,
    },
    {
      title: "Fairness",
      body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam corporis culpa, id quaerat placeat eveniet!`,
      Icon: AddModeratorIcon,
    },
    {
      title: "Security",
      body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam corporis culpa, id quaerat placeat eveniet!`,
      Icon: Diversity3Icon,
    },
    {
      title: "Diversity",
      body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam corporis culpa, id quaerat placeat eveniet!`,
      Icon: AccessibleIcon,
    },
    {
      title: "Accessiblilty",
      body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam corporis culpa, id quaerat placeat eveniet!`,
      Icon: AccessAlarmIcon,
    },
    {
      title: "Customer Satisfaction",
      body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam corporis culpa, id quaerat placeat eveniet!`,
      Icon: AddReactionIcon,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-[10%]">
      {valueParagrahs.map(({ title, body, Icon }) => (
        <div
          key={title}
          className="mb-4 flex flex-col items-center text-center"
        >
          <Icon fontSize="large" className="mb-2 fill-green-300" />
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
}
