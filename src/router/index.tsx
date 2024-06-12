import { AppProvider } from "../context/AppContext";
import AppRouterProvider from "./RouterProvder";

const AppRouter = () => {
  return (
    <AppProvider>
      <AppRouterProvider />
    </AppProvider>
  );
};

export default AppRouter;
