import React, { useState } from 'react';
import { Send, Plus, Smile } from 'lucide-react';

const messages = [
  {
    id: 1,
    user: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
    content: 'Hey everyone! How are you all doing today?',
    timestamp: '12:30 PM'
  },
  {
    id: 2,
    user: 'Mike Johnson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop',
    content: 'Working on the new project. Making good progress! 🚀',
    timestamp: '12:32 PM'
  },
  {
    id: 3,
    user: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
    content: 'That\'s great to hear! Let me know if you need any help.',
    timestamp: '12:35 PM'
  }
];

export default function ChatArea() {
  const [message, setMessage] = useState('');

  return (
    <div className="flex-1 flex flex-col bg-gray-700">
      <div className="border-b border-gray-600 p-4">
        <div className="flex items-center">
          <h2 className="text-white font-semibold text-lg"># general</h2>
          <div className="ml-2 text-gray-400 text-sm">Welcome to the general channel!</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start group">
            <img
              src={msg.avatar}
              alt={msg.user}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <div className="flex items-center">
                <span className="text-white font-medium">{msg.user}</span>
                <span className="text-gray-400 text-xs ml-2">{msg.timestamp}</span>
              </div>
              <p className="text-gray-100 mt-1">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4">
        <div className="bg-gray-600 rounded-lg flex items-center p-2">
          <button className="p-2 hover:bg-gray-500 rounded-full">
            <Plus className="w-5 h-5 text-gray-200" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message #general"
            className="bg-transparent flex-1 mx-4 text-white placeholder-gray-400 focus:outline-none"
          />
          <button className="p-2 hover:bg-gray-500 rounded-full">
            <Smile className="w-5 h-5 text-gray-200" />
          </button>
          <button className="p-2 hover:bg-gray-500 rounded-full">
            <Send className="w-5 h-5 text-gray-200" />
          </button>
        </div>
      </div>
    </div>
  );
}