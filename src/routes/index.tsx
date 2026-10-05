import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barigilla Sharoni — Software Engineer & Full-Stack Developer" },
      { name: "description", content: "Portfolio of Barigilla Sharoni, a 2026 IT graduate and aspiring software engineer building thoughtful full-stack applications." },
      { property: "og:title", content: "Barigilla Sharoni — Software Engineer" },
      { property: "og:description", content: "Full-stack projects, Java foundations, leadership experience, and a thoughtful approach to software engineering." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
