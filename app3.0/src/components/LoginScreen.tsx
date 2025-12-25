import { Sprout } from "lucide-react";
import { Language, TRANSLATIONS } from "../config/translations";
import { APP_CONFIG } from "../config/appConfig";

interface Props {
  language: Language;
  onGetStarted: () => void;
}

export function SplashScreen({ language, onGetStarted }: Props) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between p-6"
      style={{
        background: `linear-gradient(135deg, ${APP_CONFIG.colors.primary}, #1B5E20)`
      }}
    >
      <div className="flex-1" />

      <div className="text-center">
        <div className="mx-auto mb-8 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
          <Sprout className="w-12 h-12 text-green-700" />
        </div>

        <h1 className="text-4xl font-bold text-white mb-3">
          {TRANSLATIONS.appName[language]}
        </h1>

        <p className="text-white/90 text-lg max-w-xs mx-auto">
          {TRANSLATIONS.appSubtitle[language]}
        </p>
      </div>

      <button
        onClick={onGetStarted}
        className="w-full max-w-md bg-white text-green-700 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:scale-105 transition"
      >
        {TRANSLATIONS.getStarted[language]}
      </button>
    </div>
  );
}
