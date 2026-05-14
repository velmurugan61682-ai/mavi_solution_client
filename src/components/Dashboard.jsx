import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import api from '../api/axiosConfig';
import TaskCard from './TaskCard';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
    inProgressTasks: 0,
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.get('/tasks');
      if (response.data.success) {
        setTasks(response.data.data);
        calculateStats(response.data.data);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 'Failed to fetch tasks'
      );
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (taskList) => {
    const stats = {
      totalTasks: taskList.length,
      completedTasks: taskList.filter((t) => t.status === 'Completed').length,
      pendingTasks: taskList.filter((t) => t.status === 'Pending').length,
      inProgressTasks: taskList.filter((t) => t.status === 'In Progress')
        .length,
    };
    setStats(stats);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleTaskUpdate = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === updatedTask._id ? updatedTask : task
      )
    );
    calculateStats(
      tasks.map((task) =>
        task._id === updatedTask._id ? updatedTask : task
      )
    );
  };

  const handleRefresh = () => {
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Navigation bar */}
      <nav className="bg-slate-800/50 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Student Portal
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={handleRefresh}
              disabled={loading}
              className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/50 rounded-lg transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              🔄 Refresh
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/50 rounded-lg transition-colors font-semibold"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* User info and stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Welcome card */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {user?.name?.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Welcome back!</h2>
                <p className="text-slate-400">{user?.name}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-slate-300">
                <span className="font-semibold text-slate-400">Email:</span>{' '}
                {user?.email}
              </p>
              <p className="text-slate-300">
                <span className="font-semibold text-slate-400">Role:</span>{' '}
                <span className="capitalize px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                  {user?.role}
                </span>
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/50 rounded-xl p-6">
              <p className="text-cyan-300 text-sm font-semibold mb-2">
                Total Tasks
              </p>
              <p className="text-3xl font-bold text-cyan-400">
                {stats.totalTasks}
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/50 rounded-xl p-6">
              <p className="text-green-300 text-sm font-semibold mb-2">
                Completed
              </p>
              <p className="text-3xl font-bold text-green-400">
                {stats.completedTasks}
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/50 rounded-xl p-6">
              <p className="text-yellow-300 text-sm font-semibold mb-2">
                Pending
              </p>
              <p className="text-3xl font-bold text-yellow-400">
                {stats.pendingTasks}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/50 rounded-xl p-6">
              <p className="text-blue-300 text-sm font-semibold mb-2">
                In Progress
              </p>
              <p className="text-3xl font-bold text-blue-400">
                {stats.inProgressTasks}
              </p>
            </div>
          </div>
        </div>

        {/* Tasks section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Your Tasks</h3>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-300 text-sm">{error}</p>
              <button
                onClick={handleRefresh}
                className="mt-2 px-4 py-2 bg-red-500/30 hover:bg-red-500/40 text-red-200 rounded-lg text-sm font-semibold"
              >
                Try Again
              </button>
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-slate-400">Loading your tasks...</p>
              </div>
            </div>
          ) : tasks.length === 0 ? (
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-12 text-center">
              <p className="text-slate-400 text-lg mb-4">
                📭 No tasks assigned yet
              </p>
              <p className="text-slate-500 text-sm">
                Check back later for new assignments
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onTaskUpdate={handleTaskUpdate}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
