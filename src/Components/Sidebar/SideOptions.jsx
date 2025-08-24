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
import { NavLink } from "react-router-dom";
import "./Sidebar.css"

const SideOptions = () => {
  return (
    <div className="flex-col justify-center items-center">
      <div className="m-2">
        <span className="text-gray-400 ms-1">اخیر</span>
        <ul className="flex-col text-center mt-2 text-white">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center" +
              (isActive ? " active" : "")
            }
          >
            <HomeOutlinedIcon />
            <li className="cursor-pointer">خانه</li>
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center" +
              (isActive ? " active" : "")
            }
          >
            <PeopleAltOutlinedIcon />
            <li className="cursor-pointer">کاربران</li>
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center" +
              (isActive ? " active" : "")
            }
          >
            <CategoryOutlinedIcon />
            <li className="cursor-pointer">محصولات</li>
          </NavLink>
          <NavLink
            to="/members"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center" +
              (isActive ? " active" : "")
            }
          >
            <RememberMeOutlinedIcon />
            <li className="cursor-pointer">اعضا</li>
          </NavLink>
          <NavLink
            to="/plans"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center" +
              (isActive ? " active" : "")
            }
          >
            <SignpostOutlinedIcon />
            <li className="cursor-pointer">طرح‌ها</li>
          </NavLink>
        </ul>
      </div>
      <div className="m-2">
        <span className="text-gray-400 ms-1">گزارش‌ها</span>
        <ul className="flex-col text-center mt-2 text-white">
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center" +
              (isActive ? " active" : "")
            }
          >
            <AreaChartOutlinedIcon />
            <li className="cursor-pointer">تحلیل‌ها</li>
          </NavLink>
          <NavLink
            to="/discounts"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center" +
              (isActive ? " active" : "")
            }
          >
            <DiscountOutlinedIcon />
            <li className="cursor-pointer">تخفیف‌ها</li>
          </NavLink>
          <NavLink
            to="/common-goods"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center" +
              (isActive ? " active" : "")
            }
          >
            <TagOutlinedIcon />
            <li className="cursor-pointer">کالاهای عمومی</li>
          </NavLink>
        </ul>
      </div>
      <div className="m-2">
        <span className="text-gray-400 ms-1">بازخورد</span>
        <ul className="flex-col text-center mt-2 text-white">
          <NavLink
            to="/comments"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center" +
              (isActive ? " active" : "")
            }
          >
            <SmsOutlinedIcon />
            <li className="cursor-pointer">نظرات</li>
          </NavLink>
          <NavLink
            to="/breakdowns"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center" +
              (isActive ? " active" : "")
            }
          >
            <HeartBrokenOutlinedIcon />
            <li className="cursor-pointer">خرابی‌ها</li>
          </NavLink>
          <NavLink
            to="/cooperation"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center" +
              (isActive ? " active" : "")
            }
          >
            <GroupsOutlinedIcon />
            <li className="cursor-pointer">همکاری</li>
          </NavLink>
          <NavLink
            to="/new-order"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center" +
              (isActive ? " active" : "")
            }
          >
            <BorderColorOutlinedIcon />
            <li className="cursor-pointer">سفارش جدید</li>
          </NavLink>
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center" +
              (isActive ? " active" : "")
            }
          >
            <MeetingRoomOutlinedIcon />
            <li className="cursor-pointer">خروج</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideOptions;
