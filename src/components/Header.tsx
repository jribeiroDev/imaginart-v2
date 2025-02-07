import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold">Vite UI</h1>
      <ModeToggle />
    </header>
  );
}
