import { useState, useRef, useEffect } from 'react';

export default function WhatsAppChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', content: "Hello! 👋 I'm your Az Visa assistant. How can I help you today?" },
        {
            type: 'bot',
            content: 'Choose an option:',
            quickReplies: [
                'Visa Requirements',
                'Application Status',
                'Document Checklist',
                'Talk to Agent',
            ],
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleQuickReply = (reply) => {
        sendMessage(reply);
    };

    const sendMessage = (message) => {
        if (!message.trim()) return;

        // Add user message
        const newMessages = [...messages, { type: 'user', content: message }];
        setMessages(newMessages);
        setInputValue('');

        // Simulate bot response
        setTimeout(() => {
            let response = '';
            if (message.toLowerCase().includes('requirement')) {
                response =
                    'Visa requirements vary by country and visa type. For specific requirements, please contact our agents who can provide detailed information based on your destination and purpose of travel.';
            } else if (
                message.toLowerCase().includes('status') ||
                message.toLowerCase().includes('application')
            ) {
                response =
                    'To check your application status, please use our online tracking system above or provide your reference number to our support team.';
            } else if (
                message.toLowerCase().includes('document') ||
                message.toLowerCase().includes('checklist')
            ) {
                response =
                    'Common documents include passport, photographs, application forms, financial proofs, and supporting letters. The exact checklist depends on your destination country and visa type.';
            } else if (
                message.toLowerCase().includes('agent') ||
                message.toLowerCase().includes('human')
            ) {
                response = "I'll connect you with a human agent. Please wait a moment...";
            } else {
                response =
                    'Thank you for your message. For detailed assistance with visa applications, requirements, or status checks, I recommend speaking with one of our visa specialists. Would you like me to connect you with an agent?';
            }

            setMessages((prev) => [...prev, { type: 'bot', content: response }]);
        }, 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(inputValue);
    };

    return (
        <>
            {/* WhatsApp Chatbot */}
            <div
                className={`chatbot-container fixed bottom-24 right-8 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200 transition-all duration-300 ${
                    isOpen ? 'open' : ''
                }`}
            >
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex items-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-500 mr-3">
                        <i className="fab fa-whatsapp"></i>
                    </div>
                    <div>
                        <h3 className="font-bold">Az Visa Support</h3>
                        <p className="text-xs opacity-80">Typically replies instantly</p>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="ml-auto text-white hover:text-gray-200 transition-colors"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${
                                message.type === 'user' ? 'user-message' : 'bot-message'
                            }`}
                        >
                            <p>{message.content}</p>
                            {message.quickReplies && (
                                <div className="mt-2 space-y-2">
                                    {message.quickReplies.map((reply, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleQuickReply(reply)}
                                            className="quick-reply block w-full text-left p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors duration-200 hover:border-green-300"
                                        >
                                            <i
                                                className={`fas ${
                                                    reply === 'Visa Requirements'
                                                        ? 'fa-list-alt text-green-500'
                                                        : reply === 'Application Status'
                                                        ? 'fa-search text-blue-500'
                                                        : reply === 'Document Checklist'
                                                        ? 'fa-file-alt text-amber-500'
                                                        : 'fa-user-tie text-purple-500'
                                                } mr-2`}
                                            ></i>
                                            {reply}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Chat Input */}
                <div className="p-3 border-t border-gray-200 bg-white">
                    <form onSubmit={handleSubmit} className="flex items-center">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        />
                        <button
                            type="submit"
                            className="ml-2 p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                        >
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>

            {/* WhatsApp Toggle Button */}
            <div
                className="whatsapp-button fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg z-50 hover:scale-110 transition-transform duration-300 cursor-pointer hover:shadow-glow"
                onClick={() => setIsOpen(!isOpen)}
            >
                <i className="fab fa-whatsapp"></i>
            </div>
        </>
    );
}
