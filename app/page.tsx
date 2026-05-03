export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Churn Prediction
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Predict customer churn<br />
          <span className="text-[#58a6ff]">before it happens</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Analyzes usage patterns and engagement metrics to flag at-risk customers
          <strong className="text-[#c9d1d9]"> 30 days early</strong> — so your team can act before revenue walks out the door.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start for $29/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No setup fees.</p>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          <div>
            <p className="text-2xl font-bold text-white">30d</p>
            <p className="text-xs text-[#8b949e] mt-1">Early warning window</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">94%</p>
            <p className="text-xs text-[#8b949e] mt-1">Prediction accuracy</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">2 min</p>
            <p className="text-xs text-[#8b949e] mt-1">Setup time</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#58a6ff] rounded-2xl bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-xs font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$29</p>
          <p className="text-sm text-[#8b949e] mb-6">/month · billed monthly</p>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              "Unlimited customer profiles",
              "Real-time churn risk scores",
              "30-day early warning alerts",
              "Slack & email notifications",
              "CSV + API data import",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors duration-150"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Powered by Lemon Squeezy · Secure checkout</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the churn prediction work?",
              a: "We connect to your existing data sources via API, then run usage patterns and engagement metrics through a machine learning pipeline trained on SaaS churn data. Each customer receives a risk score updated daily."
            },
            {
              q: "What data sources do you support?",
              a: "We support Stripe, Intercom, Mixpanel, Segment, and direct CSV uploads. Any REST API can be connected with our custom integration builder."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel with one click from your billing dashboard. You keep access until the end of your billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#21262d] rounded-xl bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Churn Predictor. All rights reserved.
      </footer>
    </main>
  );
}
