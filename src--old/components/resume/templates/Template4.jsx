import { Mail, Phone, Linkedin, Globe, MapPin } from 'lucide-react';

const Template4 = ({ data }) => {
    const { personal, education, experience, skills } = data;

    return (
        <div id="resume-preview" className="w-full h-full flex bg-white text-gray-800 font-sans">
            {/* Sidebar (Left) */}
            <div className="w-1/3 bg-slate-900 text-white p-6 flex flex-col gap-6">
                <div className="text-center mb-4">
                    <div className="w-24 h-24 bg-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                        {personal.fullName ? personal.fullName.substring(0, 2).toUpperCase() : 'ME'}
                    </div>
                    <h1 className="text-xl font-bold uppercase tracking-wider mb-2">
                        {personal.fullName || 'Your Name'}
                    </h1>
                    <p className="text-sm text-slate-300 font-medium">{personal.role || 'Role'}</p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 text-xs text-slate-300">
                    {personal.email && (
                        <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3 flex-shrink-0" />
                            <span className="break-all">{personal.email}</span>
                        </div>
                    )}
                    {personal.phone && (
                        <div className="flex items-center gap-2">
                            <Phone className="w-3 h-3 flex-shrink-0" />
                            <span>{personal.phone}</span>
                        </div>
                    )}
                    {personal.linkedin && (
                        <div className="flex items-center gap-2">
                            <Linkedin className="w-3 h-3 flex-shrink-0" />
                            <span>{personal.linkedin}</span>
                        </div>
                    )}
                    {personal.location && (
                        <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3 flex-shrink-0" />
                            <span>{personal.location}</span>
                        </div>
                    )}
                    {personal.website && (
                        <div className="flex items-center gap-2">
                            <Globe className="w-3 h-3 flex-shrink-0" />
                            <span>{personal.website}</span>
                        </div>
                    )}
                </div>

                {/* Skills in Sidebar */}
                {skills.length > 0 && (
                    <div className="mt-4">
                        <h2 className="text-sm font-bold uppercase border-b border-slate-700 pb-1 mb-3 text-slate-100">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span key={index} className="px-2 py-1 bg-slate-800 text-slate-200 text-xs rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Education in Sidebar */}
                {education.length > 0 && (
                    <div className="mt-4">
                        <h2 className="text-sm font-bold uppercase border-b border-slate-700 pb-1 mb-3 text-slate-100">Education</h2>
                        <div className="space-y-4">
                            {education.map(edu => (
                                <div key={edu.id}>
                                    <h3 className="font-bold text-white text-sm">{edu.school}</h3>
                                    <div className="text-xs text-slate-400">{edu.degree}</div>
                                    <div className="text-xs text-slate-500">{edu.year}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content (Right) */}
            <div className="w-2/3 p-8">
                {/* Summary */}
                {personal.summary && (
                    <section className="mb-8">
                        <h2 className="text-lg font-bold uppercase text-slate-900 border-b-2 border-slate-900 mb-3 pb-1">Profile</h2>
                        <div
                            className="text-slate-700 text-sm text-justify bg-white rounded-xl min-h-37.5 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:my-4 [&_li]:mb-2 [&_li]:pl-2 text-slate-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: personal.summary }}
                        />
                    </section>
                )}

                {/* Experience */}
                {experience.length > 0 && (
                    <section>
                        <h2 className="text-lg font-bold uppercase text-slate-900 border-b-2 border-slate-900 mb-4 pb-1">Experience</h2>
                        <div className="space-y-6">
                            {experience.map(exp => (
                                <div key={exp.id}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="font-bold text-slate-800 text-base">{exp.role}</h3>
                                        <span className="text-sm font-semibold text-slate-500">{exp.duration}</span>
                                    </div>
                                    <div className="text-sm font-medium text-slate-600 mb-2">{exp.company}</div>
                                    <div
                                        className="text-slate-600 text-sm text-justify bg-white rounded-xl min-h-37.5 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:my-4 [&_li]:mb-2 [&_li]:pl-2 text-slate-600 leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: exp.description }}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default Template4;
