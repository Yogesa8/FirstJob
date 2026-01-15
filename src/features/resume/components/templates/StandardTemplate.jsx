import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import DOMPurify from 'dompurify';

const StandardTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    const projects = data.project || data.projects || [];

    return (
        <div className="max-w-4xl mx-auto p-12 bg-white text-gray-800 leading-relaxed max-h-full font-serif">
            {/* Header */}
            <header className="text-center mb-8">
                <h1 className="text-3xl font-normal mb-3 tracking-wide" style={{ color: '#2c3e50' }}>
                    {data.personal_info?.full_name || "Your Name"}
                </h1>
                <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-gray-600">
                    {data.personal_info?.location && (
                        <span>{data.personal_info.location}</span>
                    )}
                    {data.personal_info?.email && (
                        <>
                            <Mail className="size-3 text-gray-500" />
                            <span>{data.personal_info.email}</span>
                        </>
                    )}
                    {data.personal_info?.phone && (
                        <>
                            <Phone className="size-3 text-gray-500" />
                            <span>{data.personal_info.phone}</span>
                        </>
                    )}
                    {data.personal_info?.linkedin && (
                        <>
                            <Linkedin className="size-3 text-gray-500" />
                            <span className="break-all">{data.personal_info.linkedin}</span>
                        </>
                    )}
                    {data.personal_info?.website && (
                        <>
                            <Globe className="size-3 text-gray-500" />
                            <span className="break-all">{data.personal_info.website}</span>
                        </>
                    )}
                </div>
            </header>

            {/* Professional Summary */}
            {data.professional_summary && (
                <section className="mb-6">
                    <h2 className="text-xs font-bold mb-3 pb-1 border-b-2 border-gray-800 uppercase tracking-wider">
                        Professional Summary
                    </h2>
                    <p className="text-xs text-justify leading-relaxed text-gray-700">
                        {data.professional_summary}
                    </p>
                </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-xs font-bold mb-3 pb-1 border-b-2 border-gray-800 uppercase tracking-wider">
                        Professional Experience
                    </h2>

                    <div className="space-y-5">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="mb-5">
                                <div className="text-sm font-bold mb-1">
                                    {exp.position}
                                </div>
                                <div className="flex justify-between mb-2">
                                    <div className="text-xs font-bold text-gray-700">
                                        {exp.company}
                                    </div>
                                    <div className="text-xs text-gray-600 text-right">
                                        {formatDate(exp.start_date)}—{exp.is_current ? "Present" : formatDate(exp.end_date)}, {exp.location}
                                    </div>
                                </div>
                                {exp.description && exp.description !== '<p></p>' && (
                                    <div
                                        className="text-xs leading-relaxed text-gray-700 preview-content"
                                        dangerouslySetInnerHTML={{ __html: exp.description }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Consultancy */}
            {data.consultancy && data.consultancy.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-xs font-bold mb-3 pb-1 border-b-2 border-gray-800 uppercase tracking-wider">
                        Consultancy
                    </h2>

                    <div className="space-y-5">
                        {data.consultancy.map((cons, index) => (
                            <div key={index} className="mb-5">
                                <div className="text-sm font-bold mb-1">
                                    {cons.position}
                                </div>
                                <div className="text-xs text-gray-600 mb-2">
                                    {cons.company} · {formatDate(cons.start_date)} - {cons.is_current ? "Present" : formatDate(cons.end_date)}
                                </div>
                                {cons.description && cons.description !== '<p></p>' && (
                                    <div
                                        className="text-xs leading-relaxed text-gray-700 preview-content"
                                        dangerouslySetInnerHTML={{ __html: cons.description }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {projects && projects.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-xs font-bold mb-3 pb-1 border-b-2 border-gray-800 uppercase tracking-wider">
                        Projects
                    </h2>

                    <div className="space-y-3">
                        {projects.map((proj, index) => (
                            <div key={index} className="mb-3">
                                <div className="text-xs font-bold text-gray-800">
                                    {proj.name}
                                </div>
                                {proj.description && (
                                    <div
                                        className="text-xs text-gray-600 preview-content"
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(proj.description)
                                        }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {data.education && data.education.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-xs font-bold mb-3 pb-1 border-b-2 border-gray-800 uppercase tracking-wider">
                        Education
                    </h2>

                    <div className="space-y-2">
                        {data.education.map((edu, index) => (
                            <div key={index} className="mb-2">
                                <div className="flex justify-between mb-1">
                                    <div className="text-xs font-bold text-gray-700">
                                        {edu.degree} {edu.field && `with a ${edu.field} Emphasis`}
                                    </div>
                                </div>
                                <div className="text-xs text-gray-600">
                                    {edu.institution} · {edu.honors && `${edu.honors} · `}{formatDate(edu.graduation_date)}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-xs font-bold mb-3 pb-1 border-b-2 border-gray-800 uppercase tracking-wider">
                        Expert-Level Skills
                    </h2>

                    <div className="text-xs leading-loose text-gray-700">
                        {data.skills.map((skill, index) => (
                            <div key={index} className="mb-1">
                                <span className="font-bold">{skill.category}:</span> {skill.items.join(', ')}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Others: render as separate sections (Languages, Certifications, Hobbies, Custom fields) */}
            {(() => {
                const others = data.other || data.others || {};
                const hasOthers = (others.languages && others.languages.trim()) || (others.certifications && others.certifications.trim()) || (others.hobbies && others.hobbies.trim()) || (others.fields && others.fields.length);
                if (!hasOthers) return null;
                const parseList = (str) => (str || '').split(/[;,\n]+/).map(s => s.trim()).filter(Boolean);
                const languages = parseList(others.languages);
                const hobbies = parseList(others.hobbies);
                const certifications = parseList(others.certifications);

                return (
                    <section className="mb-6">
                        {languages.length > 0 && (
                            <div className="mb-3">
                                <h3 className="text-xs font-bold mb-2 pb-1 border-b-2 border-gray-800 uppercase tracking-wider">Languages</h3>
                                <div className="text-xs text-gray-700">
                                    {languages.join(', ')}
                                </div>
                            </div>
                        )}

                        {hobbies.length > 0 && (
                            <div className="mb-3">
                                <h3 className="text-xs font-bold mb-2 pb-1 border-b-2 border-gray-800 uppercase tracking-wider">Hobbies</h3>
                                <div className="text-xs text-gray-700">
                                    {hobbies.join(', ')}
                                </div>
                            </div>
                        )}

                        {certifications.length > 0 && (
                            <div className="mb-3">
                                <h3 className="text-xs font-bold mb-2 pb-1 border-b-2 border-gray-800 uppercase tracking-wider">Certifications</h3>
                                <div className="text-xs text-gray-700">
                                    {certifications.join(', ')}
                                </div>
                            </div>
                        )}

                        {others.fields && others.fields.length > 0 && (
                            <div className="mt-2 space-y-2">
                                {others.fields.map((f, i) => (
                                    <div key={i}>
                                        <div className="text-xs font-bold text-gray-800">{f.title}</div>
                                        <div className="text-xs text-gray-700">{f.value}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                )
            })()}
        </div>
    );
}

export default StandardTemplate;