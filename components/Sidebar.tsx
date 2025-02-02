import React from "react";


import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (


    <div className="flex flex-col bg-secondary h-full px-4 py-6 gap-4">

      <span className="font-bold text-xs">PAGES</span>

      <div className="flex items-center bg-slate-200 dark:bg-slate-600 rounded p-2  ">
      <LayoutDashboard className="mr-2 h-4 w-4"/>
      <Link href='/'>Dashboard</Link>
      </div>

      <div className="flex items-center bg-slate-200 dark:bg-slate-600 rounded p-2  ">
      <Folders className="mr-2 h-4 w-4"/>
        <Link href='/posts'>Posts</Link>
      </div>

      <div className="flex items-center bg-slate-200 dark:bg-slate-600 rounded p-2  ">
      <Newspaper className="mr-2 h-4 w-4"/>
       <Link href='#'>Categories</Link>
      </div>

<div className="h-[1px] w-full bg-slate-300 dark:bg-slate-200 my-3"></div>      

<span className="font-bold text-xs">SETTINGS</span>


<div className="flex items-center bg-slate-200 dark:bg-slate-600 rounded p-2  ">
     <User className="mr-2 h-4 w-4"/>

        <span>Profile</span>
      </div>

      <div className="flex items-center bg-slate-200 dark:bg-slate-600 rounded p-2  ">
      <CreditCard className="mr-2 h-4 w-4"/>

         <span>Billing</span>
      </div>

      <div className="flex items-center bg-slate-200 dark:bg-slate-600 rounded p-2  ">
      <Settings className="mr-2 h-4 w-4"/>
         <span>Settings</span>
      </div>

    </div>
  );
};

export default Sidebar;
