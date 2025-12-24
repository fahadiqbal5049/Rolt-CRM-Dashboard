import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { PublicLayout } from "./components/ui/shared/layout/PublicLayout";
import { AuthenticatedLayout } from "./components/ui/shared/layout/AuthenticatedLayout";
import { AuthenticatedRoutes } from "./data/LeftNavigation";
import Login from "./pages/Login";

// Route configuration

function App() {
  const [isLeftNavCollapsed, setIsLeftNavCollapsed] = useState(false);

  const toggleLeftNav = () => {
    setIsLeftNavCollapsed((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicLayout>
              <Login />
            </PublicLayout>
          }
        />

        <Route
          path="*"
          element={
            <AuthenticatedLayout
              isLeftNavCollapsed={isLeftNavCollapsed}
              toggleLeftNav={toggleLeftNav}
            >
              <Routes>
                {AuthenticatedRoutes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </AuthenticatedLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
