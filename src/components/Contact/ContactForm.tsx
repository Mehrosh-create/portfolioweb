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
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>
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
        "General Contact",
        "Hire SheikhMedia",
        "Press / Media Inquiry",
        "Learn more about SheikhX",
        "Partnerships",
        "Looking for Job Opportunities",
        "Book Gary to speak",
        "Other",
    ];

    return (
        <div className="bg-[#252525] p-6 rounded-lg border border-[#606060] hover:border-[#FFEA00] transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div>
                    <label className="block text-white font-semibold mb-2 uppercase text-base flex items-center" style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                        <span>Name</span>
                        <span className="text-red-500 ml-1">(Required)</span>
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border border-[#606060] p-3 rounded-lg bg-[#151515] hover:border-[#FFFFFF]">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full bg-transparent text-white text-lg placeholder-[#a8e6cf] focus:outline-none"
                                style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
                                required
                            />
                            <label
                                htmlFor="firstName"
                                className="block text-white text-sm mt-[-29]"
                                style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
                            >
                                First
                            </label>
                            {errors.firstName && <span className="text-red-500 text-sm block mt-1">{errors.firstName}</span>}
                        </div>
                        <div className="border border-[#606060] p-3 rounded-lg bg-[#151515] hover:border-[#FFFFFF]">
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full bg-transparent text-white text-lg placeholder-[#a8e6cf] focus:outline-none"
                                style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
                                required
                            />
                            <label
                                htmlFor="lastName"
                                className="block text-white text-sm  mt-[-29]"
                                style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
                            >Last
                            </label>
                            {errors.lastName && <span className="text-red-500 text-sm block mt-1">{errors.lastName}</span>}
                        </div>
                    </div>
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-white font-semibold mb-2 uppercase text-base flex items-center" style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                        <span>Email</span>
                        <span className="text-red-500 ml-1">(Required)</span>
                    </label>
                    <div className="border border-[#606060] p-3 rounded-lg bg-[#151515] hover:border-[#FFFFFF]">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-transparent text-white text-lg focus:outline-none"
                            style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
                            required
                        />
                        {errors.email && <span className="text-red-500 text-sm block mt-1">{errors.email}</span>}
                    </div>
                </div>

                {/* Phone Field */}
                <div>
                    <label className="block text-white font-semibold mb-2 uppercase text-base" style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                        Phone
                    </label>
                    <div className="border border-[#606060] p-3 rounded-lg bg-[#151515] hover:border-[#FFFFFF]">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-transparent text-white text-lg placeholder-[#a8e6cf] focus:outline-none"
                            style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
                        />
                    </div>
                </div>

                {/* Subject Field */}
                <div>
                    <label className="block text-white font-semibold mb-2 uppercase text-base flex items-center" style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                        <span>Subject</span>
                        <span className="text-red-500 ml-1">(Required)</span>
                    </label>
                    <div className="border border-[#606060] p-3 rounded-lg bg-[#151515] hover:border-[#FFFFFF]">
                        {subjectOptions.map((option, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    name="subject"
                                    value={option}
                                    id={`choice_${index}`}
                                    checked={formData.subject === option}
                                    onChange={handleRadioChange}
                                    className="mr-2 text-[#02B600] focus:ring-[#FFEA00]"
                                    required
                                />
                                <label
                                    htmlFor={`choice_${index}`}
                                    className="text-white text-lg"
                                    style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
                                >
                                    {option}
                                </label>
                            </div>
                        ))}
                        {errors.subject && <span className="text-red-500 text-sm block mt-1">{errors.subject}</span>}
                    </div>
                </div>

                {/* Message Field */}
                <div>
                    <label className="block text-white font-semibold mb-2 uppercase text-base flex items-center" style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}>
                        <span>Message</span>
                        <span className="text-red-500 ml-1">(Required)</span>
                    </label>
                    <div className="border border-[#606060] p-3 rounded-lg bg-[#151515] hover:border-[#FFFFFF]">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={10}
                            className="w-full bg-transparent text-white text-lg focus:outline-none resize-none"
                            style={{ fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif' }}
                            required
                        />
                        {errors.message && <span className="text-red-500 text-sm block mt-1">{errors.message}</span>}
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-green-500 text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-green-600 transition-colors whitespace-nowrap"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;