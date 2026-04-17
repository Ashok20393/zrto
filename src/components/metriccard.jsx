export default function MetricCard({ title, value, icon, color, bg, trend }) {
  return (
    <div
      className="rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
      style={{ background: bg || "#fff", border: `2px solid ${color}20` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ background: `${color}15` }}
        >
          {icon || "📊"}
        </div>
        {trend && (
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{
              background: trend > 0 ? "#dcfce7" : "#fee2e2",
              color: trend > 0 ? "#16a34a" : "#dc2626",
            }}
          >
            {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}%
          </span>
        )}
      </div>
      <p className="text-sm font-semibold mb-1" style={{ color: "#6b7280" }}>{title}</p>
      <h2 className="text-3xl font-extrabold" style={{ color: color || "#1e1b4b" }}>{value}</h2>
    </div>
  );
}