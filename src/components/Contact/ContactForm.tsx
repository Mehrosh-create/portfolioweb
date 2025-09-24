// src/components/Contact/ContactForm.tsx
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

    const [submitting, setSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState<{
        type: "success" | "error";
        text: string;
    } | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
        setStatusMessage(null);
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, subject: e.target.value }));
        setErrors((prev) => ({ ...prev, subject: "" }));
        setStatusMessage(null);
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setSubmitting(true);
        setStatusMessage(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Server error");

            setStatusMessage({
                type: "success",
                text: "Thanks — your message was sent!",
            });

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
        } catch (err: unknown) {
            console.error("Contact submit error:", err);
            const errorMessage = err instanceof Error ? err.message : "Failed to send. Try again later.";
            setStatusMessage({
                type: "error",
                text: errorMessage,
            });
        } finally {
            setSubmitting(false);
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
                    <label className="block text-white font-semibold mb-3 uppercase text-lg flex items-center">
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

                {/* Email */}
                <div>
                    <label className="block text-white font-semibold mb-3 uppercase text-lg flex items-center">
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

                {/* Phone */}
                <div>
                    <label className="block text-white font-semibold mb-3 uppercase text-lg">
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

                {/* Subject */}
                <div>
                    <label className="block text-white font-semibold mb-3 uppercase text-lg flex items-center">
                        <span>Subject</span>
                        <span className="text-red-500 ml-1">(Required)</span>
                    </label>
                    <div className="border border-[#151515] p-4 rounded-lg bg-[#252525] hover:border-white">
                        {subjectOptions.map((option, i) => (
                            <div key={i} className="flex items-center mb-3">
                                <input
                                    type="radio"
                                    name="subject"
                                    value={option}
                                    id={`choice_${i}`}
                                    checked={formData.subject === option}
                                    onChange={handleRadioChange}
                                    className="mr-3 text-[#02B600] focus:ring-[#FFEA00]"
                                    required
                                />
                                <label
                                    htmlFor={`choice_${i}`}
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

                {/* Message */}
                <div>
                    <label className="block text-white font-semibold mb-3 uppercase text-lg flex items-center">
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

                {/* Submit */}
                <div>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="bg-green-500 disabled:opacity-60 text-white px-5 py-3 rounded-full font-bold text-lg hover:bg-green-600 transition-colors whitespace-nowrap"
                    >
                        {submitting ? "Sending..." : "Submit"}
                    </button>

                    {statusMessage && (
                        <p
                            className={`mt-4 ${statusMessage.type === "success"
                                ? "text-green-400"
                                : "text-red-400"
                                }`}
                        >
                            {statusMessage.text}
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ContactForm;