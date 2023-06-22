import React from "react";
import { Container } from "react-bootstrap";
import SignUp from "../../../components/regesteration/SignUp/SignUp";

export const SignUpPage = () => {
  return (
    <Container className="min-vh-100" style={{ position: "relative" }}>
      <SignUp />
    </Container>
  );
};
