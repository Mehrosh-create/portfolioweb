"use client";

import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            subject: value,
        }));
        setErrors((prev) => ({
            ...prev,
            subject: "",
        }));
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
        };

        if (!formData.firstName.trim()) {
            newErrors.firstName = "Required";
            isValid = false;
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Required";
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = "Required";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
            isValid = false;
        }
        if (!formData.subject.trim()) {
            newErrors.subject = "Required";
            isValid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = "Required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
            alert("Thank you for your message. I'll get back to you soon!");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
            setErrors({
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                message: "",
            });
        }
    };

    const subjectOptions = [
        "GENERAL CONTACT",
        "HIRE SHEIKHMEDIA",
        "PRESS / MEDIA INQUIRY",
        "LEARN MORE ABOUT SHEIKHX",
        "PARTNERSHIPS",
        "LOOKING FOR JOB OPPORTUNITIES",
        "BOOK SHEIKH NABEEL TO SPEAK",
        "OTHER",
    ];

    return (
        <div className="bg-[#151515] p-8 rounded-lg border border-[#606060] hover:border-[#FFEA00] transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Fields */}
                <div>
                    <label className="block text-white font-semibold mb-3 uppercase text-lg flex items-center"
                        style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif', }}>
                        <span>Name</span>
                        <span className="text-red-500 ml-1">(Required)</span>
                    </label>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="border border-[#151515] p-4 rounded-lg bg-[#252525] hover:border-white">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full bg-transparent text-white text-lg placeholder-gray-400 focus:outline-none"
                                placeholder="First Name"
                                required
                            />
                            {errors.firstName && (
                                <span className="text-red-500 text-sm block mt-1">
                                    {errors.firstName}
                                </span>
                            )}
                        </div>
                        <div className="border border-[#151515] p-4 rounded-lg bg-[#252525] hover:border-white">
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full bg-transparent text-white text-lg placeholder-gray-400 focus:outline-none"
                                placeholder="Last Name"
                                required
                            />
                            {errors.lastName && (
                                <span className="text-red-500 text-sm block mt-1">
                                    {errors.lastName}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-white font-semibold mb-3 uppercase text-lg flex items-center"
                        style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif', }}>
                        <span>Email</span>
                        <span className="text-red-500 ml-1">(Required)</span>
                    </label>
                    <div className="border border-[#151515] p-4 rounded-lg bg-[#252525] hover:border-white">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-transparent text-white text-lg focus:outline-none"
                            required
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm block mt-1">
                                {errors.email}
                            </span>
                        )}
                    </div>
                </div>

                {/* Phone Field */}
                <div>
                    <label className="block text-white font-semibold mb-3 uppercase text-lg"
                        style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif', }}>
                        Phone
                    </label>
                    <div className="border border-[#151515] p-4 rounded-lg bg-[#252525] hover:border-white">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-transparent text-white text-lg placeholder-gray-400 focus:outline-none"

                        />
                    </div>
                </div>

                {/* Subject Options */}
                <div>
                    <label className="block text-white font-semibold mb-3 uppercase text-lg flex items-center"
                        style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif', }}>
                        <span>Subject</span>
                        <span className="text-red-500 ml-1">(Required)</span>
                    </label>
                    <div className="border border-[#151515] p-4 rounded-lg bg-[#252525] hover:border-white">
                        {subjectOptions.map((option, index) => (
                            <div key={index} className="flex items-center mb-3">
                                <input
                                    type="radio"
                                    name="subject"
                                    value={option}
                                    id={`choice_${index}`}
                                    checked={formData.subject === option}
                                    onChange={handleRadioChange}
                                    className="mr-3 text-[#02B600] focus:ring-[#FFEA00]"
                                    required
                                />
                                <label
                                    htmlFor={`choice_${index}`}
                                    className="text-white text-lg cursor-pointer"
                                >
                                    {option}
                                </label>
                            </div>
                        ))}
                        {errors.subject && (
                            <span className="text-red-500 text-sm block mt-1">
                                {errors.subject}
                            </span>
                        )}
                    </div>
                </div>

                {/* Message Field */}
                <div>
                    <label className="block text-white font-semibold mb-3 uppercase text-lg flex items-center"
                        style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif', }}>
                        <span>Message</span>
                        <span className="text-red-500 ml-1">(Required)</span>
                    </label>
                    <div className="border border-[#151515] p-4 rounded-lg bg-[#252525] hover:border-white">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={8}
                            className="w-full bg-transparent text-white text-lg focus:outline-none resize-none placeholder-gray-400"
                            required
                        />
                        {errors.message && (
                            <span className="text-red-500 text-sm block mt-1">
                                {errors.message}
                            </span>
                        )}
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-green-500 text-white px-5 py-3 rounded-full font-bold text-lg hover:bg-green-600 transition-colors whitespace-nowrap"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
