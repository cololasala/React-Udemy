import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from 'react-router-dom'; // con el as evito el problema al tener dos Link, lo que hace es poner un "alias"
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
      <AuthLayout title="Login">
        <form action="">
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2}}> {/* xs es parecido al col-12 de bootstrap, se ajustan las cosas segun la resolucion de la pantalla */}
              <TextField label="Correo" type="email" placeholder="Ingresa tu email" fullWidth></TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField label="Contraseña" type="password" placeholder="Ingresa tu password" fullWidth></TextField>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 2, mb: 2}}>
              <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth>Login</Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth>
                    <Google></Google>
                    <Typography>
                      Google
                    </Typography>
                  </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>
        </form>
      </AuthLayout>
  );
};
