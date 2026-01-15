import { Mail, Phone, Linkedin, Globe, MapPin } from 'lucide-react';

const Template1 = ({ data }) => {
    const { personal, education, experience, skills, other } = data;

    return (
        <div id="resume-preview" className="w-full h-full bg-white text-gray-800 p-8 leading-relaxed">
            {/* Header */}
            <header className="border-b-2 border-gray-800 pb-6 mb-6">
                <h1 className="text-4xl font-extrabold uppercase tracking-wider text-gray-900 mb-2">
                    {personal.fullName || 'Your Name'}
                </h1>
                <p className="text-xl text-gray-600 font-medium mb-4">{personal.role || 'Professional Role'}</p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    {personal.email && (
                        <div className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            <span>{personal.email}</span>
                        </div>
                    )}
                    {personal.phone && (
                        <div className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            <span>{personal.phone}</span>
                        </div>
                    )}
                    {personal.linkedin && (
                        <div className="flex items-center gap-1">
                            <Linkedin className="w-4 h-4" />
                            <span>{personal.linkedin}</span>
                        </div>
                    )}
                    {personal.location && (
                        <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{personal.location}</span>
                        </div>
                    )}
                    {personal.website && (
                        <div className="flex items-center gap-1">
                            <Globe className="w-4 h-4" />
                            <span>{personal.website}</span>
                        </div>
                    )}
                </div>
            </header>

            {/* Summary */}
            {personal.summary && (
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-3 pb-1 tracking-wide">Professional Summary</h2>
                    <div
                        className="text-gray-700 text-sm text-justify bg-white rounded-xl min-h-37.5 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:my-4 [&_li]:mb-2 [&_li]:pl-2 text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: personal.summary }}
                    />
                </section>
            )}

            {/* Experience */}
            {experience.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1 tracking-wide">Experience</h2>
                    <div className="space-y-4">
                        {experience.map(exp => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-gray-900">{exp.role}</h3>
                                    <span className="text-sm font-medium text-gray-600">{exp.duration}</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-semibold text-gray-700 italic">{exp.company}</span>
                                </div>
                                {/* <p className="text-sm text-gray-600 whitespace-pre-line">{exp.description}</p> */}
                                <div
                                    className="text-gray-700 text-sm text-justify bg-white rounded-xl min-h-37.5 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:my-4 [&_li]:mb-2 [&_li]:pl-2 text-gray-700 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: exp.description }}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <div className="grid grid-cols-12 gap-8">
                {/* Education */}
                {education.length > 0 && (
                    <div className={`${skills.length > 0 ? 'col-span-8' : 'col-span-12'}`}>
                        <section>
                            <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1 tracking-wide">Education</h2>
                            <div className="space-y-3">
                                {education.map(edu => (
                                    <div key={edu.id}>
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="font-bold text-gray-900">{edu.school}</h3>
                                            <span className="text-sm text-gray-600">{edu.year}</span>
                                        </div>
                                        <p className="text-sm text-gray-700">{edu.degree}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {/* Skills */}
                {skills.length > 0 && (
                    <div className={`${education.length > 0 ? 'col-span-4' : 'col-span-12'}`}>
                        <section>
                            <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1 tracking-wide">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>
                )}
            </div>

            {/* Other */}
            {other.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase border-b border-gray-300 mb-4 pb-1 tracking-wide">Other</h2>
                    <div className="space-y-3">
                        {other.map((item, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                                    <span className="text-sm text-gray-600">{item.year}</span>
                                </div>
                                <p className="text-sm text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default Template1;
