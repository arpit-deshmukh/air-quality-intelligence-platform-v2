import { useState } from "react";
import { login as loginApi } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    const res = await loginApi({ email, password });
    login(res.token);
    navigate("/");
  }

  return (
    <form onSubmit={submit} className="max-w-sm space-y-3">
      <h1 className="text-xl font-semibold">Login</h1>

      <input
        className="border p-2 w-full"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="border px-4 py-2 text-sm">
        Login
      </button>
    </form>
  );
}