import React from 'react';

export const StepProcess = () => {
    return (
        <div>
            <section class="process py-20 bg-gradient-to-br from-gray-50 to-white" id="process">
                <div class="container mx-auto px-4 sm:px-6">
                    <div class="section-title text-center mb-16 fade-in-up">
                        <h2 class="text-3xl md:text-4xl font-bold text-dark mb-4 relative inline-block">
                            Our Simple 4-Step Process
                        </h2>
                        <p class="text-gray max-w-2xl mx-auto text-lg">
                            We make visa processing simple and transparent with our streamlined
                            approach.
                        </p>
                    </div>

                    <div class="process-steps grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto stagger-animation">
                        <div class="step text-center group">
                            <div class="relative mb-6">
                                <div class="step-icon w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white text-2xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <span class="font-bold">1</span>
                                </div>
                                <div class="absolute -inset-4 bg-primary/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                            </div>
                            <h3 class="text-xl font-bold text-dark mb-4">Free Consultation</h3>
                            <p class="text-gray">
                                Get personalized advice from our visa experts about your options and
                                requirements.
                            </p>
                        </div>

                        <div class="step text-center group">
                            <div class="relative mb-6">
                                <div class="step-icon w-20 h-20 bg-gradient-to-br from-secondary to-amber-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <span class="font-bold">2</span>
                                </div>
                                <div class="absolute -inset-4 bg-secondary/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                            </div>
                            <h3 class="text-xl font-bold text-dark mb-4">Document Preparation</h3>
                            <p class="text-gray">
                                We help you gather and verify all required documents for your
                                application.
                            </p>
                        </div>

                        <div class="step text-center group">
                            <div class="relative mb-6">
                                <div class="step-icon w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <span class="font-bold">3</span>
                                </div>
                                <div class="absolute -inset-4 bg-green-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                            </div>
                            <h3 class="text-xl font-bold text-dark mb-4">Application Submission</h3>
                            <p class="text-gray">
                                We handle the entire application process with embassies and
                                authorities.
                            </p>
                        </div>

                        <div class="step text-center group">
                            <div class="relative mb-6">
                                <div class="step-icon w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <span class="font-bold">4</span>
                                </div>
                                <div class="absolute -inset-4 bg-purple-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                            </div>
                            <h3 class="text-xl font-bold text-dark mb-4">
                                Visa Approval & Support
                            </h3>
                            <p class="text-gray">
                                Receive your visa and get post-approval guidance for settlement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
