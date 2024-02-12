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
        <Paper elevation={0} className={s.formContent}>
          <Typography variant="h4" marginBottom="20px">
            Вход в систему
          </Typography>

          <TextField      
            id="outlined-required"
            label="Имя пользователя"
            defaultValue=""
            autoComplete="off"
            value={username}
            margin="dense"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(event.target.value);
            }}
          />
          <TextField
            margin="dense"
            id="outlined-password-input"
            label="Пароль"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
            }}
          />
          <Button variant="contained" sx={{marginTop: "30px"}} onClick={
            () => {
              const loginResult = AuthService.login(username, password);

              if (loginResult == true) {
                navigate("/")
              }
            }
          }>
              Войти
          </Button>
        </Paper>
      </div>
    </div>
  );
}
