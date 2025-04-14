"use client";

interface BlogHeaderProps {
  title: string;
}

export default function BlogHeader({ title }: BlogHeaderProps) {
  return (
    <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
      {title || "Untitled Blog Post"}
    </h1>
  );
}