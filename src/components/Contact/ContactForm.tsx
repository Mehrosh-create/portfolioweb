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
            const errorMessage =
                err instanceof Error ? err.message : "Failed to send. Try again later.";
            setStatusMessage({
                type: "error",
                text: errorMessage,
            });
        } finally {
            setSubmitting(false);
        }
    };


    return (
        <div className="bg-[#151515] p-8 rounded-lg border border-[#606060] hover:border-[#FFEA00] transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* form content unchanged */}
            </form>
        </div>
    );
};

export default ContactForm;
