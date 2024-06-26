import { Moon, Sun } from "lucide-react";

export const ThemeController = () => {
  return (
    <label className="btn btn-ghost swap swap-rotate btn-sm size-9 !text-neutral-content">
      <input type="checkbox" className="theme-controller" value="emerald" />

      <Sun size={24} className="swap-on size-6" />

      <Moon size={24} className="swap-off size-6" />
    </label>
  );
};
