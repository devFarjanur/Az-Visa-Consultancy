import { Link } from '@inertiajs/react';
import WhatsAppChatbot from '@/Components/Whatsapp/WhatsAppChatbot';
import { Header } from './../Components/Header';
import { Footer } from './../Components/Footer';

export default function AppLayout({ children }) {
    return (
        <div className="bg-white text-gray-800 overflow-x-hidden">
            <Header />

            {/* Main Content */}
            <main>{children}</main>

            <Footer />

            {/* WhatsApp Chatbot */}
            <WhatsAppChatbot />
        </div>
    );
}
