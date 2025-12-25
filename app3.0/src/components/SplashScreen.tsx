import { useState } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { LoginScreen } from "./components/LoginScreen";
import { Dashboard } from "./components/Dashboard";
import { Language } from "./config/translations";

type Screen = "splash" | "login" | "dashboard";

export default function App() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [language] = useState<Language>("en");

  if (screen === "splash") {
    return (
      <SplashScreen
        language={language}
        onGetStarted={() => setScreen("login")}
      />
    );
  }

  if (screen === "login") {
    return (
      <LoginScreen
        language={language}
        onLogin={() => setScreen("dashboard")}
      />
    );
  }

  return <Dashboard language={language} />;
}
