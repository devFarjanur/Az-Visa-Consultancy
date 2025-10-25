import React from 'react';
import { Link } from '@inertiajs/react';

export const Footer = () => {
    return (
        <div>
            {/* Enhanced Footer */}
            <footer className="bg-dark text-white pt-20 pb-10">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 stagger-animation">
                        <div className="footer-col">
                            <h3 className="text-xl font-bold mb-6 pb-2 relative">
                                Az Visa Consultancy
                            </h3>
                            <p className="mb-6 text-gray-300 leading-relaxed">
                                Your trusted partner for overseas employment and visa processing
                                with a commitment to excellence and client satisfaction.
                            </p>
                            <div className="social-links flex gap-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-glow"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-glow"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-glow"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-glow"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>

                        <div className="footer-col">
                            <h3 className="text-xl font-bold mb-6 pb-2 relative">Quick Links</h3>
                            <ul>
                                <li className="mb-3">
                                    <Link
                                        href="/"
                                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                                    >
                                        <i className="fas fa-chevron-right text-xs mr-2 opacity-60"></i>
                                        Home
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        href="/about"
                                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                                    >
                                        <i className="fas fa-chevron-right text-xs mr-2 opacity-60"></i>
                                        About Us
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        href="/services"
                                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                                    >
                                        <i className="fas fa-chevron-right text-xs mr-2 opacity-60"></i>
                                        Services
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        href="/jobs"
                                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                                    >
                                        <i className="fas fa-chevron-right text-xs mr-2 opacity-60"></i>
                                        Job Updates
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        href="/faq"
                                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                                    >
                                        <i className="fas fa-chevron-right text-xs mr-2 opacity-60"></i>
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3 className="text-xl font-bold mb-6 pb-2 relative">Our Services</h3>
                            <ul>
                                <li className="mb-3">
                                    <Link
                                        href="/services"
                                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                                    >
                                        <i className="fas fa-chevron-right text-xs mr-2 opacity-60"></i>
                                        UAE Visa Processing
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        href="/services"
                                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                                    >
                                        <i className="fas fa-chevron-right text-xs mr-2 opacity-60"></i>
                                        Poland Work Visa
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        href="/services"
                                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                                    >
                                        <i className="fas fa-chevron-right text-xs mr-2 opacity-60"></i>
                                        Overseas Employment
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        href="/services"
                                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                                    >
                                        <i className="fas fa-chevron-right text-xs mr-2 opacity-60"></i>
                                        Documentation Support
                                    </Link>
                                </li>
                                <li className="mb-3">
                                    <Link
                                        href="/services"
                                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:pl-2 flex items-center"
                                    >
                                        <i className="fas fa-chevron-right text-xs mr-2 opacity-60"></i>
                                        Visa Consultation
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3 className="text-xl font-bold mb-6 pb-2 relative">Contact Us</h3>
                            <div className="contact-info flex items-start mb-4">
                                <div className="contact-icon text-secondary text-lg mr-4 mt-1">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <p className="text-gray-300">
                                    123 Business Avenue, Commercial District, Dhaka, Bangladesh
                                </p>
                            </div>
                            <div className="contact-info flex items-start mb-4">
                                <div className="contact-icon text-secondary text-lg mr-4 mt-1">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <p className="text-gray-300">+880 1234-567890</p>
                            </div>
                            <div className="contact-info flex items-start">
                                <div className="contact-icon text-secondary text-lg mr-4 mt-1">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <p className="text-gray-300">info@azvisa.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="copyright text-center pt-8 border-t border-gray-700 text-gray-400 text-sm">
                        <p>
                            &copy; 2025 Az Visa Consultancy. All Rights Reserved. | Developed by
                            TechNovaBD
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
