import DOMPurify from 'dompurify';
const MinimalTemplate = ({ data, accentColor }) => {
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
        <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 font-light">
            {/* Header */}
            <header className="mb-10">
                <h1 className="text-4xl font-thin mb-4 tracking-wide">
                    {data.personal_info?.full_name || "Your Name"}
                </h1>

                <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                    {data.personal_info?.email && <span>{data.personal_info.email}</span>}
                    {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
                    {data.personal_info?.location && <span>{data.personal_info.location}</span>}
                    {data.personal_info?.linkedin && (
                        <span className="break-all">{data.personal_info.linkedin}</span>
                    )}
                    {data.personal_info?.website && (
                        <span className="break-all">{data.personal_info.website}</span>
                    )}
                </div>
            </header>

            {/* Professional Summary */}
            {data.professional_summary && (
                <section className="mb-10">
                    <p className=" text-gray-700">
                        {data.professional_summary}
                    </p>
                </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
                <section className="mb-10">
                    <h2 className="text-sm uppercase tracking-widest mb-6 font-medium" style={{ color: accentColor }}>
                        Experience
                    </h2>

                    <div className="space-y-6">
                        {data.experience.map((exp, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-lg font-medium">{exp.position}</h3>
                                    <span className="text-sm text-gray-500">
                                        {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-2">{exp.company}</p>
                                {/* {exp.description && (
                                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {exp.description}
                                    </div>
                                )} */}
                                {exp.description && exp.description !== '<p></p>' && (
                                    <div
                                        className="text-gray-700 leading-relaxed whitespace-pre-line preview-content"
                                        dangerouslySetInnerHTML={{ __html: exp.description }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {projects && projects.length > 0 && (
                <section className="mb-10">
                    <h2 className="text-sm uppercase tracking-widest mb-6 font-medium" style={{ color: accentColor }}>
                        Projects
                    </h2>

                    <div className="space-y-4">
                        {projects.map((proj, index) => (
                            <div key={index} className="flex flex-col gap-2 justify-between items-baseline">
                                <h3 className="text-lg font-medium ">{proj.name}</h3>
                                {/* <p className="text-gray-600">{proj.description}</p> */}
                                {proj.description && (
                                    <p
                                        className="text-gray-600 preview-content"
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
                <section className="mb-10">
                    <h2 className="text-sm uppercase tracking-widest mb-6 font-medium" style={{ color: accentColor }}>
                        Education
                    </h2>

                    <div className="space-y-4">
                        {data.education.map((edu, index) => (
                            <div key={index} className="flex justify-between items-baseline">
                                <div>
                                    <h3 className="font-medium">
                                        {edu.degree} {edu.field && `in ${edu.field}`}
                                    </h3>
                                    <p className="text-gray-600">{edu.institution}</p>
                                    {edu.gpa && <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>}
                                </div>
                                <span className="text-sm text-gray-500">
                                    {formatDate(edu.graduation_date)}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
                <section>
                    <h2 className="text-sm uppercase tracking-widest mb-6 font-medium" style={{ color: accentColor }}>
                        Skills
                    </h2>

                    <div className="text-gray-700">
                        {data.skills.join(" • ")}
                    </div>
                </section>
            )}

            {/* Others -> Languages / Hobbies / Certifications / Custom fields */}
            {(() => {
                const others = data.other || data.others || {};
                const hasOthers = (others.languages && others.languages.trim()) || (others.certifications && others.certifications.trim()) || (others.hobbies && others.hobbies.trim()) || (others.fields && others.fields.length);
                if (!hasOthers) return null;
                const parseList = (str) => (str || '').split(/[;,\n]+/).map(s => s.trim()).filter(Boolean);
                const languages = parseList(others.languages);
                const hobbies = parseList(others.hobbies);
                const certifications = parseList(others.certifications);

                return (
                    <section className="mt-8">
                        {languages.length > 0 && (
                            <div className="mb-4">
                                <h3 className="text-sm uppercase tracking-widest mb-2 font-medium" style={{ color: accentColor }}>Languages</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    {languages.map((l, i) => <li key={i}>{l}</li>)}
                                </ul>
                            </div>
                        )}

                        {hobbies.length > 0 && (
                            <div className="mb-4">
                                <h3 className="text-sm uppercase tracking-widest mb-2 font-medium" style={{ color: accentColor }}>Hobbies</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    {hobbies.map((h, i) => <li key={i}>{h}</li>)}
                                </ul>
                            </div>
                        )}

                        {certifications.length > 0 && (
                            <div className="mb-4">
                                <h3 className="text-sm uppercase tracking-widest mb-2 font-medium" style={{ color: accentColor }}>Certifications</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    {certifications.map((c, i) => <li key={i}>{c}</li>)}
                                </ul>
                            </div>
                        )}

                        {others.fields && others.fields.length > 0 && (
                            <div className="mt-2 space-y-2">
                                {others.fields.map((f, i) => (
                                    <div key={i}>
                                        <div className="font-medium">{f.title}</div>
                                        <div className="text-gray-700">{f.value}</div>
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

export default MinimalTemplate;