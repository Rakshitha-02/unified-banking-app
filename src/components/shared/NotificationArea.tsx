import React from 'react';
import { Bell } from 'lucide-react';

const NotificationArea: React.FC = () => {
  return (
    <button className="p-2 text-gray-500 hover:text-gray-700 relative">
      <Bell className="w-5 h-5" />
      <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
    </button>
  );
};

export default NotificationArea;
