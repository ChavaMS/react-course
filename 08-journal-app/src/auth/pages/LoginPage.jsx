import {
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Alert,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";
import { useMemo, useState } from "react";

const formData = {
  email: "",
  password: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El email debe de tener una @"],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener mas de 6 letras",
  ],
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const [formSubmitted, setFormSubmited] = useState(false);

  const dispatch = useDispatch();
  const {
    email,
    password,
    emailValid,
    isFormValid,
    passwordValid,
    onInputChange,
  } = useForm(formData, formValidations);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);

    if (!isFormValid) {
      return;
    }

    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form
        aria-label="submit-form"
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              inputProps={{
                "data-testid": "password",
              }}
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container display={!!errorMessage ? "" : "none"} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isAuthenticating}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                aria-label="google-btn"
                onClick={onGoogleSignIn}
                variant="contained"
                fullWidth
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
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
