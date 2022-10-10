import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'; // con el as evito el problema al tener dos Link, lo que hace es poner un "alias"
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
        <form action="">
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField label="Nombre completo" type="text" placeholder="Ingresa tu nombre" fullWidth></TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField label="Correo" type="email" placeholder="Ingresa tu email" fullWidth></TextField>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField label="Contraseña" type="password" placeholder="Ingresa tu password" fullWidth></TextField>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 2, mb: 2}}>
              <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth>Crear cuenta</Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ marginRight: 1}}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Ingresar
              </Link>
            </Grid>

          </Grid>
        </form>
      </AuthLayout>
  )
}
