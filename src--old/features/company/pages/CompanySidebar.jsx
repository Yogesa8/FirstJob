import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  PlusCircle, 
  Briefcase, 
  Users, 
  LogOut,
  ChevronRight,
  Settings,
  Bell,
  Search
} from 'lucide-react';

export const CompanySidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: 'Dashboard',
      path: '/company/dashboard',
      icon: <LayoutDashboard size={20} />
    },
    {
      title: 'Post New Job',
      path: '/company/post-job',
      icon: <PlusCircle size={20} />
    },
    {
      title: 'Manage Jobs',
      path: '/company/manage-jobs',
      icon: <Briefcase size={20} />
    },
    {
      title: 'Applications',
      path: '/company/applications',
      icon: <Users size={20} />
    }
  ];

  return (
    <div className="w-72 bg-base-100 border-r border-base-200 flex flex-col h-screen sticky top-0 z-50 shadow-sm">
      {/* Brand Logo Section */}
      <div className="p-8 pb-4">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
            <Briefcase className="text-primary-content" size={22} />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-base-content leading-none">
              Career<span className="text-primary">Portal</span>
            </h1>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-base-content/40">Recruiter Suite</span>
          </div>
        </div>
      </div>

      {/* Navigation Area */}
      <div className="flex-1 px-4 py-6 overflow-y-auto custom-scrollbar">
        <div className="space-y-1.5">
          <p className="px-4 text-[11px] font-bold text-base-content/30 uppercase tracking-widest mb-4">Main Menu</p>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
                  isActive 
                    ? 'bg-primary/5 text-primary' 
                    : 'hover:bg-base-200/50 text-base-content/60 hover:text-base-content'
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 w-1.5 h-6 bg-primary rounded-r-full" />
                )}
                <div className="flex items-center gap-4">
                  <div className={`transition-colors duration-300 ${isActive ? 'text-primary' : 'group-hover:text-primary'}`}>
                    {item.icon}
                  </div>
                  <span className={`font-semibold text-[15px] transition-all duration-300 ${isActive ? 'translate-x-1' : ''}`}>
                    {item.title}
                  </span>
                </div>
                {isActive ? (
                  <ChevronRight size={16} className="opacity-100 transition-all duration-300 translate-x-1" />
                ) : (
                  <ChevronRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Secondary Menu */}
        <div className="mt-10 space-y-1.5">
          <p className="px-4 text-[11px] font-bold text-base-content/30 uppercase tracking-widest mb-4">Support & Settings</p>
          <button className="flex items-center gap-4 w-full px-4 py-3.5 rounded-2xl text-base-content/60 hover:bg-base-200/50 hover:text-base-content transition-all group">
            <Bell size={20} className="group-hover:text-primary transition-colors" />
            <span className="font-semibold text-[15px]">Notifications</span>
          </button>
          <button className="flex items-center gap-4 w-full px-4 py-3.5 rounded-2xl text-base-content/60 hover:bg-base-200/50 hover:text-base-content transition-all group">
            <Settings size={20} className="group-hover:text-primary transition-colors" />
            <span className="font-semibold text-[15px]">Company Settings</span>
          </button>
        </div>
      </div>

      {/* User Profile Footer */}
      <div className="p-6 border-t border-base-200">
        <div className="bg-base-200/50 p-4 rounded-3xl border border-base-300/50 transition-all hover:border-primary/20 group cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="avatar online">
              <div className="w-12 h-12 rounded-2xl shadow-inner border-2 border-primary/20">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=TechCorp" alt="logo" />
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="font-bold text-sm truncate group-hover:text-primary transition-colors">TechCorp Inc.</p>
              <p className="text-[11px] text-base-content/50 font-medium">Enterprise Suite</p>
            </div>
          </div>
        </div>
        
        <button className="mt-4 flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-error bg-error/5 hover:bg-error hover:text-white transition-all duration-300 font-bold text-sm">
          <LogOut size={18} />
          <span>Logout Session</span>
        </button>
      </div>
    </div>
  );
};
