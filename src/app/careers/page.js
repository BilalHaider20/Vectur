"use client";
import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import swal from "sweetalert";

const Index = () => {


    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState(null);

    const validateForm = (formData) => {
        const { name, email, message } = formData;

        if (!name.trim() || !email.trim() || !message.trim()) {
            return 'All fields are required.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address.';
        }

        return null; // No error
    };

    const roleOptions = [
        { value: 'frontend', label: 'Frontend Developer' },
        { value: 'backend', label: 'Backend Developer' },
        { value: 'fullstack', label: 'Full Stack Developer' },
    ]


    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const form = formRef.current;
    const formData = new FormData();

    // Append fields manually from the form
    formData.append("name", form.name.value);
    formData.append("email", form.email.value);
    formData.append("cnic", form.cnic.value);
    formData.append("yearsOfExperience", form.yearsOfExperience.value);
    formData.append("role", form.role.value);

    // Get resume file
    const resumeFile = form.resume.files[0];
    if (!resumeFile) {
        setMessage("❌ Resume file is required.");
        setIsSubmitting(false);
        return;
    }

    formData.append("resume", resumeFile);

    try {
        const res = await fetch("/api/jobApplication", {
            method: "POST",
            body: formData, // Let browser handle Content-Type
        });

        const data = await res.json();

        if (res.ok && data?.status === 201) {
            setMessage("Application submitted successfully!");
            swal({
                title: "Application Sent!",
                text: "Your job application was submitted successfully.",
                icon: "success",
            });
            form.reset();
        } else {
            setMessage("❌ Failed to submit application.");
            swal({
                title: "Error",
                text: data?.error || "Something went wrong while submitting.",
                icon: "error",
            });
        }
    } catch (err) {
        console.error("Submit error:", err);
        setMessage("❌ Network error. Please try again.");
        swal({
            title: "Network Error",
            text: "Please check your connection and try again.",
            icon: "warning",
        });
    } finally {
        setIsSubmitting(false);
    }
};




    return (
        <section id="contact" className="overflow-hidden py-16 px-7 md:p-10 lg:p-20 bg-blue-dark">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 flex lg:flex-row flex-col lg:gap-8">
                        <div className="w-full">

                            <p className="text-sm text-[#4CA1FF] mb-2">Careers</p>
                            <h2 className="xl:text-[50px] lg:text-10rem text-3xl font-sora text-gray-light font-semibold mb-6">
                                Where people drive Innovation
                            </h2>
                            <p className="mb-10 text-base text-gray-medium">
                                We’re more than a workplace—we’re a people-first community that grows stronger together.
                            </p>
                        </div>



                        <div
                            className="mb-12 rounded-4xl bg-[#192539] p-6 lg:p-8 lg:mb-5"
                            data-wow-delay=".15s"
                        >
                            <form ref={formRef} onSubmit={handleSubmit}>
                                <div className="-mx-4 flex flex-wrap">
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-4 sm:mb-8">
                                            <label
                                                htmlFor="name"
                                                className="mb-3 block text-base font-medium text-dark dark:text-white"
                                            >
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Enter your name"
                                                className="bg-[#192539] border-stroke w-full rounded-lg border border-[#6B6E72] px-6 py-3 text-base text-white outline-none focus:border-blue "
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-4 sm:mb-8">
                                            <label
                                                htmlFor="email"
                                                className="mb-3 block text-base font-medium text-dark dark:text-white"
                                            >
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="Enter your email"
                                                className="bg-[#192539] border-stroke w-full rounded-lg border border-[#6B6E72] px-6 py-3 text-base text-white outline-none focus:border-blue "
                                            />
                                        </div>
                                    </div>


                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-4 sm:mb-8">
                                            <label
                                                htmlFor="cnic"
                                                className="mb-3 block text-base font-medium text-dark dark:text-white"
                                            >
                                                Your CNIC
                                            </label>
                                            <input
                                                type="number"
                                                name="cnic"
                                                required
                                                placeholder="Enter your CNIC"
                                                className="bg-[#192539] border-stroke w-full rounded-lg border border-[#6B6E72] px-6 py-3 text-base text-white outline-none focus:border-blue "
                                            />
                                        </div>
                                    </div>


                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-4 sm:mb-8">
                                            <label
                                                htmlFor="yearsOfExperience"
                                                className="mb-3 block text-base font-medium text-dark dark:text-white"
                                            >
                                                Years of Experience
                                            </label>
                                            <input
                                                type="number"
                                                name="yearsOfExperience"
                                                required
                                                placeholder="Enter your Years of Experience (0-10)"
                                                className="bg-[#192539] border-stroke w-full rounded-lg border border-[#6B6E72] px-6 py-3 text-base text-white outline-none focus:border-blue "
                                            />
                                        </div>
                                    </div>


                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-4 sm:mb-8">
                                            <label
                                                htmlFor="role"
                                                className="mb-3 block text-base font-medium text-dark dark:text-white"
                                            >
                                                Role
                                            </label>
                                            <select
                                                name="role"
                                                id="role"
                                                required
                                                className="bg-[#192539] border-stroke w-full rounded-lg border border-[#6B6E72] px-3 py-3 text-base text-white outline-none focus:border-blue"
                                                defaultValue="" // blank default option
                                            >
                                                <option value="" disabled>
                                                    Select your role
                                                </option>
                                                {roleOptions.map((role, index) => (
                                                    <option key={index} value={role.value}>
                                                        {role.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>


                                    <div className="w-full px-4 md:w-1/2">
                                        <div className="mb-4">
                                            <label
                                                htmlFor="resume"
                                                className="mb-3 block text-base font-medium text-dark dark:text-white"
                                            >
                                                Upload Resume
                                            </label>
                                            <input
                                                type="file"
                                                name="resume"
                                                id="resume"
                                                accept=".pdf,.doc,.docx"
                                                required
                                                className="file:mr-4 file:rounded-md file:border-0 file:bg-blue file:px-4 file:py-3 file:text-sm file:font-semibold file:text-white hover:file:bg-blue/80 bg-[#192539] w-full text-white"
                                            />
                                        </div>
                                    </div>


                                    <div className="w-full px-4">
                                        <button
                                            type="submit"
                                            className="flex items-center gap-[3px] bg-blue text-white md:text-base text-sm font-inter tracking-tighter md:py-3 md:px-6 py-2 px-4 rounded-full cursor-pointer hover:bg-opacity-90 transition duration-300 ease-in-out font-semibold"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Submitting..." : "Submit"}
                                            <ChevronRight
                                                strokeWidth={2}
                                                className="lg:w-6 lg:h-6 h-5 w-5 mt-[0.5px]"
                                            />
                                        </button>
                                    </div>


                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
