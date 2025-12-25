import { Language } from "../config/translations";

export function Dashboard({ language }: { language: Language }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <h1 className="text-3xl font-bold text-green-800">
        Dashboard Loaded 🌱
      </h1>
    </div>
  );
}
