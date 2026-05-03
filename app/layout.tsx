import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Churn Predictor — Predict customer churn before it happens",
  description: "Analyzes usage patterns and engagement metrics to flag at-risk customers 30 days early. Built for SaaS founders and customer success managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b516e939-ba57-4dbf-b31e-0a883c892514"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
