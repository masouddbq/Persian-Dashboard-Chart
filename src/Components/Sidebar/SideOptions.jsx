import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import RememberMeOutlinedIcon from '@mui/icons-material/RememberMeOutlined';
import SignpostOutlinedIcon from '@mui/icons-material/SignpostOutlined';
import AreaChartOutlinedIcon from '@mui/icons-material/AreaChartOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import HeartBrokenOutlinedIcon from '@mui/icons-material/HeartBrokenOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import "./Sidebar.css"

const SideOptions = () => {
  return (
    <div className="flex-col justify-center items-center">
      <div className="m-2">
        <span className="text-gray-400 ms-1">Recent</span>
        <ul className="flex-col text-center mt-2 text-white">
          <div className="flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 active">
            <HomeOutlinedIcon />
            <li className="cursor-pointer">Home</li>
          </div>
          <div className="flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100">
            <PeopleAltOutlinedIcon />
            <li className="cursor-pointer">Users</li>
          </div>
          <div className="flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100">
            <CategoryOutlinedIcon />
            <li className="cursor-pointer">Products</li>
          </div>
          <div className="flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100">
            <RememberMeOutlinedIcon />
            <li className="cursor-pointer">Members</li>
          </div>
          <div className="flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100">
            <SignpostOutlinedIcon />
            <li className="cursor-pointer">Plans</li>
          </div>
        </ul>
      </div>
      <div className="m-2">
        <span className="text-gray-400 ms-1">Reoprts</span>
        <ul className="flex-col text-center mt-2 text-white">
          <div className="flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100">
            <AreaChartOutlinedIcon />
            <li className="cursor-pointer">Analytics</li>
          </div>
          <div className="flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100">
            <DiscountOutlinedIcon />
            <li className="cursor-pointer">Discounts</li>
          </div>
          <div className="flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100">
            <TagOutlinedIcon />
            <li className="cursor-pointer">Common goods</li>
          </div>
        </ul>
      </div>
      <div className="m-2">
        <span className="text-gray-400 ms-1">Feedback</span>
        <ul className="flex-col text-center mt-2 text-white">
          <div className="flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100">
            <SmsOutlinedIcon />
            <li className="cursor-pointer">Comments</li>
          </div>
          <div className="flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100">
            <HeartBrokenOutlinedIcon />
            <li className="cursor-pointer">Breakdowns</li>
          </div>
          <div className="flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100">
            <GroupsOutlinedIcon />
            <li className="cursor-pointer">Cooperation</li>
          </div>
          <div className="flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100">
            <BorderColorOutlinedIcon />
            <li className="cursor-pointer">New-order</li>
          </div>
          <div className="flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100">
            <MeetingRoomOutlinedIcon />
            <li className="cursor-pointer">Logout</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideOptions;
