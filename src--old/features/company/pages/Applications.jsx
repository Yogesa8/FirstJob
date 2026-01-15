import React, { useState } from 'react';
import { CompanySidebar } from './CompanySidebar';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Mail, 
  Phone, 
  ChevronRight, 
  ChevronLeft,
  X,
  Github,
  Linkedin,
  Globe,
  CheckCircle2,
  Briefcase
} from 'lucide-react';

const Applications = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const applications = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      phone: '+1 (555) 000-1111',
      jobTitle: 'Senior Frontend Developer', 
      experience: '5 Years', 
      match: 95, 
      date: '2026-01-07', 
      status: 'Reviewing',
      skills: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
      summary: 'Experienced frontend lead with a passion for building scalable web applications. Expert in modern JavaScript frameworks and performance optimization.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
    },
    { 
      id: 2, 
      name: 'Sarah Smith', 
      email: 'sarah@example.com', 
      phone: '+1 (555) 222-3333',
      jobTitle: 'UI/UX Designer', 
      experience: '3 Years', 
      match: 88, 
      date: '2026-01-06', 
      status: 'New',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      summary: 'Creative designer focused on user-centric experiences. Skilled in creating complex design systems and conducting usability tests.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    { 
      id: 3, 
      name: 'Mike Johnson', 
      email: 'mike@example.com', 
      phone: '+1 (555) 444-5555',
      jobTitle: 'Backend Architect', 
      experience: '8 Years', 
      match: 92, 
      date: '2026-01-05', 
      status: 'Interviewing',
      skills: ['Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
      summary: 'Cloud architecture expert with deep knowledge of distributed systems and microservices. Proven track record of handling high-traffic platforms.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
    }
  ];

  const filteredApplications = applications.filter(app => 
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    app.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <CompanySidebar />
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <nav className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                <span>Company</span>
                <ChevronRight size={10} />
                <span className="text-primary">Applications</span>
              </nav>
              <h1 className="text-4xl font-black text-slate-800 tracking-tight">Candidate Pipeline</h1>
              <p className="text-slate-500 font-medium mt-1">Review and manage potential hires for your active positions.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="btn btn-ghost bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 normal-case font-bold px-6 rounded-2xl shadow-sm">
                <Download size={18} className="mr-2" />
                Download Report
              </button>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="bg-white p-4 rounded-[2rem] shadow-sm border border-slate-100 flex flex-wrap items-center gap-4 mb-8">
            <div className="relative flex-1 min-w-[300px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search candidates by name, job, or skills..." 
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all font-medium text-slate-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl">
              <button className="px-6 py-2 rounded-xl text-sm font-bold bg-white text-primary shadow-sm">All Active</button>
              <button className="px-6 py-2 rounded-xl text-sm font-bold text-slate-400 hover:text-slate-600 transition-all">New</button>
              <button className="px-6 py-2 rounded-xl text-sm font-bold text-slate-400 hover:text-slate-600 transition-all">Shortlisted</button>
            </div>
            <button className="btn btn-ghost btn-square bg-slate-50 border-none rounded-2xl">
              <Filter size={18} className="text-slate-600" />
            </button>
          </div>

          {/* Applications Table */}
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto p-4">
              <table className="table w-full border-separate border-spacing-y-3">
                <thead>
                  <tr className="text-slate-400 font-bold border-none uppercase text-[11px] tracking-widest">
                    <th className="bg-transparent pl-8">Candidate Profile</th>
                    <th className="bg-transparent">Applied Role</th>
                    <th className="bg-transparent text-center">Match %</th>
                    <th className="bg-transparent">Status</th>
                    <th className="bg-transparent pr-8 text-right">Review</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  {filteredApplications.map((app) => (
                    <tr key={app.id} className="group hover:bg-slate-50/50 transition-all">
                      <td className="bg-transparent pl-8 rounded-l-[1.5rem] py-4">
                        <div className="flex items-center gap-4">
                          <div className="avatar">
                            <div className="w-12 h-12 rounded-2xl shadow-inner border border-slate-100">
                              <img src={app.avatar} alt={app.name} />
                            </div>
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 group-hover:text-primary transition-colors">{app.name}</p>
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5">{app.experience} Experience</p>
                          </div>
                        </div>
                      </td>
                      <td className="bg-transparent">
                        <div>
                          <p className="text-sm font-bold text-slate-700 leading-tight">{app.jobTitle}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 italic">
                            {new Date(app.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                          </p>
                        </div>
                      </td>
                      <td className="bg-transparent text-center">
                        <div className="radial-progress text-primary bg-primary/5 border-4 border-primary/5" style={{"--value": app.match, "--size": "3rem", "--thickness": "3px"}} role="progressbar">
                          <span className="text-[11px] font-black">{app.match}%</span>
                        </div>
                      </td>
                      <td className="bg-transparent">
                        <div className={`badge badge-lg border-none h-9 px-6 rounded-xl font-bold gap-2 ${
                          app.status === 'New' ? 'bg-primary/10 text-primary' : 
                          app.status === 'Reviewing' ? 'bg-warning/10 text-warning' : 
                          'bg-success/10 text-success'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            app.status === 'New' ? 'bg-primary animate-pulse' : 
                            app.status === 'Reviewing' ? 'bg-warning' : 
                            'bg-success'
                          }`}></div>
                          {app.status}
                        </div>
                      </td>
                      <td className="bg-transparent pr-8 rounded-r-[1.5rem] text-right">
                        <button 
                          onClick={() => setSelectedCandidate(app)}
                          className="btn btn-ghost bg-slate-50 hover:bg-white hover:shadow-md border-none text-slate-600 normal-case font-bold px-6 rounded-xl"
                        >
                          Review <Eye size={16} className="ml-2" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-8 border-t border-slate-50 flex items-center justify-between">
              <p className="text-sm font-bold text-slate-400 italic">Showing <span className="text-slate-800">1 to 3</span> of 34 candidates</p>
              <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl">
                <button className="btn btn-ghost btn-sm btn-square rounded-xl hover:bg-white">
                  <ChevronLeft size={18} />
                </button>
                <div className="flex items-center px-2">
                  <button className="w-10 h-10 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20">1</button>
                  <button className="w-10 h-10 rounded-xl hover:bg-white text-slate-400 font-bold text-sm transition-all">2</button>
                </div>
                <button className="btn btn-ghost btn-sm btn-square rounded-xl hover:bg-white">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Candidate Profile Modal */}
      {selectedCandidate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-end bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-full max-w-2xl bg-white h-screen shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-500">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-100 p-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="w-16 h-16 rounded-[1.5rem] shadow-xl border-2 border-primary/10">
                    <img src={selectedCandidate.avatar} alt={selectedCandidate.name} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-800">{selectedCandidate.name}</h2>
                  <p className="text-sm font-bold text-primary flex items-center gap-1">
                    Candidate ID: #APP-2026-{selectedCandidate.id}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCandidate(null)}
                className="btn btn-ghost btn-circle bg-slate-50 hover:bg-error/10 hover:text-error transition-all"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 space-y-8">
              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight mb-1">Email Address</p>
                    <p className="font-bold text-slate-700 text-sm truncate">{selectedCandidate.email}</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight mb-1">Phone Number</p>
                    <p className="font-bold text-slate-700 text-sm">{selectedCandidate.phone}</p>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-4">
                <h3 className="text-lg font-black text-slate-800 flex items-center gap-2 italic underline decoration-primary decoration-4 underline-offset-4">
                  Professional Summary
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed bg-slate-50/50 p-6 rounded-[2rem] border border-dashed border-slate-200">
                  "{selectedCandidate.summary}"
                </p>
              </div>

              {/* Stats & Match */}
              <div className="bg-primary rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-black mb-1">{selectedCandidate.match}% Match</h3>
                    <p className="text-primary-content/80 font-bold text-sm">Perfect fit for {selectedCandidate.jobTitle}</p>
                  </div>
                  <CheckCircle2 size={48} className="text-white/20" />
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h3 className="text-lg font-black text-slate-800 italic underline decoration-secondary decoration-4 underline-offset-4">Core Competencies</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedCandidate.skills.map((skill, i) => (
                    <span key={i} className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-xl font-bold text-sm border border-slate-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience & Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
                <div className="space-y-4">
                   <h3 className="text-lg font-black text-slate-800 italic underline decoration-accent decoration-4 underline-offset-4">Experience</h3>
                   <div className="flex items-center gap-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                      <Briefcase className="text-accent" />
                      <span className="font-bold text-slate-700">{selectedCandidate.experience} Total Experience</span>
                   </div>
                </div>
                <div className="space-y-4">
                   <h3 className="text-lg font-black text-slate-800 italic underline decoration-warning decoration-4 underline-offset-4">External Links</h3>
                   <div className="flex gap-2">
                      <button className="btn btn-ghost btn-square bg-slate-100 rounded-xl hover:bg-slate-800 hover:text-white transition-all">
                        <Github size={20} />
                      </button>
                      <button className="btn btn-ghost btn-square bg-slate-100 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                        <Linkedin size={20} />
                      </button>
                      <button className="btn btn-ghost btn-square bg-slate-100 rounded-xl hover:bg-primary hover:text-white transition-all">
                        <Globe size={20} />
                      </button>
                   </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="sticky bottom-0 bg-white/80 backdrop-blur-md border-t border-slate-100 pt-8 pb-4 flex gap-4">
                <button className="btn btn-primary flex-1 h-14 rounded-2xl font-black text-lg normal-case shadow-xl shadow-primary/20">
                  Shortlist Candidate
                </button>
                <button className="btn btn-ghost bg-slate-100 text-slate-400 font-bold h-14 px-8 rounded-2xl normal-case">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Applications;
