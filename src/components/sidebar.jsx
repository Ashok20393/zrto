import { Link, useLocation } from "react-router-dom";

const user = {
  role: localStorage.getItem("role")
};

const basenavItems = [
  { to: "/dashboard",  icon: "📊", label: "Dashboard" },
  { to: "/predict",    icon: "🤖", label: "Predict Orders" },
  { to: "/pricing",    icon: "💎", label: "Pricing" },
  { to: "/history",    icon: "📋", label: "Prediction History" },
  { to: "/api-access", icon: "🔑", label: "API Access" },
  { to: "/usage",      icon: "📈", label: "Usage" },
  { to: "/api",        icon: "⚡", label: "API Integration" },
  { to: "/account",    icon: "👤", label: "Account" },
  { to: "/admin",      icon: "🛡️", label: "Admin Dashboard" },
  ...(user?.role === "admin"
    ? [{ to: "/admin", icon: "🛡️", label: "Admin Dashboard" }]
    : []),
];

const navItems = user?.role === "admin"
  ? [...basenavItems, { to: "/admin", icon: "🛡️", label: "Admin Dashboard" }]
  : basenavItems;


export default function Sidebar() {
  const location = useLocation();

  return (
    <div
      className="w-64 min-h-screen flex flex-col p-5"
      style={{ background: "linear-gradient(180deg, #1a1a6e 0%, #2d2d9b 50%, #1e1b4b 100%)" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10 px-2">
        <span className="font-extrabold text-xl text-white tracking-tight">
          Z<span style={{ color: "#fb923c" }}>RTO</span>
        </span>
      </div>

      {/* Nav */}
      <nav className="space-y-1 flex-1">
        {navItems.map((item) => {
          const active = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: active ? "rgba(249,115,22,0.25)" : "transparent",
                color: active ? "#fb923c" : "#c7d2fe",
                borderLeft: active ? "3px solid #f97316" : "3px solid transparent",
              }}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Plan badge */}
      <div className="mt-6 rounded-2xl p-4" style={{ background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)" }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#fb923c" }}>Free Plan</p>
        <p className="text-xs" style={{ color: "#a5b4fc" }}>50 predictions/month</p>
        <Link to="/pricing" className="mt-3 block text-center text-xs font-extrabold py-2 rounded-lg transition-all"
          style={{ background: "linear-gradient(135deg, #f97316, #fb923c)", color: "#fff" }}>
          Upgrade Plan →
        </Link>
      </div>
    </div>
  );
}