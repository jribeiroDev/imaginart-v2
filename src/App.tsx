import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "./components/Header";
import { ResumeCard } from "./components/ResumeCard";
import { Menu } from "./components/Menu";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="container mx-auto py-6 px-6">
          <Toaster />
          <Header />
          <ResumeCard />
          <div className="mt-4">
            <Menu />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
