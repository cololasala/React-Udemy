import { Button, Grid, TextField, Typography } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          28 de agosto de 2022
        </Typography>
      </Grid>

      <Grid item>
        <Button sx={{ padding: 2 }}>
          <SaveOutlined
            color="primary"
            sx={{ fontSize: 30, mr: 1 }}
          ></SaveOutlined>
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          label="Titulo"
          placeholder="Ingrese un titulo"
          fullWidth
          sx={{ border: "none", mt: 1 }}
        ></TextField>
        <TextField
          type="text"
          variant="filled"
          placeholder="Que sucedio en el dia de hoy?"
          fullWidth
          multiline
          minRows={ 5 }
          sx={{ border: "none", mt: 1 }}
        ></TextField>
      </Grid>

      <ImageGallery/>
    </Grid>
  );
};
