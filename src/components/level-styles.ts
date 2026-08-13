import type { Level } from "@/lib/data";

export const levelText: Record<Level, string> = {
  beginner: "text-beginner",
  intermediate: "text-intermediate",
  advanced: "text-advanced",
};

export const levelBgSoft: Record<Level, string> = {
  beginner: "bg-beginner/20",
  intermediate: "bg-intermediate/20",
  advanced: "bg-advanced/20",
};

export const levelBgLight: Record<Level, string> = {
  beginner: "bg-beginner/15",
  intermediate: "bg-intermediate/15",
  advanced: "bg-advanced/15",
};

export const levelBorderLeft: Record<Level, string> = {
  beginner: "border-l-beginner",
  intermediate: "border-l-intermediate",
  advanced: "border-l-advanced",
};

export const levelBorder: Record<Level, string> = {
  beginner: "border-beginner",
  intermediate: "border-intermediate",
  advanced: "border-advanced",
};

export const levelChip: Record<Level, string> = {
  beginner: "bg-beginner/20 text-beginner",
  intermediate: "bg-intermediate/20 text-intermediate",
  advanced: "bg-advanced/20 text-advanced",
};
