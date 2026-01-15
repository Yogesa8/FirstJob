import React from "react";

const recommendedJobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Google",
        location: "Bangalore, India",
        salary: "₹12–18 LPA",
    },
    {
        id: 2,
        title: "Backend Developer",
        company: "Amazon",
        location: "Hyderabad, India",
        salary: "₹10–15 LPA",
    },
    {
        id: 3,
        title: "UI/UX Designer",
        company: "Swiggy",
        location: "Remote",
        salary: "₹8–12 LPA",
    },
    {
        id: 4,
        title: "Full Stack Developer",
        company: "Microsoft",
        location: "Noida, India",
        salary: "₹14–20 LPA",
    },
];

const Recommended = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4 text-orange-500">Recommended for You</h2>

            <div className="flex flex-col gap-5 ">
                {recommendedJobs.map((job) => (
                    <div
                        key={job.id}
                        // className=" border  rounded-md shadow-sm hover:shadow-md transition-all  bg-white/50 backdrop-blur-sm p-6  border-gray-100"
                        className="cursor-pointer"
                    >
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <p className="text-gray-600">{job.company}</p>
                        <p className="text-sm text-gray-500">{job.location}</p>

                        <div className="mt-2 font-medium text-orange-600">{job.salary}</div>

                        <button className="mt-3 w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700">
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommended;
