import React, { useState } from 'react'

const CompanyDashboard = () => {
    const [notes, setNotes] = useState("");
    const [sectionsOpen, setSectionsOpen] = useState({
        education: false,
        accomplishments: false,
        certification: false,
    });

    const toggleSection = (key) =>
        setSectionsOpen((prev) => ({ ...prev, [key]: !prev[key] }));

    const skills = [
        "User Interface Designing",
        "UX",
        "UI",
        "Adobe XD",
        "Mobile Apps",
        "User Research",
        "Wireframing",
        "Information Architecture",
    ];

    const experience = [
        {
            company: "Infosys",
            role: "Product & UI/UX Designer",
            period: "Apr 2018 - Present",
            location: "Pune, India",
        },
        {
            company: "Pixel Studio",
            role: "UI/UX Designer",
            period: "Oct 2016 - July 2016",
            location: "Bengaluru, India",
        },
        {
            company: "Ramotion Studio",
            role: "Web Designer",
            period: "April 2015 - July 2016",
            location: "Bengaluru, India",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Bar */}
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <button className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                    <BackIcon className="w-4 h-4" />
                    Back
                </button>
                <button className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                    <ShareIcon className="w-4 h-4" />
                    Share Profile
                </button>
            </div>

            {/* Card */}
            <div className="max-w-6xl mx-auto px-4 pb-10">
                <div className="bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden">
                    {/* Header */}
                    <div className="p-6 md:p-8 border-b border-gray-100">
                        <div className="flex flex-col md:flex-row md:items-center md:gap-8">
                            <img
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
                                alt="Ananya Grover"
                                className="w-24 h-24 rounded-xl object-cover border border-gray-200"
                            />
                            <div className="mt-4 md:mt-0">
                                <h1 className="text-2xl font-semibold text-gray-900">
                                    Ananya Grover
                                </h1>
                                <p className="text-sm font-medium text-indigo-600 mt-1">UI/UX Designer</p>
                                <p className="text-sm text-gray-700 mt-4 max-w-3xl">
                                    Full stack product designer with hands-on experience in solving problems for clients
                                    ranging from Real Estate, Hospitality, Rentals, On Demand Healthcare, IT Services &
                                    Social Network among others. I&apos;ve good communication skills, well-defined process
                                    for engagement, a toolkit for collaboration & a user-centered approach to design.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left column */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Skills */}
                            <section>
                                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                                    Skills
                                </h2>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 text-sm bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            {/* Add Notes */}
                            <section className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-semibold text-gray-900">Add notes</h3>
                                    <span className="text-xs text-gray-500">Add notes for future reference</span>
                                </div>
                                <textarea
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    placeholder="Write your notes here..."
                                    className="mt-3 w-full h-24 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm p-3"
                                />
                                <div className="mt-3">
                                    <button
                                        onClick={() => alert("Note saved")}
                                        className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700"
                                    >
                                        <PlusIcon className="w-4 h-4" />
                                        Add note
                                    </button>
                                </div>
                            </section>

                            {/* Experience */}
                            <section>
                                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                                    Experience
                                </h2>
                                <div className="mt-4 space-y-6">
                                    {experience.map((exp, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="flex flex-col items-center">
                                                <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2" />
                                                {idx !== experience.length - 1 && (
                                                    <div className="w-px h-16 bg-gray-200" />
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-base font-semibold text-gray-900">{exp.company}</h3>
                                                    <span className="text-xs text-gray-500">{exp.period}</span>
                                                </div>
                                                <p className="text-sm text-gray-700">{exp.role}</p>
                                                <p className="text-xs text-gray-500 mt-1">{exp.location}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Collapsed Sections */}
                            <section className="space-y-3">
                                <Disclosure
                                    title="Education"
                                    open={sectionsOpen.education}
                                    onToggle={() => toggleSection("education")}
                                >
                                    {/* Add education details here */}
                                    <ul className="list-disc pl-5 text-sm text-gray-700">
                                        <li>B.Des, Interaction Design — NID Ahmedabad</li>
                                        <li>Certificate, Human-Computer Interaction — Coursera</li>
                                    </ul>
                                </Disclosure>

                                <Disclosure
                                    title="Accomplishments"
                                    open={sectionsOpen.accomplishments}
                                    onToggle={() => toggleSection("accomplishments")}
                                >
                                    {/* Add accomplishments details here */}
                                    <ul className="list-disc pl-5 text-sm text-gray-700">
                                        <li>Red Dot Concept Award — Shortlisted</li>
                                        <li>Led design for a healthcare app to 1M+ users</li>
                                    </ul>
                                </Disclosure>

                                <Disclosure
                                    title="Certification"
                                    open={sectionsOpen.certification}
                                    onToggle={() => toggleSection("certification")}
                                >
                                    {/* Add certification details here */}
                                    <ul className="list-disc pl-5 text-sm text-gray-700">
                                        <li>NN/g UX Certification</li>
                                        <li>Google UX Design Professional Certificate</li>
                                    </ul>
                                </Disclosure>
                            </section>
                        </div>

                        {/* Right column */}
                        <div className="space-y-6">
                            {/* Basic Information */}
                            <section className="border border-gray-200 rounded-lg p-4">
                                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                                    Basic information
                                </h2>
                                <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                    <InfoRow label="Age" value="28 years" />
                                    <InfoRow label="Years of experience" value="6 years" />
                                    <InfoRow label="Phone" value="+91 98123 55679" />
                                    <InfoRow label="CTC" value="12.5 Lac" />
                                    <InfoRow label="Location" value="Ahmedabad, Gujarat" />
                                    <InfoRow label="Email" value="ananyasharma@gmail.com" />
                                </dl>

                                <div className="mt-4 flex flex-wrap gap-3">
                                    <button className="inline-flex items-center gap-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-md hover:bg-black">
                                        <DownloadIcon className="w-4 h-4" />
                                        Download resume
                                    </button>
                                    <button className="inline-flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-800 text-sm rounded-md hover:bg-gray-50">
                                        <MailIcon className="w-4 h-4" />
                                        Send email
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Footer spacer */}
                <div className="py-6" />
            </div>
        </div>
    );
}

/* ---------- Small UI components ---------- */

const InfoRow = ({ label, value }) => (
    <div className="border-b border-gray-100 pb-3">
        <dt className="text-xs text-gray-500">{label.toUpperCase()}</dt>
        <dd className="text-sm text-gray-900 mt-1">{value}</dd>
    </div>
);

const Disclosure = ({ title, open, onToggle, children }) => (
    <div className="border border-gray-200 rounded-lg">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-900"
        >
            <span className="font-semibold">{title}</span>
            <ChevronIcon className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        {open && <div className="px-4 pb-4">{children}</div>}
    </div>
);

/* ---------- Inline Icons (no external libraries) ---------- */

const BackIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7 7-7" />
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
    </svg>
);

const ShareIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="18" cy="5" r="3" strokeWidth="2" />
        <circle cx="6" cy="12" r="3" strokeWidth="2" />
        <circle cx="18" cy="19" r="3" strokeWidth="2" />
        <path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49" strokeWidth="2" />
    </svg>
);

const PlusIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
    </svg>
);

const ChevronIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
);

const DownloadIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 10l5 5 5-5" />
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 15V3" />
    </svg>
);

const MailIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M22 6l-10 7L2 6" />
    </svg>
);
export default CompanyDashboard