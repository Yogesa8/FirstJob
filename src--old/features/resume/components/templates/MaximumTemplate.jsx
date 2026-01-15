import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import DOMPurify from 'dompurify';

const MaximumTemplate = ({ data, accentColor }) => {
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
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2 tracking-wide" style={{ color: '#000' }}>
                    {data.personal_info?.full_name || "Your Name"}
                </h1>
                <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
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
                    <h2 className="text-xs font-bold mb-3 pb-1 border-b-2 border-black uppercase tracking-wider">
                        PROFESSIONAL SUMMARY
                    </h2>
                    <p className="text-xs text-justify leading-relaxed text-gray-800">
                        {data.professional_summary}
                    </p>
                </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-xs font-bold mb-3 pb-1 border-b-2 border-black uppercase tracking-wider">
                        PROFESSIONAL EXPERIENCE
                    </h2>

                    <div className="space-y-5">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="mb-5">
                                <div className="text-xs font-bold mb-2 text-black">
                                    {exp.position} | {exp.company} | {exp.location} | {formatDate(exp.start_date)} — {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                </div>
                                {exp.description && exp.description !== '<p></p>' && (
                                    <div
                                        className="text-xs leading-relaxed text-gray-800 preview-content"
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
                    <h2 className="text-xs font-bold mb-3 pb-1 border-b-2 border-black uppercase tracking-wider">
                        CONSULTANCY
                    </h2>

                    <div className="space-y-5">
                        {data.consultancy.map((cons, index) => (
                            <div key={index} className="mb-5">
                                <div className="text-xs font-bold mb-2 text-black">
                                    {cons.position} | {cons.company} | {formatDate(cons.start_date)} - {cons.is_current ? "Present" : formatDate(cons.end_date)}
                                </div>
                                {cons.description && cons.description !== '<p></p>' && (
                                    <div
                                        className="text-xs leading-relaxed text-gray-800 preview-content"
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
                    <h2 className="text-xs font-bold mb-3 pb-1 border-b-2 border-black uppercase tracking-wider">
                        PROJECTS
                    </h2>

                    <div className="space-y-3">
                        {projects.map((proj, index) => (
                            <div key={index} className="mb-3">
                                <div className="text-xs font-bold text-black">
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
                    <h2 className="text-xs font-bold mb-3 pb-1 border-b-2 border-black uppercase tracking-wider">
                        EDUCATION
                    </h2>

                    <div className="space-y-2">
                        {data.education.map((edu, index) => (
                            <div key={index} className="mb-2">
                                <div className="text-xs font-bold text-black">
                                    {edu.degree} {edu.field && `in ${edu.field}`} | {edu.institution} {edu.honors && `| ${edu.honors}`} | {formatDate(edu.graduation_date)}
                                </div>
                                {edu.details && (
                                    <div className="text-xs text-gray-600 pl-4 relative">
                                        <span className="absolute left-0">•</span> {edu.details}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-xs font-bold mb-3 pb-1 border-b-2 border-black uppercase tracking-wider">
                        EXPERT-LEVEL SKILLS
                    </h2>

                    <div className="text-xs leading-loose text-gray-800">
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
                                <h3 className="text-xs font-bold mb-2 pb-1 border-b-2 border-black uppercase tracking-wider">Languages</h3>
                                <div className="text-xs text-gray-700 pl-4">
                                    {languages.map((l, i) => (
                                        <div key={i} className="relative">
                                            <span className="absolute left-0">•</span> <span className="pl-4">{l}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {hobbies.length > 0 && (
                            <div className="mb-3">
                                <h3 className="text-xs font-bold mb-2 pb-1 border-b-2 border-black uppercase tracking-wider">Hobbies</h3>
                                <div className="text-xs text-gray-700 pl-4">
                                    {hobbies.map((h, i) => (
                                        <div key={i} className="relative">
                                            <span className="absolute left-0">•</span> <span className="pl-4">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {certifications.length > 0 && (
                            <div className="mb-3">
                                <h3 className="text-xs font-bold mb-2 pb-1 border-b-2 border-black uppercase tracking-wider">Certifications</h3>
                                <div className="text-xs text-gray-700 pl-4">
                                    {certifications.map((c, i) => (
                                        <div key={i} className="relative">
                                            <span className="absolute left-0">•</span> <span className="pl-4">{c}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {others.fields && others.fields.length > 0 && (
                            <div className="mt-2 space-y-2">
                                {others.fields.map((f, i) => (
                                    <div key={i}>
                                        <div className="text-xs font-bold text-black">{f.title}</div>
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

export default MaximumTemplate;