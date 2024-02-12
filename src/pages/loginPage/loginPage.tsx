import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import s from "./loginPage.module.css";
import { Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthService } from "@/services";
import { useState } from "react";

export function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername ] = useState("");
  const [password, setPassword ] = useState("");

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
            value={username}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(event.target.value);
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
            }}
          />
          <Button variant="text" onClick={
            () => {
              const loginResult = AuthService.login(username, password);

              if (loginResult == true) {
                navigate("/")
              }
            }

          }>
              Login
          </Button>
        </Paper>
      </div>
    </div>
  );
}
