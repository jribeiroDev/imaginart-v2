import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between mb-5 ">
      <h1 className="text-2xl font-bold">ENCOMENDAS IMAGINARTE - V2</h1>
      <ModeToggle />
    </header>
  );
}
