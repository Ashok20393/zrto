export default function UsageBar({ used, limit }) {
  const safeUsed = used ?? 0;
  const safeLimit = typeof limit === "number" ? limit : 50;
  const percent = Math.min((safeUsed / safeLimit) * 100, 100);

  const getColor = () => {
    if (percent >= 90) return { bar: "#dc2626", bg: "#fee2e2", text: "#dc2626" };
    if (percent >= 70) return { bar: "#f97316", bg: "#fff7ed", text: "#ea580c" };
    return { bar: "#4f46e5", bg: "#e0e7ff", text: "#4338ca" };
  };

  const colors = getColor();

  return (
    <div className="rounded-2xl p-6 shadow-md" style={{ background: "#fff", border: "2px solid #e0e7ff" }}>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: "#e0e7ff" }}>📈</div>
          <div>
            <h3 className="font-extrabold" style={{ color: "#1e1b4b" }}>Usage This Month</h3>
            <p className="text-xs" style={{ color: "#6b7280" }}>Resets every 30 days</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-extrabold" style={{ color: colors.text }}>
            {safeUsed}<span className="text-base font-semibold" style={{ color: "#9ca3af" }}>/{safeLimit}</span>
          </div>
          <div className="text-xs font-semibold" style={{ color: "#6b7280" }}>orders used</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-4 rounded-full mb-3" style={{ background: "#f1f5f9" }}>
        <div
          className="h-4 rounded-full transition-all duration-700"
          style={{ width: `${percent}%`, background: `linear-gradient(90deg, ${colors.bar}, ${colors.bar}cc)`, boxShadow: `0 2px 8px ${colors.bar}44` }}
        />
      </div>

      <div className="flex justify-between items-center">
        <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: colors.bg, color: colors.text }}>
          {percent.toFixed(0)}% used
        </span>
        <span className="text-xs font-semibold" style={{ color: "#6b7280" }}>
          {safeLimit - safeUsed} predictions remaining
        </span>
      </div>
    </div>
  );
}