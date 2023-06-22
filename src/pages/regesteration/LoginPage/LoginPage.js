import React from "react";
import { Container } from "react-bootstrap";
import Login from "../../../components/regesteration/Login/Login";

export const LoginPage = () => {
  return (
    <Container className="min-vh-100" style={{ position: "relative" }}>
      <Login />
    </Container>
  );
};
