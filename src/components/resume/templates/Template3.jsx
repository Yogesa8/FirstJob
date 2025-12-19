import { Mail, Phone, Linkedin, Globe, MapPin } from 'lucide-react';

const Template3 = ({ data }) => {
    const { personal, education, experience, skills } = data;

    return (
        <div id="resume-preview" className="w-full h-full bg-white text-gray-900 p-8 font-serif">
            {/* Header */}
            <header className="border-b border-gray-300 pb-6 mb-6 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-wide uppercase">
                    {personal.fullName || 'Your Name'}
                </h1>
                <p className="text-lg text-gray-600 italic mb-4">{personal.role || 'Professional Role'}</p>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                    {personal.email && (
                        <div className="flex items-center gap-1">
                            <Mail className="w-3.5 h-3.5" />
                            <span>{personal.email}</span>
                        </div>
                    )}
                    {personal.phone && (
                        <div className="flex items-center gap-1">
                            <Phone className="w-3.5 h-3.5" />
                            <span>{personal.phone}</span>
                        </div>
                    )}
                    {personal.linkedin && (
                        <div className="flex items-center gap-1">
                            <Linkedin className="w-3.5 h-3.5" />
                            <span>{personal.linkedin}</span>
                        </div>
                    )}
                    {personal.location && (
                        <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{personal.location}</span>
                        </div>
                    )}
                    {personal.website && (
                        <div className="flex items-center gap-1">
                            <Globe className="w-3.5 h-3.5" />
                            <span>{personal.website}</span>
                        </div>
                    )}
                </div>
            </header>

            {/* Summary */}
            {personal.summary && (
                <section className="mb-6">
                    <h2 className="text-center text-sm font-bold uppercase border-b border-gray-200 mb-3 pb-1 tracking-widest text-gray-800">Summary</h2>
                    <div
                        className="text-gray-700 text-sm text-justify bg-white rounded-xl min-h-37.5 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:my-4 [&_li]:mb-2 [&_li]:pl-2 text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: personal.summary }}
                    />
                </section>
            )}

            {/* Experience */}
            {experience.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-center text-sm font-bold uppercase border-b border-gray-200 mb-4 pb-1 tracking-widest text-gray-800">Professional Experience</h2>
                    <div className="space-y-5">
                        {experience.map(exp => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-gray-900 text-lg">{exp.company}</h3>
                                    <span className="text-sm text-gray-600 italic">{exp.duration}</span>
                                </div>
                                <div className="text-md font-semibold text-gray-700 mb-2">{exp.role}</div>
                                <div
                                    className="text-gray-700 text-sm text-justify bg-white rounded-xl min-h-37.5 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:my-4 [&_li]:mb-2 [&_li]:pl-2 text-gray-700 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: exp.description }}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {education.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-center text-sm font-bold uppercase border-b border-gray-200 mb-4 pb-1 tracking-widest text-gray-800">Education</h2>
                    <div className="space-y-3">
                        {education.map(edu => (
                            <div key={edu.id} className="flex justify-between items-baseline border-b border-dotted border-gray-200 pb-2 last:border-0">
                                <div>
                                    <h3 className="font-bold text-gray-900">{edu.school}</h3>
                                    <p className="text-sm text-gray-700 italic">{edu.degree}</p>
                                </div>
                                <span className="text-sm text-gray-600">{edu.year}</span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {skills.length > 0 && (
                <section>
                    <h2 className="text-center text-sm font-bold uppercase border-b border-gray-200 mb-4 pb-1 tracking-widest text-gray-800">Technical Skills</h2>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {skills.map((skill, index) => (
                            <span key={index} className="text-sm text-gray-700 font-medium">
                                • {skill}
                            </span>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default Template3;
