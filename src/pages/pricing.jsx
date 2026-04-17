import DashboardLayout from "../layouts/DashboardLayout";

const plans = [
  {
    name: "Free",
    desc: "Perfect for testing the AI",
    price: "₹0",
    period: "",
    color: "#4f46e5",
    bg: "#f5f3ff",
    border: "#c4b5fd",
    btnBg: "#e0e7ff",
    btnColor: "#4f46e5",
    btnText: "Current Plan",
    badge: null,
    features: [
      "50 predictions/month",
      "CSV Upload",
      "Basic analytics",
      "Email support"
    ],
  },
  {
    name: "Pro",
    desc: "Best for growing stores",
    price: "₹999",
    period: "/ month",
    color: "#f97316",
    bg: "#fff7ed",
    border: "#fdba74",
    btnBg: "linear-gradient(135deg, #f97316, #fb923c)",
    btnColor: "#fff",
    btnText: "Upgrade to Pro",
    badge: "MOST POPULAR",
    features: [
      "5,000 predictions/month",
      "Prediction history",
      "Priority support",
      "Webhook support"
    ],
  },
  {
    name: "Enterprise",
    desc: "Custom solution for large brands",
    price: "Custom",
    period: "",
    color: "#7c3aed",
    bg: "#faf5ff",
    border: "#d8b4fe",
    btnBg: "linear-gradient(135deg, #7c3aed, #6d28d9)",
    btnColor: "#fff",
    btnText: "Contact Sales",
    badge: null,
    features: [
      "Unlimited predictions",
      "Dedicated API access",
      "Webhook integration",
      "Dedicated support",
      "Custom SLA"
    ],
  },
];

export default function Pricing() {
  const currentPlan = localStorage.getItem("plan") || "free";

  return (
    <DashboardLayout>

      {/* HEADER */}
      <div
        className="rounded-2xl p-6 mb-8 flex items-center gap-4"
        style={{
          background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
          boxShadow: "0 8px 32px rgba(79,70,229,0.25)"
        }}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
          style={{ background: "rgba(255,255,255,0.15)" }}
        >
          💎
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-white">
            Pricing Plans
          </h1>
          <p className="text-indigo-200 text-sm">
            Choose the plan that fits your business needs
          </p>
        </div>
      </div>

      {/* PRICING CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-2xl p-7 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 relative"
            style={{
              background: plan.bg,
              border: `2px solid ${plan.border}`
            }}
          >

            {/* BADGE */}
            {plan.badge && (
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold text-white"
                style={{
                  background: "linear-gradient(135deg, #f97316, #fb923c)",
                  boxShadow: "0 4px 12px rgba(249,115,22,0.4)"
                }}
              >
                {plan.badge}
              </div>
            )}

            {/* TITLE */}
            <div className="mb-5">
              <h2
                className="text-xl font-extrabold mb-1"
                style={{ color: plan.color }}
              >
                {plan.name}
              </h2>
              <p className="text-sm text-gray-500">{plan.desc}</p>
            </div>

            {/* PRICE */}
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-indigo-900">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-sm font-semibold ml-1 text-gray-500">
                  {plan.period}
                </span>
              )}
            </div>

            {/* FEATURES */}
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                    style={{
                      border: `2px solid ${plan.color}`,
                      color: plan.color
                    }}
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            {/* BUTTON */}
            <button
              className="w-full py-3 rounded-xl font-extrabold text-sm transition-all hover:scale-105"
              style={{
                background: plan.btnBg,
                color: plan.btnColor
              }}
            >
              {currentPlan === plan.name.toLowerCase()
                ? "✓ Current Plan"
                : plan.btnText}
            </button>
          </div>
        ))}
      </div>

      {/* COMPARISON TABLE */}
      <div
        className="rounded-2xl p-6 shadow-md"
        style={{ background: "#fff", border: "2px solid #e0e7ff" }}
      >
        <h2 className="font-extrabold text-lg mb-5 text-indigo-900">
          📊 Plan Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "2px solid #e0e7ff" }}>
                <th className="text-left py-3 px-4 font-extrabold text-indigo-900">
                  Feature
                </th>
                {plans.map((p) => (
                  <th
                    key={p.name}
                    className="py-3 px-4 font-extrabold text-center"
                    style={{ color: p.color }}
                  >
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {[
                ["Monthly Predictions", "50", "5,000", "Unlimited"],
                ["CSV Upload", "✓", "✓", "✓"],
                ["Prediction History", "✗", "✓", "✓"],
                ["Priority Support", "✗", "✓", "✓"],
                ["Webhook Support", "✗", "✓", "✓"],
                ["API Access", "✗", "✗", "✓"], // 🔥 Important change
                ["Dedicated Support", "✗", "✗", "✓"],
                ["Custom SLA", "✗", "✗", "✓"],
              ].map(([feature, ...vals]) => (
                <tr key={feature} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td className="py-3 px-4 font-semibold text-gray-700">
                    {feature}
                  </td>

                  {vals.map((val, i) => (
                    <td
                      key={i}
                      className="py-3 px-4 text-center font-bold"
                      style={{
                        color:
                          val === "✓"
                            ? "#16a34a"
                            : val === "✗"
                            ? "#dc2626"
                            : plans[i].color
                      }}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </DashboardLayout>
  );
}