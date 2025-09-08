import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
    }

    interface ChatBotProps {
    webhookUrl: string; // URL de tu webhook n8n
    title?: string;
    placeholder?: string;
    }

    const ChatBot: React.FC<ChatBotProps> = ({ 
    webhookUrl, 
    title = "Asistente Virtual",
    placeholder = "Escribe tu mensaje..."
    }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Mensaje de bienvenida
    useEffect(() => {
        if (isOpen && messages.length === 0) {
        setMessages([{
            id: '1',
            text: 'Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?',
            isUser: false,
            timestamp: new Date()
        }]);
        }
    }, [isOpen, messages.length]);

    const sendMessage = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        isUser: true,
        timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const currentInput = inputValue;
        setInputValue('');
        setIsLoading(true);

        try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            },
            body: JSON.stringify({
            message: currentInput,
            sessionId: sessionStorage.getItem('chatSessionId') || 'user-' + Date.now(),
            timestamp: new Date().toISOString()
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Guardar sessionId para mantener contexto
        if (data.sessionId) {
            sessionStorage.setItem('chatSessionId', data.sessionId);
        }
        
        const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: data.response || 'Lo siento, no pude procesar tu mensaje.',
            isUser: false,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
        } catch (error) {
        console.error('Error sending message:', error);
        const errorMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: 'Lo siento, ocurrió un error de conexión. ¿Podrías intentar de nuevo?',
            isUser: false,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
        } finally {
        setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
        }
    };

    return (
        <>
        {/* Botón flotante */}
        {!isOpen && (
            <button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors z-50"
            aria-label="Abrir chat"
            >
            <MessageCircle className="w-6 h-6" />
            </button>
        )}

        {/* Ventana del chat */}
        {isOpen && (
            <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
            {/* Header */}
            <div className="bg-primary-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                <h3 className="font-semibold">{title}</h3>
                <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-700 p-1 rounded"
                >
                <X className="w-4 h-4" />
                </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                    <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        message.isUser
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                    >
                    <div className="flex items-center gap-1 mb-1">
                        {message.isUser ? (
                        <User className="w-3 h-3" />
                        ) : (
                        <Bot className="w-3 h-3" />
                        )}
                        <span className="text-xs opacity-75">
                        {message.isUser ? 'Tú' : 'Asistente'}
                        </span>
                    </div>
                    <p>{message.text}</p>
                    </div>
                </div>
                ))}
                
                {/* Indicador de carga */}
                {isLoading && (
                <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm">
                    <div className="flex items-center gap-1">
                        <Bot className="w-3 h-3" />
                        <span className="text-xs opacity-75">Asistente</span>
                    </div>
                    <div className="flex space-x-1 mt-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    </div>
                </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={placeholder}
                    className="flex-1 resize-none border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary-500"
                    rows={1}
                    disabled={isLoading}
                />
                <button
                    onClick={sendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <Send className="w-4 h-4" />
                </button>
                </div>
            </div>
            </div>
        )}
        </>
    );
};

export default ChatBot;