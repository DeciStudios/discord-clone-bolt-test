import React from 'react';

const members = [
  {
    id: 1,
    name: 'Sarah Chen',
    status: 'online',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop'
  },
  {
    id: 2,
    name: 'Mike Johnson',
    status: 'idle',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    status: 'dnd',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop'
  },
  {
    id: 4,
    name: 'Alex Turner',
    status: 'offline',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop'
  }
];

const statusColors = {
  online: 'bg-green-500',
  idle: 'bg-yellow-500',
  dnd: 'bg-red-500',
  offline: 'bg-gray-500'
};

export default function MemberList() {
  return (
    <div className="w-60 bg-gray-800 p-4">
      <h3 className="text-gray-400 uppercase text-xs font-semibold mb-4">
        Members — {members.length}
      </h3>
      
      <div className="space-y-2">
        {members.map((member) => (
          <div key={member.id} className="flex items-center hover:bg-gray-700 p-2 rounded cursor-pointer">
            <div className="relative">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-8 h-8 rounded-full"
              />
              <div className={`absolute bottom-0 right-0 w-3 h-3 ${statusColors[member.status]} rounded-full border-2 border-gray-800`} />
            </div>
            <span className="ml-2 text-gray-200">{member.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}