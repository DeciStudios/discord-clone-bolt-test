import React from 'react';
import { Hash, Settings, Users, Volume2 } from 'lucide-react';

const servers = [
  { id: 1, name: 'General', img: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64&h=64&fit=crop' },
  { id: 2, name: 'Gaming', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=64&h=64&fit=crop' },
  { id: 3, name: 'Music', img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=64&h=64&fit=crop' },
];

const channels = [
  { id: 1, name: 'general', type: 'text' },
  { id: 2, name: 'help', type: 'text' },
  { id: 3, name: 'Gaming Room', type: 'voice' },
];

export default function Sidebar() {
  return (
    <div className="flex h-screen">
      <div className="w-[72px] bg-gray-900 flex flex-col items-center py-3 space-y-2">
        {servers.map((server) => (
          <button
            key={server.id}
            className="w-12 h-12 rounded-full hover:rounded-2xl transition-all duration-200 overflow-hidden group relative"
          >
            <img
              src={server.img}
              alt={server.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
        ))}
      </div>
      
      <div className="w-60 bg-gray-800 flex flex-col">
        <div className="p-4 shadow-md">
          <h2 className="text-white font-semibold">Discord Clone</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <div className="px-2 py-4">
            <div className="text-gray-400 uppercase text-xs font-semibold px-2 mb-2">
              Text Channels
            </div>
            {channels.map((channel) => (
              <button
                key={channel.id}
                className="flex items-center text-gray-400 hover:text-gray-200 hover:bg-gray-700 px-2 py-1 rounded w-full"
              >
                {channel.type === 'text' ? (
                  <Hash className="w-5 h-5 mr-1.5 text-gray-400" />
                ) : (
                  <Volume2 className="w-5 h-5 mr-1.5 text-gray-400" />
                )}
                {channel.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="p-2 bg-gray-850">
          <div className="flex items-center p-2 hover:bg-gray-700 rounded">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
            <div className="ml-2">
              <div className="text-white text-sm font-medium">John Doe</div>
              <div className="text-gray-400 text-xs">#1234</div>
            </div>
            <Settings className="w-5 h-5 text-gray-400 ml-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}