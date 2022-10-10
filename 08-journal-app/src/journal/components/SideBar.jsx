import { Box, Drawer, List, ListItem, Toolbar, Typography, Divider, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material";
import { TurnedInNot } from '@mui/icons-material';

export const SideBar = ({ drawerView = 270 }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerView }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "&.MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { drawerView },
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Luciano Lasala
          </Typography>
        </Toolbar>
        <Divider/>

        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>

                  <Grid container direction="column">
                    <ListItemText primary={text}/>
                    <ListItemText secondary={'Este es un texto secundario.'}/>
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  );
};
