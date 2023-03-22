import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  useTheme,
  InputAdornment,
  IconButton,
  Avatar,
  Button,
  TextField,
  Paper,
  Box,
  Grid,
  Link,
} from "@mui/material";
import { Formik } from "formik";
// import axios from "axios";
import * as yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { tokens } from "../../theme";

import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import Logo from "../../assets/mzayaLogo.png";
import { getUsers } from "../../redux/delivery-thunks";
import MzayaImage from "../../assets/MzayaLogoLg.jpeg";
import { connect, useSelector } from "react-redux";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.golalita.com/">
        Mzaya GoLalita
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}



const LogIn = ({ users, getUsers }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginCerds, setLoginCred] = useState({
    userName: "",
    password: "",
  });

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const initialValues = {
    username: "",
    password: "",
  };
  const handleLoginSubmit = (values) => {
    // e.preventDefault();

    console.log("values", values);
    console.log("username", values.username);
    setLoginCred({
      [loginCerds.userName]: values.username,
      [loginCerds.password]: values.password,
    });
    // getUsers()
    // console.log(getUsers.result)
  };

  const loginSchema = yup.object().shape({
    username: yup.string().required("required"),
    password: yup.string().required("required"),

  });

  useEffect(() => {
    getUsers(loginCerds);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${MzayaImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              height: "100%",
              p: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: theme.palette.background.alt,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "black" }}>
              <img src={Logo} alt="Mzaya Premium Loyalty Program" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>

            <Formik
              onSubmit={handleLoginSubmit}
              initialValues={initialValues}
              validationSchema={loginSchema}
              style={{ marginTop: "20px" }}
            >
              {({
                values,
                errors,
                touched,
                setFieldValue,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box
                    // component="form"
                    // noValidate
                    // onSubmit={handleSubmit}
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      margin="normal"
                      fullWidth
                      id="username"
                      label="User Name"
                      name="username"
                      autoComplete="username"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.username}
                      error={!!touched.username && !!errors.username}
                      helperText={touched.username && errors.username}
                      autoFocus
                    />

                    <TextField
                      margin="normal"
                      fullWidth
                      name="password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      autoComplete="current-password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                      error={!!touched.password && !!errors.password}
                      helperText={touched.password && errors.password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 3,
                        mb: 2,
                        backgroundColor: colors.yellowAccent[500],
                        color: "#000000",
                        "&:hover": {
                          backgroundColor: colors.yellowAccent[600],
                          color: "#000000",
                        },
                      }}
                    >
                      Log In
                    </Button>

                    <Copyright sx={{ mt: 5 }} />
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
});
export default connect(mapStateToProps, { getUsers })(LogIn);

// export default LogIn;
