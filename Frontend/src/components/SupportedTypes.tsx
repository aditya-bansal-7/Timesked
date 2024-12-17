import React from 'react';
import { Upload } from 'lucide-react';

export const SupportedTypes = () => {
  const types = ['Class Schedules', 'Sports Fixtures', 'Event Timetables', 'Meeting Schedules'];

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Supported Schedule Types
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {types.map((type) => (
          <li key={type} className="flex items-center space-x-2">
            <Upload className="h-5 w-5 text-indigo-600" />
            <span className="text-gray-700">{type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};