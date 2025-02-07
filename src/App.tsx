import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "./components/ui/button";
import { Header } from "./components/Header";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Button>Click me</Button>
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
