import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, X, Plus, Edit2, Trash2, LogOut, Ticket, Clock, CheckSquare, Menu } from 'lucide-react';

// Toast Notification Component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center gap-2 ${
      type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
    }`}>
      {type === 'error' ? <AlertCircle size={20} /> : <CheckCircle size={20} />}
      <span>{message}</span>
      <button onClick={onClose} className="ml-2">
        <X size={16} />
      </button>
    </div>
  );
};

// Landing Page Component
const LandingPage = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Ticket className="text-indigo-600" size={28} />
              <span className="text-xl font-bold text-gray-900">TicketBooth</span>
            </div>
            <div className="hidden md:flex gap-4">
              <button
                onClick={() => onNavigate('login')}
                className="px-4 py-2 text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Login
              </button>
              <button
                onClick={() => onNavigate('signup')}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
              >
                Get Started
              </button>
            </div>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-2">
              <button
                onClick={() => onNavigate('login')}
                className="px-4 py-2 text-indigo-600 hover:text-indigo-800 font-medium text-left"
              >
                Login
              </button>
              <button
                onClick={() => onNavigate('signup')}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Wave */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
        {/* Decorative Circle 1 */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-white opacity-10 rounded-full"></div>
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Manage Your Tickets Effortlessly
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Streamline your workflow with our powerful ticket management system. Track, resolve, and organize tickets with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('signup')}
                className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 font-bold text-lg shadow-lg"
              >
                Get Started Free
              </button>
              <button
                onClick={() => onNavigate('login')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 font-bold text-lg"
              >
                Login
              </button>
            </div>
          </div>
        </div>

        {/* Wave SVG */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z" fill="#F9FAFB"/>
        </svg>
      </div>

      {/* Features Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Why Choose TicketBooth?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature Box 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-400 opacity-20 rounded-full"></div>
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <Ticket className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Easy Ticket Creation</h3>
            <p className="text-gray-600">
              Create and manage tickets in seconds with our intuitive interface. Track status and priority effortlessly.
            </p>
          </div>

          {/* Feature Box 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative">
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 opacity-20 rounded-full"></div>
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Clock className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Real-time Updates</h3>
            <p className="text-gray-600">
              Stay informed with instant updates on ticket status changes and team activities.
            </p>
          </div>

          {/* Feature Box 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
              <CheckSquare className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Complete Control</h3>
            <p className="text-gray-600">
              Full CRUD operations with validation, error handling, and a secure authentication system.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 TicketBooth. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Auth Components
const AuthForm = ({ mode, onNavigate, onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (mode === 'signup' && !formData.name) {
      newErrors.name = 'Name is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate authentication
    const token = 'mock-token-' + Date.now();
    localStorage.setItem('ticketapp_session', token);
    localStorage.setItem('user_email', formData.email);
    setToast({ message: `${mode === 'login' ? 'Login' : 'Signup'} successful!`, type: 'success' });
    setTimeout(() => onLogin(), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-4">
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 relative">
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-400 opacity-20 rounded-full"></div>
        
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Ticket className="text-indigo-600" size={48} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-600 mt-2">
            {mode === 'login' ? 'Login to manage your tickets' : 'Sign up to get started'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-medium"
          >
            {mode === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => onNavigate(mode === 'login' ? 'signup' : 'login')}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            {mode === 'login' ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = ({ onNavigate, onLogout }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('tickets');
    if (stored) {
      setTickets(JSON.parse(stored));
    }
  }, []);

  const stats = {
    total: tickets.length,
    open: tickets.filter(t => t.status === 'open').length,
    inProgress: tickets.filter(t => t.status === 'in_progress').length,
    closed: tickets.filter(t => t.status === 'closed').length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Ticket className="text-indigo-600" size={28} />
              <span className="text-xl font-bold text-gray-900">TicketBooth</span>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <LogOut size={20} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's an overview of your tickets.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-400 opacity-10 rounded-full -mr-10 -mt-10"></div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Tickets</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Ticket className="text-indigo-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-400 opacity-10 rounded-full -ml-12 -mb-12"></div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Open</p>
                <p className="text-3xl font-bold text-green-600 mt-1">{stats.open}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">In Progress</p>
                <p className="text-3xl font-bold text-amber-600 mt-1">{stats.inProgress}</p>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Clock className="text-amber-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Closed</p>
                <p className="text-3xl font-bold text-gray-600 mt-1">{stats.closed}</p>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="text-gray-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-xl shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-2">Ready to manage tickets?</h2>
          <p className="mb-4 text-indigo-100">View, create, edit, and delete tickets with full control.</p>
          <button
            onClick={() => onNavigate('tickets')}
            className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 font-medium"
          >
            Go to Ticket Management
          </button>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 TicketBooth. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Ticket Management Component
const TicketManagement = ({ onNavigate, onLogout }) => {
  const [tickets, setTickets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'open',
    priority: 'medium'
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = () => {
    const stored = localStorage.getItem('tickets');
    if (stored) {
      setTickets(JSON.parse(stored));
    }
  };

  const saveTickets = (newTickets) => {
    localStorage.setItem('tickets', JSON.stringify(newTickets));
    setTickets(newTickets);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!['open', 'in_progress', 'closed'].includes(formData.status)) {
      newErrors.status = 'Status must be open, in_progress, or closed';
    }
    if (formData.description && formData.description.length > 500) {
      newErrors.description = 'Description must be less than 500 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editingTicket) {
      const updated = tickets.map(t =>
        t.id === editingTicket.id ? { ...formData, id: t.id } : t
      );
      saveTickets(updated);
      setToast({ message: 'Ticket updated successfully!', type: 'success' });
    } else {
      const newTicket = { ...formData, id: Date.now().toString() };
      saveTickets([...tickets, newTicket]);
      setToast({ message: 'Ticket created successfully!', type: 'success' });
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', status: 'open', priority: 'medium' });
    setEditingTicket(null);
    setShowForm(false);
    setErrors({});
  };

  const handleEdit = (ticket) => {
    setFormData(ticket);
    setEditingTicket(ticket);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this ticket?')) {
      const filtered = tickets.filter(t => t.id !== id);
      saveTickets(filtered);
      setToast({ message: 'Ticket deleted successfully!', type: 'success' });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800';
      case 'in_progress': return 'bg-amber-100 text-amber-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status) => {
    return status === 'in_progress' ? 'In Progress' : status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}

      {/* Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <button onClick={() => onNavigate('dashboard')} className="flex items-center gap-2">
                <Ticket className="text-indigo-600" size={28} />
                <span className="text-xl font-bold text-gray-900">TicketBooth</span>
              </button>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <LogOut size={20} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Ticket Management</h1>
            <p className="text-gray-600">Create, view, edit, and delete your tickets.</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
          >
            <Plus size={20} />
            <span className="hidden sm:inline">New Ticket</span>
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              {editingTicket ? 'Edit Ticket' : 'Create New Ticket'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="closed">Closed</option>
                  </select>
                  {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
                >
                  {editingTicket ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tickets List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.length === 0 ? (
            <div className="col-span-full bg-white p-12 rounded-xl shadow-md text-center">
              <Ticket className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600 text-lg">No tickets yet. Create your first ticket to get started!</p>
            </div>
          ) : (
            tickets.map(ticket => (
              <div key={ticket.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">{ticket.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                    {getStatusLabel(ticket.status)}
                  </span>
                </div>
                
                {ticket.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{ticket.description}</p>
                )}
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    Priority: {ticket.priority}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(ticket)}
                      className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg"
                      title="Edit"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(ticket.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 TicketFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Main App Component with proper routing
const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  useEffect(() => {
    // Get current path
    const path = window.location.pathname;
    const token = localStorage.getItem('ticketapp_session');
    
    // Route mapping
    if (path === '/' || path === '/landing') {
      if (token) {
        navigate('/dashboard');
      } else {
        setCurrentPage('landing');
      }
    } else if (path === '/auth/login') {
      setCurrentPage('login');
    } else if (path === '/auth/signup') {
      setCurrentPage('signup');
    } else if (path === '/dashboard') {
      if (!token) {
        navigate('/auth/login');
      } else {
        setCurrentPage('dashboard');
      }
    } else if (path === '/tickets') {
      if (!token) {
        navigate('/auth/login');
      } else {
        setCurrentPage('tickets');
      }
    }
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    
    const token = localStorage.getItem('ticketapp_session');
    
    // Protected route check
    if ((path === '/dashboard' || path === '/tickets') && !token) {
      window.history.pushState({}, '', '/auth/login');
      setCurrentPage('login');
      return;
    }
    
    // Set page based on path
    if (path === '/' || path === '/landing') {
      setCurrentPage('landing');
    } else if (path === '/auth/login') {
      setCurrentPage('login');
    } else if (path === '/auth/signup') {
      setCurrentPage('signup');
    } else if (path === '/dashboard') {
      setCurrentPage('dashboard');
    } else if (path === '/tickets') {
      setCurrentPage('tickets');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('ticketapp_session');
    localStorage.removeItem('user_email');
    navigate('/landing');
  };

  const handleLogin = () => {
    navigate('/dashboard');
  };

  const handleNavigate = (page) => {
    const routes = {
      'landing': '/landing',
      'login': '/auth/login',
      'signup': '/auth/signup',
      'dashboard': '/dashboard',
      'tickets': '/tickets'
    };
    navigate(routes[page] || '/landing');
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const token = localStorage.getItem('ticketapp_session');
      
      if ((path === '/dashboard' || path === '/tickets') && !token) {
        navigate('/auth/login');
      } else if (path === '/auth/login') {
        setCurrentPage('login');
      } else if (path === '/auth/signup') {
        setCurrentPage('signup');
      } else if (path === '/dashboard') {
        setCurrentPage('dashboard');
      } else if (path === '/tickets') {
        setCurrentPage('tickets');
      } else {
        setCurrentPage('landing');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Render current page
  if (currentPage === 'landing') {
    return <LandingPage onNavigate={handleNavigate} />;
  }
  
  if (currentPage === 'login') {
    return <AuthForm mode="login" onNavigate={handleNavigate} onLogin={handleLogin} />;
  }
  
  if (currentPage === 'signup') {
    return <AuthForm mode="signup" onNavigate={handleNavigate} onLogin={handleLogin} />;
  }
  
  if (currentPage === 'dashboard') {
    return <Dashboard onNavigate={handleNavigate} onLogout={handleLogout} />;
  }
  
  if (currentPage === 'tickets') {
    return <TicketManagement onNavigate={handleNavigate} onLogout={handleLogout} />;
  }

  return <LandingPage onNavigate={handleNavigate} />;
};

export default App;