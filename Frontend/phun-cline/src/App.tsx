import MainLayout from "./components/layout/MainLayout";
import ProcotedRoute from "./components/layout/ProcotedRoute";

const App = () => {
  return (
    <>
      <ProcotedRoute>
        <MainLayout />
      </ProcotedRoute>
    </>
  );
};

export default App;
