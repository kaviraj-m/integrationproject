import React, { useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import Logo from "../assets/logos .svg";
import LoginImage from "../assets/login_image.svg";

const CLIENT_ID = "989601257675-de44seoe3bh2puhmss8t636vksmr5v79.apps.googleusercontent.com"; // google client id

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);
    const email = decodedToken.email;

    if (email.endsWith("@shanmugha.edu.in")) {
      localStorage.setItem("user", JSON.stringify(decodedToken));
      navigate("/dashboard");
    } else {
      alert("Access Denied: Unauthorized email domain");
    }
  };

  const handleFailure = (error) => {
    console.error("Google Login failed", error);
    alert("Google Login failed");
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <Box
        sx={{
          backgroundColor: "#f4f6f8",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "20px", sm: "40px", md: "60px", lg: "100px" },
        }}
      >
        <Box
          sx={{
            maxWidth: 1000,
            width: "100%",
          }}
        >
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", justifyContent: "center", mb: { xs: 4, md: 0 } }}>
                <img
                  src={LoginImage}
                  alt="Login Image"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  mx: "auto",
                  p: 3,
                  boxShadow: 3,
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                  <img src={Logo} alt="Logo" style={{ maxWidth: "80%", height: "auto" }} />
                </Box>
                <CardContent>
                  <Stack spacing={2} sx={{ mb: 3 }}>
                    <Typography variant="h4" align="center">
                      Login
                    </Typography>
                  </Stack>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <GoogleLogin
                      onSuccess={handleSuccess}
                      onError={handleFailure}
                      useOneTap
                      shape="pill"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
