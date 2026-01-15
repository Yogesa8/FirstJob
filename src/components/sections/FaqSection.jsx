import React, { useState } from "react";
import { motion ,AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import useScrollReveal from "../../hooks/useScrollReveal";

const CATEGORIES = [
    { id: "subscription", label: "Subscription & Future Updates" },
    { id: "features", label: "Features & Functionality" },
    { id: "content", label: "Course Content & Curriculum" },
    { id: "support", label: "Mentorship & Support" },
    { id: "certification", label: "Certification" },
];

const FAQ_DATA = {
    subscription: [
        { q: "Will I get future updates?", a: "Yes, during your plan validity." },
        { q: "Is the subscription refundable?", a: "No, subscriptions are non-refundable." },
        { q: "Can I upgrade my plan later?", a: "Yes, you can upgrade anytime." },
    ],

    features: [
        { q: "What features are included?", a: "Videos and problems." },
        { q: "Are live classes included?", a: "Yes, in selected plans." },
        { q: "Do I get practice tests?", a: "Yes, topic-wise tests are available." },
    ],

    content: [
        { q: "Is content beginner friendly?", a: "Yes, from basics." },
        { q: "Is advanced content also available?", a: "Yes, after fundamentals." },
        { q: "Is content updated regularly?", a: "Yes, content is updated frequently." },
    ],

    support: [
        { q: "Is mentorship included?", a: "Yes, premium plans only." },
        { q: "How can I contact support?", a: "Via chat and email." },
        { q: "What is the response time?", a: "Usually within 24 hours." },
    ],

    certification: [
        { q: "Will I receive a certificate?", a: "Yes after completion." },
        { q: "Is the certificate recognised?", a: "Yes, platform issued." },
        { q: "Can I download the certificate?", a: "Yes, PDF download is available." },
    ],
};

const FaqSection = () => {
    const [ref, isVisible] = useScrollReveal();
    const [activeCat, setActiveCat] = useState("subscription");
    const [openIndex, setOpenIndex] = useState(null);

    return (
        // FIX: Standardized padding to py-20 sm:py-24
        <section
            ref={ref}
            className={`bg-[#f9fafb] text-gray-900 py-20 sm:py-24 px-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <div className="max-w-7xl mx-auto">

                {/* HEADING */}
                <div className="max-w-xl mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                        Frequently Asked
                        <br />
                        Questions
                    </h2>
                </div>

                {/* CONTENT BELOW HEADING */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

                    {/* LEFT – Categories */}
                    <div className="space-y-3">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setActiveCat(cat.id);
                                    setOpenIndex(null);
                                }}
                                className={`w-full rounded-full px-5 py-3 text-sm border transition text-left
                                ${activeCat === cat.id
                                        ? 'bg-gray-900 text-white border-gray-900'
                                        : 'border-gray-300 hover:border-gray-900'
                                    }`}
                             >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* RIGHT – FAQ QUESTIONS */}
                    <div className="lg:col-span-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCat}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                                className="rounded-xl border border-gray-200 divide-y divide-gray-200"
                            >
                                {FAQ_DATA[activeCat].map((item, index) => {
                                    const isOpen = openIndex === index;

                                    return (
                                        <motion.div key={index} layout className="overflow-hidden">
                                            <button
                                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                                className="w-full flex justify-between items-start px-6 py-5 text-left"
                                            >
                                                <span className="text-sm font-semibold">
                                                    {item.q}
                                                </span>
                                                <motion.span
                                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="text-gray-500"
                                                >
                                                    <ChevronDown className="size-4" />
                                                </motion.span>
                                            </button>

                                            {isOpen && (
                                                <motion.div
                                                    layout
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="px-6 pb-5 text-sm text-gray-600"
                                                >
                                                    {item.a}
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default FaqSection;