import React from 'react';
import { CompanySidebar } from './CompanySidebar';
import { 
  Plus, 
  Briefcase, 
  CheckCircle, 
  Users, 
  TrendingUp,
  ArrowRight,
  Search,
  Bell,
  Calendar,
  ExternalLink,
  MoreHorizontal
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CompanyDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { title: 'Total Jobs Posted', value: '12', icon: <Briefcase size={22} />, color: 'primary', trend: '+12% this month' },
    { title: 'Active Jobs', value: '08', icon: <CheckCircle size={22} />, color: 'success', trend: 'Steady performance' },
    { title: 'Total Applications', value: '145', icon: <Users size={22} />, color: 'secondary', trend: '+24 new today' },
    { title: 'New Applications', value: '24', icon: <TrendingUp size={22} />, color: 'accent', trend: 'High interest' },
  ];

  const recentJobs = [
    { id: 1, title: 'Senior Frontend Developer', status: 'Active', applications: 45, date: '2026-01-05', type: 'Full-time' },
    { id: 2, title: 'Backend Architect', status: 'Active', applications: 32, date: '2026-01-04', type: 'Remote' },
    { id: 3, title: 'UI/UX Designer', status: 'Closed', applications: 68, date: '2026-01-02', type: 'Contract' },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <CompanySidebar />
      
      <main className="flex-1 overflow-y-auto">
        {/* Top Navbar */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4 flex items-center justify-between">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search applications, jobs, or settings..." 
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="btn btn-ghost btn-circle bg-slate-100 border-none hover:bg-slate-200 relative">
              <Bell size={20} className="text-slate-600" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-error rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-800">Sarah Jenkins</p>
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-tighter">Hiring Manager</p>
              </div>
              <div className="avatar">
                <div className="w-10 h-10 rounded-xl shadow-md">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="avatar" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="relative overflow-hidden bg-primary rounded-[2.5rem] p-10 mb-10 shadow-2xl shadow-primary/20 group">
            <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-secondary/20 rounded-full blur-2xl group-hover:-translate-x-4 transition-transform duration-700"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h1 className="text-4xl font-black text-white mb-3 tracking-tight leading-tight">
                  Revolutionize Your <br /> Recruitment Process.
                </h1>
                <p className="text-primary-content/80 text-lg font-medium mb-8 leading-relaxed">
                  TechCorp is growing fast! You have <span className="text-white font-bold underline decoration-secondary decoration-4 underline-offset-4">24 new applications</span> waiting for your review today.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => navigate('/company/post-job')}
                    className="btn bg-white hover:bg-slate-50 border-none text-primary normal-case px-8 rounded-2xl font-bold shadow-lg"
                  >
                    <Plus size={20} className="mr-2" />
                    Create New Listing
                  </button>
                  <button className="btn bg-white/20 hover:bg-white/30 border-none text-white normal-case px-8 rounded-2xl font-bold backdrop-blur-md">
                    View Analytics
                  </button>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-[2rem] border border-white/20 shadow-2xl animate-pulse-slow">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center">
                        <TrendingUp className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-xl">84%</p>
                        <p className="text-white/60 text-xs font-medium uppercase tracking-widest">Efficiency</p>
                      </div>
                   </div>
                   <div className="space-y-2">
                      <div className="h-1.5 w-48 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-[84%] bg-secondary rounded-full"></div>
                      </div>
                      <p className="text-white/60 text-[10px] font-bold">TOP 5% IN RECRUITING SPEED</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-4 rounded-2xl bg-${stat.color}/10 text-${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="px-3 py-1 bg-slate-50 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Monthly
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-slate-800 mb-1">{stat.value}</h3>
                  <p className="text-sm font-bold text-slate-400 mb-4">{stat.title}</p>
                  <div className="flex items-center gap-2 text-[11px] font-bold text-success bg-success/5 px-3 py-1.5 rounded-xl w-fit">
                    <TrendingUp size={12} />
                    {stat.trend}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recently Posted Jobs */}
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden mb-10">
            <div className="p-8 border-b border-slate-50 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-slate-800">Live Opportunities</h2>
                <p className="text-sm font-bold text-slate-400 mt-1">Manage and track your active job listings.</p>
              </div>
              <button 
                onClick={() => navigate('/company/manage-jobs')}
                className="btn btn-ghost bg-slate-50 hover:bg-slate-100 border-none text-primary normal-case font-bold px-6 rounded-2xl"
              >
                View All <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
            <div className="p-4 overflow-x-auto">
              <table className="table w-full border-separate border-spacing-y-3">
                <thead>
                  <tr className="text-slate-400 font-bold border-none uppercase text-[11px] tracking-widest">
                    <th className="bg-transparent pl-8">Job Identification</th>
                    <th className="bg-transparent">Category</th>
                    <th className="bg-transparent">Candidates</th>
                    <th className="bg-transparent">Status</th>
                    <th className="bg-transparent pr-8 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  {recentJobs.map((job) => (
                    <tr key={job.id} className="group hover:bg-slate-50/50 transition-all">
                      <td className="bg-transparent pl-8 rounded-l-[1.5rem]">
                        <div className="flex items-center gap-4 py-2">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg ${job.status === 'Active' ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-400'}`}>
                            {job.title.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 group-hover:text-primary transition-colors">{job.title}</p>
                            <p className="text-xs font-bold text-slate-400 mt-0.5 flex items-center gap-1">
                              <Calendar size={12} />
                              Posted on {new Date(job.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="bg-transparent">
                        <span className="px-4 py-1.5 bg-slate-100 rounded-xl text-xs font-bold text-slate-500 uppercase tracking-tighter">
                          {job.type}
                        </span>
                      </td>
                      <td className="bg-transparent">
                        <div className="flex -space-x-2">
                          {[1,2,3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${job.id + i}`} alt="user" />
                            </div>
                          ))}
                          <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400 shadow-sm">
                            +{job.applications - 3}
                          </div>
                        </div>
                      </td>
                      <td className="bg-transparent">
                        <div className={`badge badge-lg border-none py-4 px-6 rounded-2xl font-bold gap-2 ${job.status === 'Active' ? 'bg-success/10 text-success' : 'bg-slate-100 text-slate-400'}`}>
                          <div className={`w-2 h-2 rounded-full ${job.status === 'Active' ? 'bg-success animate-pulse' : 'bg-slate-400'}`}></div>
                          {job.status}
                        </div>
                      </td>
                      <td className="bg-transparent pr-8 rounded-r-[1.5rem] text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => navigate('/company/applications')}
                            className="btn btn-primary btn-sm rounded-xl normal-case font-bold px-4 h-10 shadow-lg shadow-primary/20"
                          >
                            Review
                          </button>
                          <button className="btn btn-ghost btn-sm btn-square rounded-xl hover:bg-slate-100 border-none">
                            <MoreHorizontal size={20} className="text-slate-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanyDashboard;
