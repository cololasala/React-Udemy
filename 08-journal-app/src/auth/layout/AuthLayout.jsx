import { Grid, Toolbar, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = '' }) => { // el children son los componentes que estan dentro, seria parecido al ng-content
  return (
    <Grid
      container
      direction="column"
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
      }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ width: { sm: 450 } , backgroundColor: "white", padding: 3, borderRadius: 2 }} /* cuando la pantalla sea small el width sera 450px */
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          { title }
        </Typography>

        { children }
      </Grid>
    </Grid>
  );
};
