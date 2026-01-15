import React, { useState } from 'react';
import { CompanySidebar } from './CompanySidebar';
import { 
  Edit3, 
  Trash2, 
  XCircle, 
  Eye, 
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Users,
  Search,
  Filter,
  Download,
  MapPin,
  Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ManageJobs = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const jobs = [
    { id: 1, title: 'Senior Frontend Developer', status: 'Active', applications: 45, date: '2026-01-05', type: 'Full-time', location: 'Remote', salary: '$120k - $150k' },
    { id: 2, title: 'Backend Architect', status: 'Active', applications: 32, date: '2026-01-04', type: 'Full-time', location: 'New York, NY', salary: '$140k - $180k' },
    { id: 3, title: 'UI/UX Designer', status: 'Closed', applications: 68, date: '2026-01-02', type: 'Contract', location: 'Hybrid', salary: '$80k - $110k' },
    { id: 4, title: 'Product Manager', status: 'Active', applications: 12, date: '2025-12-28', type: 'Full-time', location: 'San Francisco, CA', salary: '$130k - $160k' },
    { id: 5, title: 'DevOps Engineer', status: 'Active', applications: 24, date: '2025-12-20', type: 'Remote', salary: '$110k - $140k' },
    { id: 6, title: 'QA Specialist', status: 'Closed', applications: 15, date: '2025-12-15', type: 'Part-time', location: 'Remote', salary: '$60k - $90k' },
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <CompanySidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <nav className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                <span>Company</span>
                <ChevronRight size={10} />
                <span className="text-primary">Manage Jobs</span>
              </nav>
              <h1 className="text-4xl font-black text-slate-800 tracking-tight">Job Inventory</h1>
              <p className="text-slate-500 font-medium mt-1">Efficiently manage and monitor your organization's open positions.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="btn btn-ghost bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 normal-case font-bold px-6 rounded-2xl shadow-sm">
                <Download size={18} className="mr-2" />
                Export CSV
              </button>
              <button 
                onClick={() => navigate('/company/post-job')}
                className="btn btn-primary normal-case font-bold px-8 rounded-2xl shadow-lg shadow-primary/20"
              >
                Create Position
              </button>
            </div>
          </div>

          {/* Filters & Search Bar */}
          <div className="bg-white p-4 rounded-[2rem] shadow-sm border border-slate-100 flex flex-wrap items-center gap-4 mb-8">
            <div className="relative flex-1 min-w-[300px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by job title, location or keywords..." 
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all font-medium text-slate-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl">
              {['All', 'Active', 'Closed'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                    statusFilter === status 
                      ? 'bg-white text-primary shadow-sm' 
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
            <button className="btn btn-ghost btn-square bg-slate-50 border-none rounded-2xl">
              <Filter size={18} className="text-slate-600" />
            </button>
          </div>

          {/* Jobs Table */}
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto p-4">
              <table className="table w-full border-separate border-spacing-y-3">
                <thead>
                  <tr className="text-slate-400 font-bold border-none uppercase text-[11px] tracking-widest">
                    <th className="bg-transparent pl-8">Position Details</th>
                    <th className="bg-transparent">Engagement</th>
                    <th className="bg-transparent">Status</th>
                    <th className="bg-transparent">Analytics</th>
                    <th className="bg-transparent pr-8 text-right">Operations</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  {filteredJobs.map((job) => (
                    <tr key={job.id} className="group hover:bg-slate-50/50 transition-all border-none">
                      <td className="bg-transparent pl-8 rounded-l-[1.5rem] py-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shadow-inner ${
                            job.status === 'Active' ? 'bg-primary/5 text-primary border border-primary/10' : 'bg-slate-50 text-slate-300 border border-slate-100'
                          }`}>
                            {job.title.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 group-hover:text-primary transition-colors text-lg leading-tight">{job.title}</p>
                            <div className="flex items-center gap-3 mt-1.5">
                              <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-tighter">
                                <MapPin size={10} className="text-slate-300" /> {job.location}
                              </span>
                              <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                              <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-tighter">
                                <Clock size={10} className="text-slate-300" /> {job.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="bg-transparent">
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-slate-700">{job.salary}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Est. Budget</p>
                        </div>
                      </td>
                      <td className="bg-transparent">
                        <div className={`badge badge-lg border-none h-9 px-6 rounded-xl font-bold gap-2 ${
                          job.status === 'Active' ? 'bg-success/10 text-success' : 'bg-slate-100 text-slate-400'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${job.status === 'Active' ? 'bg-success animate-pulse' : 'bg-slate-400'}`}></div>
                          {job.status}
                        </div>
                      </td>
                      <td className="bg-transparent">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="text-lg font-black text-slate-800 leading-none">{job.applications}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-1">Candidates</p>
                          </div>
                          <div className="h-8 w-[1px] bg-slate-100"></div>
                          <div className="text-center">
                            <p className="text-lg font-black text-slate-800 leading-none">05</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-1">New</p>
                          </div>
                        </div>
                      </td>
                      <td className="bg-transparent pr-8 rounded-r-[1.5rem] text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="btn btn-ghost btn-sm btn-square rounded-xl hover:bg-white hover:shadow-md hover:text-primary transition-all border border-transparent hover:border-slate-100">
                            <Edit3 size={18} />
                          </button>
                          <button className="btn btn-ghost btn-sm btn-square rounded-xl hover:bg-white hover:shadow-md hover:text-error transition-all border border-transparent hover:border-slate-100">
                            <Trash2 size={18} />
                          </button>
                          <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-sm btn-square rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                              <MoreHorizontal size={20} />
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-3 shadow-2xl bg-white rounded-2xl w-52 border border-slate-50 mt-2">
                              <li><button className="font-bold text-sm py-2.5 rounded-xl"><Eye size={16} className="mr-2" /> View Public Page</button></li>
                              <li><button className="font-bold text-sm py-2.5 rounded-xl" onClick={() => navigate('/company/applications')}><Users size={16} className="mr-2" /> Review Applicants</button></li>
                              <li className="text-warning"><button className="font-bold text-sm py-2.5 rounded-xl"><XCircle size={16} className="mr-2" /> Deactivate Job</button></li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-8 border-t border-slate-50 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <p className="text-sm font-bold text-slate-400 italic">Showing <span className="text-slate-800">1 to 6</span> of 12 job listings</p>
                <div className="h-4 w-[1px] bg-slate-200"></div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Per page:</span>
                  <select className="select select-ghost select-xs font-bold text-slate-800 focus:outline-none">
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl">
                <button className="btn btn-ghost btn-sm btn-square rounded-xl hover:bg-white disabled:opacity-30" disabled>
                  <ChevronLeft size={18} />
                </button>
                <div className="flex items-center px-2">
                  <button className="w-10 h-10 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20">1</button>
                  <button className="w-10 h-10 rounded-xl hover:bg-white text-slate-400 font-bold text-sm transition-all">2</button>
                  <button className="w-10 h-10 rounded-xl hover:bg-white text-slate-400 font-bold text-sm transition-all">3</button>
                </div>
                <button className="btn btn-ghost btn-sm btn-square rounded-xl hover:bg-white">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManageJobs;
