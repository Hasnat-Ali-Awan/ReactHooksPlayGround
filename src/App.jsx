import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import HookDetails from "./pages/HookDetails";

import hooksData from "./data/hooksData";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />

        {hooksData.flatMap((section) =>
          section.hooks.map((hook) => (
            <Route
              key={hook.name}
              path={hook.path}
              element={<HookDetails />}
            />
          ))
        )}
      </Routes>
    </MainLayout>
  );
}

export default App;