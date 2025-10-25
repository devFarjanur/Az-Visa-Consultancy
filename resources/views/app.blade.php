<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Az Visa Consultancy - Your Trusted Visa Partner</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#1a56db',
                        'primary-dark': '#1e429f',
                        secondary: '#f59e0b',
                        light: '#f8fafc',
                        dark: '#1e293b',
                        gray: '#64748b',
                        success: '#10b981',
                        danger: '#ef4444',
                    },
                    boxShadow: {
                        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        'custom-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        'glow': '0 0 20px rgba(37, 99, 235, 0.3)',
                    },
                    animation: {
                        'pulse-slow': 'pulse 2s infinite',
                        'bounce-slow': 'bounce 2s infinite',
                        'fade-in': 'fadeIn 0.5s ease-in-out',
                        'slide-up': 'slideUp 0.3s ease-out',
                        'float': 'float 6s ease-in-out infinite',
                        'shimmer': 'shimmer 2s infinite',
                    }
                }
            }
        }
    </script>
    <style>
        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
            }

            70% {
                box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
            }

            100% {
                box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        @keyframes slideUp {
            from {
                transform: translateY(20px);
                opacity: 0;
            }

            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        @keyframes float {
            0% {
                transform: translateY(0px);
            }

            50% {
                transform: translateY(-10px);
            }

            100% {
                transform: translateY(0px);
            }
        }

        @keyframes shimmer {
            0% {
                background-position: -468px 0;
            }

            100% {
                background-position: 468px 0;
            }
        }

        html {
            scroll-behavior: smooth;
        }

        .mobile-nav {
            transition: all 0.3s ease;
        }

        .nav-link {
            position: relative;
        }

        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: #1a56db;
            transition: all 0.3s ease;
        }

        .nav-link:hover::after {
            width: 100%;
        }

        .section-title h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: #f59e0b;
            border-radius: 2px;
        }

        .service-card {
            transition: all 0.3s ease;
        }

        .service-card:hover {
            transform: translateY(-10px);
        }

        .stat-item {
            transition: all 0.3s ease;
        }

        .stat-item:hover {
            transform: translateY(-5px);
        }

        .footer-col h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 3px;
            background: #f59e0b;
        }

        .whatsapp-button {
            animation: pulse 2s infinite;
        }

        /* WhatsApp Chatbot Styles - FIXED */
        .chatbot-container {
            transform: translateY(100%);
            transition: transform 0.3s ease-out;
            opacity: 0;
            pointer-events: none;
        }

        .chatbot-container.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
        }

        .message {
            max-width: 80%;
            padding: 12px 16px;
            border-radius: 18px;
            margin-bottom: 10px;
            animation: slideUp 0.2s ease-out;
        }

        .user-message {
            background: #1a56db;
            color: white;
            margin-left: auto;
            border-bottom-right-radius: 4px;
        }

        .bot-message {
            background: #f1f5f9;
            color: #1e293b;
            margin-right: auto;
            border-bottom-left-radius: 4px;
        }

        .typing-indicator {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #cbd5e1;
            margin: 0 2px;
            animation: bounce-slow 1.3s infinite;
        }

        .typing-indicator:nth-child(2) {
            animation-delay: 0.15s;
        }

        .typing-indicator:nth-child(3) {
            animation-delay: 0.3s;
        }

        /* Glass morphism effect */
        .glass {
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.18);
        }

        /* Gradient text */
        .gradient-text {
            background: linear-gradient(135deg, #1a56db, #f59e0b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* New Sections Styles */
        .process-steps .step {
            transition: all 0.3s ease;
        }

        .process-steps .step:hover {
            transform: translateY(-5px);
        }

        .country-flag {
            transition: all 0.3s ease;
        }

        .country:hover .country-flag {
            transform: scale(1.1);
        }

        /* New Animations */
        .fade-in-up {
            animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .stagger-animation>* {
            opacity: 0;
            animation: fadeInUp 0.6s ease-out forwards;
        }

        .stagger-animation>*:nth-child(1) {
            animation-delay: 0.1s;
        }

        .stagger-animation>*:nth-child(2) {
            animation-delay: 0.2s;
        }

        .stagger-animation>*:nth-child(3) {
            animation-delay: 0.3s;
        }

        .stagger-animation>*:nth-child(4) {
            animation-delay: 0.4s;
        }

        .stagger-animation>*:nth-child(5) {
            animation-delay: 0.5s;
        }

        .stagger-animation>*:nth-child(6) {
            animation-delay: 0.6s;
        }

        /* Enhanced Hero Section */
        .hero-bg {
            background: linear-gradient(135deg, rgba(26, 86, 219, 0.9) 0%, rgba(30, 66, 159, 0.9) 100%), url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }

        /* Enhanced Cards */
        .enhanced-card {
            position: relative;
            overflow: hidden;
            transition: all 0.4s ease;
        }

        .enhanced-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }

        .enhanced-card:hover::before {
            left: 100%;
        }

        /* Floating Elements */
        .floating-element {
            animation: float 6s ease-in-out infinite;
        }

        /* Progress Bar Animation */
        .progress-bar {
            width: 0;
            transition: width 2s ease-in-out;
        }

        .animate-progress {
            width: 100%;
        }

        /* Shimmer Effect */
        .shimmer {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
        }
    </style>
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
