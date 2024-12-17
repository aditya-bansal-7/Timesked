import React from 'react';
import { X, Calendar as CalendarIcon } from 'lucide-react';

export const PreviewCard = ({
  imageUrl,
  onRemove,
  onAddToCalendar,
  isProcessing
}: {
  imageUrl: string;
  onRemove: () => void;
  onAddToCalendar: () => void;
  isProcessing: boolean;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="relative">
        <img
          src={imageUrl}
          alt="Schedule Preview"
          className="w-full h-48 object-cover rounded-md"
        />
        <button
          onClick={onRemove}
          className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="mt-4">
        <button
          onClick={onAddToCalendar}
          disabled={isProcessing}
          className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-white
            ${isProcessing
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
        >
          <CalendarIcon className="h-5 w-5" />
          <span>{isProcessing ? 'Processing...' : 'Add to Calendar'}</span>
        </button>
      </div>
    </div>
  );
};