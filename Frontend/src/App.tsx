import React, { useState } from 'react';
import { Header } from './components/Header';
import { WelcomeHero } from './components/WelcomeHero';
import { Stats } from './components/Stats';
import { UploadSection } from './components/UploadSection';
import { SupportedTypes } from './components/SupportedTypes';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string>();
  const [uploadedImage, setUploadedImage] = useState<string>();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUserEmail('user@example.com');
    toast.success('Successfully logged in!');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail(undefined);
    setUploadedImage(undefined);
    toast.success('Successfully logged out!');
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
      toast.success('Image uploaded successfully!');
    };
    reader.readAsDataURL(file);
  };

  const handleAddToCalendar = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      toast.success('Events added to your calendar!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Header
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isLoggedIn ? (
          <>
            <WelcomeHero />
            <Stats />
          </>
        ) : (
          <>
            <UploadSection
              uploadedImage={uploadedImage}
              onFileUpload={handleFileUpload}
              onRemove={() => setUploadedImage(undefined)}
              onAddToCalendar={handleAddToCalendar}
              isProcessing={isProcessing}
            />
            {!uploadedImage && <SupportedTypes />}
          </>
        )}
      </main>
    </div>
  );
}

export default App;