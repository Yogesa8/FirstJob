import { CircleCheckBig } from 'lucide-react';
import React from 'react'

const Deliver = () => {
    const listItem = [
        "Proven CV Templates to increase Hiring Chance",
        "Creative and Clean Templates Design",
        "Easy and Intuitive Online CV Builder",
        "Free to use. Developed by hiring professionals.",
        "Fast Easy CV and Resume Formatting",
        "Recruiter Approved Phrases.",
    ];

    return (
        <div className='flex flex-col items-center my-10 scroll-mt-12'>
            <main className=" custom_width padding-block">
                <section className="items-center grid-cols-12 gap-6 lg:grid">
                    {/* Content Section */}
                    <div className="col-span-6">
                        <div className="deliver_content_section">
                            {/* Dot section */}
                            <div
                                className="flex items-center gap-x-1.5"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                                <span className="w-2 h-2 rounded-full bg-[#9c88ff]"></span>
                                <span className="w-2 h-2 rounded-full bg-[#fbc531]"></span>
                                <span className="w-2 h-2 rounded-full bg-[#4cd137]"></span>
                                <span className="w-2 h-2 rounded-full bg-[#487eb0]"></span>
                                <span className="w-2 h-2 rounded-full bg-[#e84118]"></span>
                                <span className="w-2 h-2 rounded-full bg-[#8c7ae6]"></span>
                            </div>
                            <div className="mt-4">
                                <h2
                                    className="xl:text-[35px] text-[30px] md:my-8 my-4 font-poppin font-semibold leading-none text-blue"
                                    data-aos="fade-up"
                                    data-aos-duration="1800"
                                >
                                    We Deliver The Best
                                </h2>
                                <div>
                                    {listItem.map((element, index) => {
                                        return (
                                            <div
                                                className="flex items-center mb-3.5 gap-x-3"
                                                key={index}
                                                data-aos="fade-up"
                                                data-aos-duration="2200"
                                            >
                                                {/* <img
                                                    src="/image/deliver/check-icon.png"
                                                    alt=""
                                                    loading="lazy"
                                                /> */}
                                                <CircleCheckBig color="#FF5533" />
                                                <p className="sm:text-base text-sm font-medium leading-none  text-[#333] font-poppin">
                                                    {element}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className="col-span-6">
                        <div
                            className="items-center justify-center w-full lg:flex deliver_img"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            <img src="/image/deliver/cv-img.png" loading="lazy" alt="" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Deliver