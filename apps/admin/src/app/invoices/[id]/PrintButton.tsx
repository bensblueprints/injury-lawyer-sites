"use client";
export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
    >
      Print / PDF
    </button>
  );
}
