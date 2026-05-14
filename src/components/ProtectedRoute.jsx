import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-cyan-500 border-t-purple-500 rounded-full animate-spin"></div>
          <p className="text-cyan-400 font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
