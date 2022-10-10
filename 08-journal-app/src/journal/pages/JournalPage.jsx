import { Typography, IconButton } from "@mui/material";
import { MailOutline } from "@mui/icons-material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        {/* <Typography component="h1">JournalPage</Typography>
        <MailOutline /> */}

        {/* <NothingSelectedView/> */}

        <NoteView />

        <IconButton
          size="large"
          sx={{
            color: "white",
            backgroundColor: "error.main",
            ":hover": { backgroundColor: "error.main", opacity: "0.9" }, /* Si no se pone esto el botton se hace transparente al hacer hover */
            right: 50,
            bottom: 50,
            position: "fixed"
          }}
        >
          <AddOutlined sx={{ fontSize: 30}}/>
        </IconButton>
      </JournalLayout>
    </>
  );
};
