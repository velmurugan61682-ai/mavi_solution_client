import React, { useState } from 'react';
import api from '../api/axiosConfig';

const TaskCard = ({ task, onTaskUpdate }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50';
      case 'In Progress':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/50';
      case 'Completed':
        return 'bg-green-500/20 text-green-300 border-green-500/50';
      default:
        return 'bg-slate-500/20 text-slate-300 border-slate-500/50';
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleStartTask = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.put(`/tasks/${task._id}`, {
        status: 'In Progress',
      });
      if (onTaskUpdate) {
        onTaskUpdate(response.data.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to start task');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitTask = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.put(`/tasks/${task._id}`, {
        status: 'Completed',
      });
      if (onTaskUpdate) {
        onTaskUpdate(response.data.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit task');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-2">{task.title}</h3>
          <p className="text-slate-400 text-sm mb-4">{task.description}</p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ml-4 ${getStatusColor(
            task.status
          )}`}
        >
          {task.status}
        </span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-slate-400 text-sm">📅</span>
          <span className="text-slate-300 text-sm font-medium">
            {formatDate(task.dueDate)}
          </span>
        </div>
        {task.createdBy?.name && (
          <div className="text-slate-400 text-xs">
            by {task.createdBy.name}
          </div>
        )}
      </div>

      <div className="flex gap-3">
        {task.status === 'Pending' && (
          <button
            onClick={handleStartTask}
            disabled={loading}
            className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Starting...</span>
              </>
            ) : (
              <span>Start Task</span>
            )}
          </button>
        )}

        {task.status === 'In Progress' && (
          <button
            onClick={handleSubmitTask}
            disabled={loading}
            className="flex-1 py-2 px-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <span>Submit Task</span>
            )}
          </button>
        )}

        {task.status === 'Completed' && (
          <div className="flex-1 py-2 px-4 bg-green-500/20 text-green-300 border border-green-500/50 rounded-lg font-semibold flex items-center justify-center">
            ✓ Completed
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
