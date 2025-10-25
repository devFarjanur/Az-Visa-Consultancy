import React from 'react';

export const WhyChoose = () => {
    return (
        <div>
            <section className="mission py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="section-title text-center mb-16 fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 relative inline-block">
                            Why Choose Az Visa?
                        </h2>
                        <p className="text-gray max-w-2xl mx-auto text-lg">
                            We're not just consultants; we're your partners in achieving
                            international career success.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto stagger-animation">
                        {/* Card 1 - Enhanced Design */}
                        <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-custom hover:shadow-glow transition-all duration-300 group text-center hover:transform hover:-translate-y-2 border border-blue-100">
                            <div className="relative inline-block mb-6">
                                <div className="mission-icon h-20 w-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white text-2xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <i className="fas fa-bullseye"></i>
                                </div>
                                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-4">Proven Success</h3>
                            <p className="text-gray mb-6 leading-relaxed">
                                With over 5,000 successful visa applications and a 98% approval
                                rate, we deliver results you can trust.
                            </p>
                            <div className="flex justify-center items-center space-x-4 text-sm">
                                <div className="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full">
                                    <i className="fas fa-chart-line mr-2"></i>
                                    <span>98% Success</span>
                                </div>
                                <div className="flex items-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                    <i className="fas fa-users mr-2"></i>
                                    <span>5,000+ Clients</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - Enhanced Design */}
                        <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 shadow-custom hover:shadow-glow transition-all duration-300 group text-center hover:transform hover:-translate-y-2 border border-amber-100">
                            <div className="relative inline-block mb-6">
                                <div className="mission-icon h-20 w-20 bg-gradient-to-br from-secondary to-amber-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <i className="fas fa-handshake"></i>
                                </div>
                                <div className="absolute -inset-4 bg-secondary/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-4">End-to-End Support</h3>
                            <p className="text-gray mb-6 leading-relaxed">
                                From document preparation to post-arrival guidance, we're with you
                                at every step of your journey.
                            </p>
                            <div className="flex justify-center items-center space-x-4 text-sm">
                                <div className="flex items-center text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                                    <i className="fas fa-clock mr-2"></i>
                                    <span>24/7 Support</span>
                                </div>
                                <div className="flex items-center text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                                    <i className="fas fa-road mr-2"></i>
                                    <span>Full Process</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 - Enhanced Design */}
                        <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-custom hover:shadow-glow transition-all duration-300 group text-center hover:transform hover:-translate-y-2 border border-emerald-100">
                            <div className="relative inline-block mb-6">
                                <div className="mission-icon h-20 w-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <i className="fas fa-trophy"></i>
                                </div>
                                <div className="absolute -inset-4 bg-green-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-4">Expert Guidance</h3>
                            <p className="text-gray mb-6 leading-relaxed">
                                Our team of certified consultants stays updated with the latest
                                immigration policies and requirements.
                            </p>
                            <div className="flex justify-center items-center space-x-4 text-sm">
                                <div className="flex items-center text-red-600 bg-red-50 px-3 py-1 rounded-full">
                                    <i className="fas fa-award mr-2"></i>
                                    <span>Certified</span>
                                </div>
                                <div className="flex items-center text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                                    <i className="fas fa-graduation-cap mr-2"></i>
                                    <span>Experts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
