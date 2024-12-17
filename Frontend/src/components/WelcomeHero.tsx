import React from 'react';
import { Calendar } from 'lucide-react';

export const WelcomeHero = () => {
  return (
    <div className="text-center py-12">
      <Calendar className="mx-auto h-12 w-12 text-indigo-600" />
      <h2 className="mt-4 text-3xl font-bold text-gray-900">
        Transform Your Schedules into Calendar Events
      </h2>
      <p className="mt-2 text-lg text-gray-600">
        Sign in with Google to start converting your schedule images into calendar events
      </p>
    </div>
  );
};