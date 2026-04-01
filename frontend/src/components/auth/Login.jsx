import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(email, password);

    if (!result.success) {
      setError(result.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="max-w-md w-full bg-slate-800 rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-slate-400">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-slate-400">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-400 hover:text-blue-300 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}