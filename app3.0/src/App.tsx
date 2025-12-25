import { Sprout } from "lucide-react";
import { Language, TRANSLATIONS } from "../config/translations";
import { APP_CONFIG } from "../config/appConfig";
import logo from "../assets/logo.png"; // or correct image path


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
