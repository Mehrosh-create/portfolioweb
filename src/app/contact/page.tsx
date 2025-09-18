"use client";

import ContactForm from "@/components/Contact/ContactForm";

const Contact = () => {
    return (
        <div className="min-h-screen pt-20 px-40 pb-16 bg-[#151515] flex flex-col">
            <div className="flex-grow max-w-6xl mx-auto lg:mr-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Options (Left Column) */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="wpb_text_column">
                            <h2
                                className="text-4xl font-bold text-white mb-6 uppercase"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                            >
                                Contact
                            </h2>
                            <p
                                className="text-lg text-white mb-6"
                                style={{
                                    fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                }}
                            >
                                A few different options for getting in touch with me or the
                                team.
                            </p>
                            <h3
                                className="text-3xl font-bold text-white mb-4 uppercase"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                            >
                                Hire SheikhMedia
                            </h3>
                            <h6
                                className="text-lg text-white mb-4"
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
                                    className="text-[#02B600] hover:underline"
                                >
                                    explore the full range of services here.
                                </a>
                            </h6>
                            <h3
                                className="text-3xl font-bold text-white mb-4 uppercase"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                            >
                                Press
                            </h3>
                            <h6
                                className="text-lg text-white mb-4"
                                style={{
                                    fontFamily:
                                        'Arial, "Helvetica Neue", Helvetica, sans-serif',
                                }}
                            >
                                For all interviews, media opportunities, and anything else
                                press-related
                            </h6>
                            <h3
                                className="text-3xl font-bold text-white mb-4 uppercase"
                                style={{ fontFamily: '"Bebas Neue", Arial, sans-serif' }}
                            >
                                General Inquiry
                            </h3>
                            <h6
                                className="text-lg text-white mb-4"
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
