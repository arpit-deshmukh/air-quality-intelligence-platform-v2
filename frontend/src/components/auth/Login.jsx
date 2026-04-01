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
    if (!result.success) setError(result.message);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#030712" }}>
      <div
        className="max-w-md w-full rounded-2xl p-8"
        style={{
          background: "rgba(15, 23, 42, 0.8)",
          border: "1px solid rgba(51, 65, 85, 0.5)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2" style={{ color: "#f1f5f9" }}>Welcome Back</h2>
          <p style={{ color: "#94a3b8" }}>Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="rounded-lg p-4" style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.2)" }}>
              <p className="text-sm" style={{ color: "#fca5a5" }}>{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "#94a3b8" }}>Email</label>
            <input
              type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200"
              placeholder="Enter your email"
              style={{ background: "#1e293b", border: "1px solid rgba(51, 65, 85, 0.5)", color: "#f1f5f9" }}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: "#94a3b8" }}>Password</label>
            <input
              type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required
              className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200"
              placeholder="Enter your password"
              style={{ background: "#1e293b", border: "1px solid rgba(51, 65, 85, 0.5)", color: "#f1f5f9" }}
            />
          </div>

          <button
            type="submit" disabled={loading}
            className="w-full font-medium py-3 px-4 rounded-lg transition-all duration-200 disabled:opacity-50"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#ffffff" }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p style={{ color: "#64748b" }}>
            Don't have an account?{' '}
            <Link to="/register" className="font-medium" style={{ color: "#818cf8" }}>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}