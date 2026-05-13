"use client";
import { useState } from "react";

export function SetPortalPassword({
  attorneyId,
  hasPassword,
}: {
  attorneyId: string;
  hasPassword: boolean;
}) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch(`/api/attorneys/${attorneyId}/password`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Failed to set password");
      } else {
        setSuccess(true);
        setPassword("");
      }
    } catch {
      setError("Server error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">
      <h2 className="text-white font-bold mb-1">Attorney Portal Access</h2>
      <p className="text-slate-400 text-xs mb-4">
        {hasPassword
          ? "A portal password is already set. Enter a new password below to update it."
          : "Set a password so this attorney can log in to the client portal at /attorney/login."}
      </p>
      <form onSubmit={handleSubmit} className="flex items-end gap-3">
        <div className="flex-1">
          <label className="block text-slate-300 text-xs font-medium mb-1.5">
            New Portal Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            placeholder="Min. 6 characters"
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap"
        >
          {loading ? "Saving…" : hasPassword ? "Update Password" : "Set Password"}
        </button>
      </form>
      {success && (
        <p className="text-green-400 text-xs mt-2">
          Portal password {hasPassword ? "updated" : "set"} successfully.
        </p>
      )}
      {error && (
        <p className="text-red-400 text-xs mt-2">{error}</p>
      )}
    </div>
  );
}
