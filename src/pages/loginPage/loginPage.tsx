import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import s from "./loginPage.module.css";
import { Button, Paper } from "@mui/material";

export function LoginPage() {
  return (
    <div className={s.container}>
      <div className={s.bgImage}></div>
      <div className={s.formContainer}>
        <Paper elevation={3} className={s.formContent}>
          <Typography>
            Login
          </Typography>

          <TextField      
            id="outlined-required"
            label="Username"
            defaultValue=""
            autoComplete="off"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="new-password"
          />
          <Button variant="contained">
              Login
          </Button>
        </Paper>
      </div>
    </div>
  );
}
