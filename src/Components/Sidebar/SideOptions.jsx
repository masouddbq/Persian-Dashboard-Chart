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
import HeartBrokenOutlinedIcon from '@mui/icons-material/HeartBroken';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import { NavLink } from "react-router-dom";
import "./Sidebar.css"

const SideOptions = () => {
  return (
    <div className="flex flex-col justify-center items-center font-pinar" dir="rtl">
      <div className="m-2 w-full">
        <span className="text-gray-400 ms-1 text-sm font-medium">اخیر</span>
        <ul className="flex flex-col text-center mt-2 text-white space-y-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center p-2 rounded-lg" +
              (isActive ? " bg-slate-700" : "")
            }
          >
            <HomeOutlinedIcon className="ml-2" />
            <li className="cursor-pointer text-sm">خانه</li>
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center p-2 rounded-lg" +
              (isActive ? " bg-slate-700" : "")
            }
          >
            <PeopleAltOutlinedIcon className="ml-2" />
            <li className="cursor-pointer text-sm">کاربران</li>
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center p-2 rounded-lg" +
              (isActive ? " bg-slate-700" : "")
            }
          >
            <CategoryOutlinedIcon className="ml-2" />
            <li className="cursor-pointer text-sm">محصولات</li>
          </NavLink>
          <NavLink
            to="/members"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center p-2 rounded-lg" +
              (isActive ? " bg-slate-700" : "")
            }
          >
            <RememberMeOutlinedIcon className="ml-2" />
            <li className="cursor-pointer text-sm">اعضا</li>
          </NavLink>
          <NavLink
            to="/plans"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center p-2 rounded-lg" +
              (isActive ? " bg-slate-700" : "")
            }
          >
            <SignpostOutlinedIcon className="ml-2" />
            <li className="cursor-pointer text-sm">طرح‌ها</li>
          </NavLink>
        </ul>
      </div>
      <div className="m-2 w-full">
        <span className="text-gray-400 ms-1 text-sm font-medium">گزارش‌ها</span>
        <ul className="flex flex-col text-center mt-2 text-white space-y-1">
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center p-2 rounded-lg" +
              (isActive ? " bg-slate-700" : "")
            }
          >
            <AreaChartOutlinedIcon className="ml-2" />
            <li className="cursor-pointer text-sm">تحلیل‌ها</li>
          </NavLink>
          <NavLink
            to="/discounts"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center p-2 rounded-lg" +
              (isActive ? " bg-slate-700" : "")
            }
          >
            <DiscountOutlinedIcon className="ml-2" />
            <li className="cursor-pointer text-sm">تخفیف‌ها</li>
          </NavLink>
          <NavLink
            to="/common-goods"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center p-2 rounded-lg" +
              (isActive ? " bg-slate-700" : "")
            }
          >
            <TagOutlinedIcon className="ml-2" />
            <li className="cursor-pointer text-sm">کالاهای عمومی</li>
          </NavLink>
        </ul>
      </div>
      <div className="m-2 w-full">
        <span className="text-gray-400 ms-1 text-sm font-medium">بازخورد</span>
        <ul className="flex flex-col text-center mt-2 text-white space-y-1">
          <NavLink
            to="/comments"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center p-2 rounded-lg" +
              (isActive ? " bg-slate-700" : "")
            }
          >
            <SmsOutlinedIcon className="ml-2" />
            <li className="cursor-pointer text-sm">نظرات</li>
          </NavLink>
          <NavLink
            to="/breakdowns"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center p-2 rounded-lg" +
              (isActive ? " bg-slate-700" : "")
            }
          >
            <HeartBrokenOutlinedIcon className="ml-2" />
            <li className="cursor-pointer text-sm">خرابی‌ها</li>
          </NavLink>
          <NavLink
            to="/cooperation"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center p-2 rounded-lg" +
              (isActive ? " bg-slate-700" : "")
            }
          >
            <GroupsOutlinedIcon className="ml-2" />
            <li className="cursor-pointer text-sm">همکاری</li>
          </NavLink>
          <NavLink
            to="/new-order"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center p-2 rounded-lg" +
              (isActive ? " bg-slate-700" : "")
            }
          >
            <BorderColorOutlinedIcon className="ml-2" />
            <li className="cursor-pointer text-sm">سفارش جدید</li>
          </NavLink>
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              "flex justify-start m-2 hover:bg-slate-700 hover:rounded-lg transition-all duration-100 items-center p-2 rounded-lg" +
              (isActive ? " bg-slate-700" : "")
            }
          >
            <MeetingRoomOutlinedIcon className="ml-2" />
            <li className="cursor-pointer text-sm">خروج</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideOptions;
