import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
   <>
    <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">

      <DashboardCard
      title="Posts"
      count={100}
      icon={<Newspaper size={65} className='text-slate-500 dark:text-slate-200'/>}
      />

<DashboardCard
      title="Categories"
      count={12}
      icon={<Folder size={65} className='text-slate-500 dark:text-slate-200'/>}
      />

<DashboardCard
      title="Users"
      count={750}
      icon={<User size={65} className='text-slate-500 dark:text-slate-200'/>}
      />

<DashboardCard
      title="Comments"
      count={1200}
      icon={<MessageCircle size={65} className='text-slate-500 dark:text-slate-200'/>}
      />
    </div>

    <AnalyticsChart/>

    <PostsTable title="Latest Posts" limit={5}/>
   </>
  );
}
