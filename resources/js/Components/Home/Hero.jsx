import React from 'react';

export const Hero = () => {
    return (
        <div>
            {' '}
            <section
                className="hero pt-40 pb-24 md:pt-48 md:pb-32 hero-bg text-white text-center relative overflow-hidden"
                id="home"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full floating-element"></div>
                    <div
                        className="absolute bottom-20 right-20 w-16 h-16 bg-secondary/30 rounded-full floating-element"
                        // style="animation-delay: 2s;"
                    ></div>
                    <div
                        className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/20 rounded-full floating-element"
                        // style="animation-delay: 4s;"
                    ></div>
                    <div
                        className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/20 rounded-full floating-element"
                        // style="animation-delay: 1s;"
                    ></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto fade-in-up">
                        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                            <i className="fas fa-star text-yellow-400 mr-2"></i>
                            Trusted by 5,000+ Successful Applicants
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Your Gateway to
                            <span className="gradient-text bg-gradient-to-r from-blue-400 to-amber-400">
                                Global Opportunities
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                            Expert visa consultancy with a{' '}
                            <span className="font-semibold text-amber-300">98% success rate</span>.
                            Your journey to international career success starts here.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 mb-8 text-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                <div className="text-2xl font-bold">5,000+</div>
                                <div className="text-sm opacity-80">Successful Visas</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                <div className="text-2xl font-bold">15+</div>
                                <div className="text-sm opacity-80">Countries</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                <div className="text-2xl font-bold">98%</div>
                                <div className="text-sm opacity-80">Success Rate</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                                <div className="text-2xl font-bold">10+</div>
                                <div className="text-sm opacity-80">Years Experience</div>
                            </div>
                        </div>

                        <div className="hero-buttons flex flex-col sm:flex-row justify-center gap-4 mt-8 stagger-animation">
                            <a
                                href="services.html"
                                className="group py-4 px-8 bg-white text-primary rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-custom hover:shadow-custom-hover text-lg flex items-center justify-center"
                            >
                                <span>Explore Our Services</span>
                                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                            </a>
                            <a
                                href="#tracking"
                                className="group py-4 px-8 bg-secondary text-white rounded-lg font-semibold hover:bg-amber-600 transition-all duration-300 transform hover:-translate-y-1 shadow-custom hover:shadow-custom-hover text-lg flex items-center justify-center glass"
                            >
                                <i className="fas fa-search mr-2"></i>
                                <span>Track Your Visa</span>
                            </a>
                        </div>

                        <div className="mt-16 animate-bounce">
                            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                                <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                            </div>
                            <p className="text-sm mt-2 opacity-70">Scroll to explore</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
