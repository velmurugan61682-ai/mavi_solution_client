import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import api from '../api/axiosConfig';

const AdminPanel = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('create'); // create, tasks, users
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    assignedTo: '',
  });

  useEffect(() => {
    if (user?.role !== 'admin') {
      navigate('/dashboard');
    }
    fetchTasks();
    fetchUsers();
  }, [user, navigate]);

  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks');
      if (response.data.success) {
        setTasks(response.data.data);
      }
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await api.get('/auth/users');
      if (response.data.success) {
        setUsers(response.data.data);
      }
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (!formData.title || !formData.dueDate || !formData.assignedTo) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    try {
      const response = await api.post('/tasks', {
        ...formData,
        dueDate: new Date(formData.dueDate).toISOString(),
      });

      if (response.data.success) {
        setSuccess('Task created successfully!');
        setFormData({
          title: '',
          description: '',
          dueDate: '',
          assignedTo: '',
        });
        fetchTasks();
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 'Failed to create task'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm('Are you sure you want to delete this task?')) {
      return;
    }

    try {
      const response = await api.delete(`/tasks/${taskId}`);
      if (response.data.success) {
        setSuccess('Task deleted successfully!');
        fetchTasks();
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete task');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Navigation bar */}
      <nav className="bg-slate-800/50 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-slate-300">
              Welcome, <span className="font-semibold">{user?.name}</span>
            </span>
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
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('create')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'create'
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
            }`}
          >
            Create Task
          </button>
          <button
            onClick={() => setActiveTab('tasks')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'tasks'
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
            }`}
          >
            Manage Tasks
          </button>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
            <p className="text-green-300 text-sm">✓ {success}</p>
          </div>
        )}

        {/* Create Task Tab */}
        {activeTab === 'create' && (
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-6">Create New Task</h2>
            <form onSubmit={handleCreateTask} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Task Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., AntiGravity AI Lab Presentation"
                  className="w-full px-4 py-2.5 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Task description..."
                  className="w-full px-4 py-2.5 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  rows="4"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Due Date *
                </label>
                <input
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Assign to Student *
                </label>
                <select
                  name="assignedTo"
                  value={formData.assignedTo}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                >
                  <option value="">Select a student</option>
                  {users
                    .filter((u) => u.role === 'student')
                    .map((user) => (
                      <option key={user._id} value={user._id}>
                        {user.name} ({user.email})
                      </option>
                    ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 mt-6"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating...</span>
                  </>
                ) : (
                  <span>Create Task</span>
                )}
              </button>
            </form>
          </div>
        )}

        {/* Manage Tasks Tab */}
        {activeTab === 'tasks' && (
          <div>
            <h2 className="text-xl font-bold text-white mb-6">All Tasks</h2>
            {tasks.length === 0 ? (
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-12 text-center">
                <p className="text-slate-400">No tasks created yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div
                    key={task._id}
                    className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 flex items-start justify-between"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {task.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-3">
                        {task.description}
                      </p>
                      <div className="flex gap-4 text-sm text-slate-300">
                        <span>📅 Due: {formatDate(task.dueDate)}</span>
                        <span>👤 Assigned to: {task.assignedTo?.name}</span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          task.status === 'Pending'
                            ? 'bg-yellow-500/20 text-yellow-300'
                            : task.status === 'In Progress'
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-green-500/20 text-green-300'
                        }`}>
                          {task.status}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteTask(task._id)}
                      className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/50 rounded-lg transition-colors font-semibold text-sm ml-4"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
