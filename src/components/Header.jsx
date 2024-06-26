import Link from "next/link";
import { ThemeController } from "./ThemeController";

export const Header = () => {
  return (
    <header className="sticky top-4 z-10 m-auto flex w-full max-w-2xl items-center gap-2 rounded-full border border-neutral-content/20 bg-neutral px-4 py-2 shadow-md">
      <img className="size-8" alt="BeginReact Logo" src="/beginreact.png" />
      <Link href="/" className="font-bold text-neutral-content">
        BeginReact
      </Link>
      <div className="flex-1"></div>
      <ThemeController />
    </header>
  );
};
