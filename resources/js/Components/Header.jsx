import React from 'react';
import { Link } from '@inertiajs/react';

export const Header = () => {
    return (
        <div>
            {/* Enhanced Header */}
            <header
                id="header"
                className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300"
            >
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-4">
                        {/* Enhanced Logo */}
                        <div className="logo flex items-center">
                            <Link
                                href="/"
                                className="logo-text text-2xl font-bold text-primary flex items-center"
                            >
                                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white mr-2">
                                    <i className="fas fa-passport text-sm"></i>
                                </div>
                                Az<span className="text-secondary">Visa</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:block">
                            <ul className="flex space-x-8">
                                <li>
                                    <Link
                                        href="/"
                                        className="nav-link text-dark font-medium hover:text-primary transition-colors duration-300"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="nav-link text-dark font-medium hover:text-primary transition-colors duration-300"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services"
                                        className="nav-link text-dark font-medium hover:text-primary transition-colors duration-300"
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/jobs"
                                        className="nav-link text-dark font-medium hover:text-primary transition-colors duration-300"
                                    >
                                        Job Updates
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/faq"
                                        className="nav-link text-dark font-medium hover:text-primary transition-colors duration-300"
                                    >
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="nav-link text-dark font-medium hover:text-primary transition-colors duration-300"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Navigation Actions */}
                        <div className="nav-actions flex items-center space-x-4">
                            <div className="language-switcher relative">
                                <select className="py-2 px-4 rounded-lg border border-gray-300 bg-white cursor-pointer font-medium text-sm">
                                    <option value="en">🇺🇸 English</option>
                                    <option value="bn">🇧🇩 বাংলা</option>
                                </select>
                            </div>
                            <Link
                                href="/login"
                                className="hidden sm:inline-block py-2 px-6 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Login
                            </Link>
                            <div
                                className="mobile-toggle md:hidden text-xl cursor-pointer text-dark"
                                id="mobileToggle"
                            >
                                <i className="fas fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <nav
                    id="nav"
                    className="mobile-nav md:hidden fixed top-16 left-[-100%] w-4/5 h-[calc(100vh-64px)] bg-white/95 backdrop-blur-sm shadow-lg z-40"
                >
                    <ul className="flex flex-col p-8 space-y-5">
                        <li>
                            <Link
                                href="/"
                                className="nav-link text-dark font-medium hover:text-primary transition-colors duration-300 text-lg flex items-center"
                            >
                                <i className="fas fa-home mr-3 w-5"></i>Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="nav-link text-dark font-medium hover:text-primary transition-colors duration-300 text-lg flex items-center"
                            >
                                <i className="fas fa-info-circle mr-3 w-5"></i>About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                className="nav-link text-dark font-medium hover:text-primary transition-colors duration-300 text-lg flex items-center"
                            >
                                <i className="fas fa-concierge-bell mr-3 w-5"></i>Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/jobs"
                                className="nav-link text-dark font-medium hover:text-primary transition-colors duration-300 text-lg flex items-center"
                            >
                                <i className="fas fa-briefcase mr-3 w-5"></i>Job Updates
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/faq"
                                className="nav-link text-dark font-medium hover:text-primary transition-colors duration-300 text-lg flex items-center"
                            >
                                <i className="fas fa-question-circle mr-3 w-5"></i>FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="nav-link text-dark font-medium hover:text-primary transition-colors duration-300 text-lg flex items-center"
                            >
                                <i className="fas fa-phone-alt mr-3 w-5"></i>Contact
                            </Link>
                        </li>
                        <li className="pt-4 border-t border-gray-200 mt-4">
                            <Link
                                href="/login"
                                className="py-3 px-6 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold hover:shadow-glow transition-all duration-300 inline-block w-full text-center"
                            >
                                <i className="fas fa-user mr-2"></i>Login
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};
