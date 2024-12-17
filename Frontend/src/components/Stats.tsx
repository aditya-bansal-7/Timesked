import React, { useEffect, useState } from 'react';
import { Calendar, MessageSquare, Users, AlertCircle } from 'lucide-react';

interface StatsData {
  event_count: number;
  message_count: number;
  user_count: number;
}

export const Stats = () => {
  const [stats, setStats] = useState<StatsData>({
    event_count: 0,
    message_count: 0,
    user_count: 0
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://x6q0c45n-5000.usw3.devtunnels.ms/api/get_counts', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
          mode: 'cors'
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setStats(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching stats:', error);
        setError('Currently unable to load statistics. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statItems = [
    {
      label: 'Total Events',
      value: stats.event_count,
      icon: Calendar,
      color: 'text-blue-600'
    },
    {
      label: 'Messages',
      value: stats.message_count,
      icon: MessageSquare,
      color: 'text-green-600'
    },
    {
      label: 'Active Users',
      value: stats.user_count,
      icon: Users,
      color: 'text-purple-600'
    }
  ];

  if (error) {
    return (
      <div className="max-w-4xl mx-auto mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
        <div className="flex items-center space-x-2 text-red-600">
          <AlertCircle className="h-5 w-5" />
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
      {statItems.map(({ label, value, icon: Icon, color }) => (
        <div
          key={label}
          className={`bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 ${
            isLoading ? 'animate-pulse' : ''
          }`}
        >
          <Icon className={`h-8 w-8 ${color} mb-2 ${isLoading ? 'opacity-50' : ''}`} />
          <div className={`text-2xl font-bold ${isLoading ? 'text-gray-400' : 'text-gray-900'}`}>
            {isLoading ? '-' : value}
          </div>
          <div className={`text-sm ${isLoading ? 'text-gray-400' : 'text-gray-600'}`}>
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};