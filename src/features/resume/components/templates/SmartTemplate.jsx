import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import DOMPurify from 'dompurify';

const SmartTemplate = ({ data, accentColor }) => {
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
        <div className="max-w-4xl mx-auto p-12 bg-white text-gray-800 leading-relaxed max-h-full font-sans">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl font-bold mb-2 tracking-wide" style={{ color: '#2c3e50' }}>
                    {data.personal_info?.full_name || "Your Name"}
                </h1>
                <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                    {data.personal_info?.location && (
                        <div className="flex items-center gap-1">
                            <MapPin className="size-3" />
                            <span>{data.personal_info.location}</span>
                        </div>
                    )}
                    {data.personal_info?.email && (
                        <div className="flex items-center gap-1">
                            <Mail className="size-3" />
                            <span>{data.personal_info.email}</span>
                        </div>
                    )}
                    {data.personal_info?.phone && (
                        <div className="flex items-center gap-1">
                            <Phone className="size-3" />
                            <span>{data.personal_info.phone}</span>
                        </div>
                    )}
                    {data.personal_info?.linkedin && (
                        <div className="flex items-center gap-1">
                            <Linkedin className="size-3" />
                            <span className="break-all">{data.personal_info.linkedin}</span>
                        </div>
                    )}
                    {data.personal_info?.website && (
                        <div className="flex items-center gap-1">
                            <Globe className="size-3" />
                            <span className="break-all">{data.personal_info.website}</span>
                        </div>
                    )}
                </div>
            </header>

            {/* Professional Summary */}
            {data.professional_summary && (
                <section className="mb-6">
                    <h2 className="text-xs font-bold mb-3 uppercase tracking-wider">
                        PROFESSIONAL SUMMARY
                    </h2>
                    <p className="text-xs text-justify leading-relaxed text-gray-600">
                        {data.professional_summary}
                    </p>
                </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-xs font-bold mb-3 uppercase tracking-wider">
                        PROFESSIONAL EXPERIENCE
                    </h2>

                    <div className="space-y-5">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="mb-5">
                                <div className="mb-1">
                                    <div className="text-xs font-bold mb-1 text-gray-800">
                                        {exp.position} <span className="mx-1">|</span> {exp.company}
                                    </div>
                                    <div className="text-xs text-gray-500 mb-2">
                                        {formatDate(exp.start_date)}—{exp.is_current ? "Present" : formatDate(exp.end_date)}, {exp.location}
                                    </div>
                                </div>
                                {exp.description && exp.description !== '<p></p>' && (
                                    <div
                                        className="text-xs leading-relaxed text-gray-600 preview-content"
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
                    <h2 className="text-xs font-bold mb-3 uppercase tracking-wider">
                        CONSULTANCY
                    </h2>

                    <div className="space-y-5">
                        {data.consultancy.map((cons, index) => (
                            <div key={index} className="mb-5">
                                <div className="mb-1">
                                    <div className="text-xs font-bold mb-1 text-gray-800">
                                        {cons.position} <span className="mx-1">|</span> {cons.company}
                                    </div>
                                    <div className="text-xs text-gray-500 mb-2">
                                        {formatDate(cons.start_date)} - {cons.is_current ? "Present" : formatDate(cons.end_date)}
                                    </div>
                                </div>
                                {cons.description && cons.description !== '<p></p>' && (
                                    <div
                                        className="text-xs leading-relaxed text-gray-600 preview-content"
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
                    <h2 className="text-xs font-bold mb-3 uppercase tracking-wider">
                        PROJECTS
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
                    <h2 className="text-xs font-bold mb-3 uppercase tracking-wider">
                        EDUCATION
                    </h2>

                    <div className="space-y-2">
                        {data.education.map((edu, index) => (
                            <div key={index} className="mb-2">
                                <div className="text-xs font-bold text-gray-800">
                                    {edu.degree} {edu.field && `in ${edu.field}`} <span className="mx-1">|</span> {edu.institution}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {edu.honors && `${edu.honors}, `}{formatDate(edu.graduation_date)}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-xs font-bold mb-3 uppercase tracking-wider">
                        EXPERT-LEVEL SKILLS
                    </h2>

                    <div className="text-xs leading-loose text-gray-600">
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
                                <h3 className="text-xs font-bold mb-2 uppercase tracking-wider">Languages</h3>
                                <div className="text-xs text-gray-600">
                                    {languages.join(', ')}
                                </div>
                            </div>
                        )}

                        {hobbies.length > 0 && (
                            <div className="mb-3">
                                <h3 className="text-xs font-bold mb-2 uppercase tracking-wider">Hobbies</h3>
                                <div className="text-xs text-gray-600">
                                    {hobbies.join(', ')}
                                </div>
                            </div>
                        )}

                        {certifications.length > 0 && (
                            <div className="mb-3">
                                <h3 className="text-xs font-bold mb-2 uppercase tracking-wider">Certifications</h3>
                                <div className="text-xs text-gray-600">
                                    {certifications.join(', ')}
                                </div>
                            </div>
                        )}

                        {others.fields && others.fields.length > 0 && (
                            <div className="mt-2 space-y-2">
                                {others.fields.map((f, i) => (
                                    <div key={i}>
                                        <div className="text-xs font-bold text-gray-800">{f.title}</div>
                                        <div className="text-xs text-gray-600">{f.value}</div>
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

export default SmartTemplate;