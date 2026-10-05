import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import LessonsPage from "./pages/LessonsPage";
import VocabularyPage from "./pages/VocabularyPage";
import KanjiPage from "./pages/KanjiPage";
import GrammarPage from "./pages/GrammarPage";
import PracticePage from "./pages/PracticePage";
import KaiwaPage from "./pages/KaiwaPage";
import ProgressPage from "./pages/ProgressPage";
import Dashboard from "./pages/Dashboard";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/lessons"
          element={<LessonsPage />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/vocabulary"
          element={<VocabularyPage />}
        />

        <Route
          path="/kanji"
          element={<KanjiPage />}
        />

        <Route
          path="/grammar"
          element={<GrammarPage />}
        />

        <Route
          path="/practice"
          element={<PracticePage />}
        />

        <Route
          path="/kaiwa"
          element={<KaiwaPage />}
        />

        <Route
          path="/progress"
          element={<ProgressPage />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>

    </div>
  );
}

export default App;