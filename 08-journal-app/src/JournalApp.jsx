import { AppRouter } from "../src/router/AppRouter";
import { AppTheme } from "./theme"

export const JournalApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  );
};
