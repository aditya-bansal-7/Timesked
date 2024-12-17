import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image as ImageIcon } from 'lucide-react';

export const UploadZone = ({ onFileUpload }: { onFileUpload: (file: File) => void }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    multiple: false
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'}`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center space-y-4">
        {isDragActive ? (
          <Upload className="h-12 w-12 text-indigo-500" />
        ) : (
          <ImageIcon className="h-12 w-12 text-gray-400" />
        )}
        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-700">
            {isDragActive ? 'Drop your schedule image here' : 'Upload your schedule image'}
          </p>
          <p className="text-sm text-gray-500">
            Drag and drop your schedule image, or click to select
          </p>
          <p className="text-xs text-gray-400">
            Supports PNG, JPG or JPEG (max. 10MB)
          </p>
        </div>
      </div>
    </div>
  );
};