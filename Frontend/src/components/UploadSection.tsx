import React from 'react';
import { UploadZone } from './UploadZone';
import { PreviewCard } from './PreviewCard';

interface UploadSectionProps {
  uploadedImage?: string;
  onFileUpload: (file: File) => void;
  onRemove: () => void;
  onAddToCalendar: () => void;
  isProcessing: boolean;
}

export const UploadSection = ({
  uploadedImage,
  onFileUpload,
  onRemove,
  onAddToCalendar,
  isProcessing
}: UploadSectionProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Upload Your Schedule
        </h2>
        <p className="mt-2 text-gray-600">
          Upload an image of your schedule and we'll add it to your Google Calendar
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {!uploadedImage ? (
          <UploadZone onFileUpload={onFileUpload} />
        ) : (
          <PreviewCard
            imageUrl={uploadedImage}
            onRemove={onRemove}
            onAddToCalendar={onAddToCalendar}
            isProcessing={isProcessing}
          />
        )}
      </div>
    </div>
  );
};