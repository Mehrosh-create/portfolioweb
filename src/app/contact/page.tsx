// src/app/contact/page.tsx - UPDATED
"use client";

import ContactForm from "@/components/Contact/ContactForm";

const Contact = () => {
    return (
        <div className="min-h-screen pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 xl:px-4 pb-8 sm:pb-16 bg-[#151515] flex flex-col">
            <div className="flex-grow max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                    {/* Contact Options (Left Column) */}
                    <div className="lg:col-span-1 space-y-6 sm:space-y-8">
                        <div className="wpb_text_column">
                            <h2
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 uppercase"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                            >
                                Contact
                            </h2>
                            <p
                                className="text-sm sm:text-base lg:text-lg text-white mb-4 sm:mb-6"
                                style={{
                                    fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                }}
                            >
                                A few different options for getting in touch with me or the
                                team.
                            </p>
                            <h3
                                className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 uppercase"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                            >
                                Hire SheikhMedia
                            </h3>
                            <h6
                                className="text-sm sm:text-base lg:text-lg text-white mb-3 sm:mb-4"
                                style={{
                                    fontFamily:
                                        'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                }}
                            >
                                SheikhMedia is a full-service digital agency built for the
                                now. We handle strategy, creative, paid media, production,
                                and more –{" "}
                                <a
                                    href="https://sheikhmedia.com/#services"
                                    className="text-[#0fb8af] hover:underline"
                                >
                                    explore the full range of services here.
                                </a>
                            </h6>
                            <h3
                                className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 uppercase"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                            >
                                Press
                            </h3>
                            <h6
                                className="text-sm sm:text-base lg:text-lg text-white mb-3 sm:mb-4"
                                style={{
                                    fontFamily:
                                        'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                }}
                            >
                                For all interviews, media opportunities, and anything else
                                press-related
                            </h6>
                            <h3
                                className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 uppercase"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                            >
                                General Inquiry
                            </h3>
                            <h6
                                className="text-sm sm:text-base lg:text-lg text-white mb-3 sm:mb-4"
                                style={{
                                    fontFamily:
                                        'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                }}
                            >
                                Basically if nothing else in the dropdown applies to you,
                                hit me here
                            </h6>
                        </div>
                    </div>

                    {/* Contact Form (Right Column) */}
                    <div className="lg:col-span-2">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;