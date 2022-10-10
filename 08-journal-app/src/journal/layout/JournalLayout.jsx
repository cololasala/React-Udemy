import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";

const drawerView = 270;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerView={drawerView} />
      <SideBar drawerView={drawerView}></SideBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
