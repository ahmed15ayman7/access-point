import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../regestration.css";
import * as formik from "formik";
import * as yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../redux/Firebase/Firebase";
import { useState } from "react";
import { ErrorPlay, WaterPlay } from "../../../assets/audios/SoundPlay";
import logo from "../../../assets/images/logo.png";
import { useDispatch } from "react-redux";
import { SignUpType } from "../../../redux/types/registerType";
import { AddDetails } from "../../../redux/Firebase/AddDetails";
function SignUp() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [Loading, setLoading] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //?check agree -> used validation firebace
  //!check agree -> used validation firebace
  //?check agree -> used validation firebace
  //!check agree -> used validation firebace
  const [arredyEmail, setArredyEmail] = useState("");
  const [checkLog, setCheckLog] = useState(true);
  const [checkPass, setCheckPass] = useState(true);
  //?SignUp
  //!SignUp
  const handelSignUp = async (e) => {
    e.preventDefault();
    if(checkPass)
      {
        setLoading(true)
        let create=createUserWithEmailAndPassword(auth, email, password)
        let user = await create.catch((ea) => {
            setCheckLog(false);
            setLoading(false)
            ErrorPlay();
            email !== "" && email.length >= 9
            ? setArredyEmail("This email already exists")
            : setArredyEmail("Enter your email");
          })
        await AddDetails(user.user.uid,firstName,lastName,email)
        create.then((userCredentala) => {
            
            setCheckLog(true);
            dispatch({ type: SignUpType, pyload: userCredentala.user });
            setLoading(false)
            navigate("/");
            WaterPlay();
            setArredyEmail("");
          })
          
          
          
        }else{ ErrorPlay();}
        setLoading(false)
  };
  //?formik
  //!formik
  const { Formik } = formik;
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  });
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: '',
        lastName: '',
        email: "",
        password: "",
        confirmPassword: "",
      }}>
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form
          as={Row}
          className="pt-2 pb-5 form"
          noValidate
          onSubmit={handleSubmit}>
          <Form.Group
            as={Row}
            className="mb-4  justify-content-center align-self-center"
            controlId="formHorizontalEmail">
            <Col lg={12} style={{position:'absolute',bottom:'5%',left:'50%' ,transform:'translateX(-50%)',color:'#ffffff'}}>{Loading && <Spinner animation="grow"/>}</Col>
            <Col sm={10} md={8} lg={6}>
              <img
                src={logo}
                alt=""
                className="img-fluid"
                style={{ width: "35%" }}
              />
            </Col>
            <Col sm={12} md={12} lg={12}></Col>
            <Col sm={10} md={8} lg={6}>
              <h3 style={{ color: "#ffffff" }}>Sign Up</h3>
            </Col>
          </Form.Group>
          <Form.Group as={Row}
            className="mb-4 position-relative  justify-content-center align-self-center"
            controlId="validationFormik101">
          <Col sm={10} md={8} lg={6}>

          <Form.Control
            required
            type="text"
            name="firstName"
            placeholder="First name"
                className="input"
                aria-describedby="inputGroupPrepend"
                value={values.firstName}
                onChange={(e) => {
                  handleChange(e);
                  setFirstName(e.target.value);
                }}
                isInvalid={!!errors.firstName}
            
            />
          <Form.Control.Feedback type="invalid" >
              {errors.firstName}
            </Form.Control.Feedback>
            </Col>
        </Form.Group>
        <Form.Group as={Row}
            className="mb-4 position-relative  justify-content-center align-self-center"
            controlId="validationFormik102">
          
            <Col sm={10} md={8} lg={6}>

          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name="lastName"
            className="input"
            aria-describedby="inputGroupPrepend"
            value={values.lastName}
            onChange={(e) => {
                  handleChange(e);
                  setLastName(e.target.value);
            }}
            isInvalid={!!errors.lastName}
              />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.lastName}
            </Form.Control.Feedback>
            </Col>
        </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3  justify-content-center  position-relative  align-self-center"
            controlId="validationFormik104">
            <Col sm={10} md={8} lg={6}>
              <Form.Control
                type="email"
                placeholder="Email"
                className={`input ${checkLog}`}
                aria-describedby="inputGroupPrepend"
                name="email"
                value={values.email}
                onChange={(e) => {
                  handleChange(e);
                  setEmail(e.target.value);
                  setArredyEmail("");
                  setCheckLog(true);
                }}
                isInvalid={!!errors.email}
              />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.email}
            </Form.Control.Feedback>
            </Col>
            {arredyEmail !== "" ? (
              <>
                <p style={{ color: "red" }}>{arredyEmail}</p>
              </>
            ) : null}
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-4   position-relative  justify-content-center"
            controlId="validationFormik105">
            <Col sm={10} md={8} lg={6}>
              <Form.Control
                type="password"
                placeholder="Password"
                className={`input`}
                aria-describedby="inputGroupPrepend"
                name="password"
                value={values.password}
                onChange={(e) => {
                  handleChange(e);
                  setPassword(e.target.value);
                  e.target.value === confirmPassword
                    ? setCheckPass(true)
                    : setCheckPass(false);
                }}
                isInvalid={!!errors.password}
              />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.password}
            </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-4  position-relative   justify-content-center"
            controlId="validationFormik106">
            <Col sm={10} md={8} lg={6}>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                className={`input ${checkPass}`}
                aria-describedby="inputGroupPrepend"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={(e) => {
                  e.preventDefault();
                  setConfirmPassword(e.target.value);
                  e.target.value === password
                    ? setCheckPass(true)
                    : setCheckPass(false);
                  handleChange(e);
                }}
                isInvalid={!!errors.confirmPassword}
              />
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.confirmPassword}
            </Form.Control.Feedback>
            </Col>
          </Form.Group>
              
          <Form.Group as={Row} className="mb-4 justify-content-center">
            <Col sm={{ span: 10 }} md={8} lg={6}>
              <Button
                type="submit"
                variant=""
                onClick={handelSignUp}
                className="btn-log-sign">
                <Link className="reg">Sign Up</Link>
              </Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4 justify-content-center">
            <Col sm={{ span: 10 }} md={8} lg={6}>
              <div className="text-white">
                Create new account ?{" "}
                <Link to={"/login"} className="text-white link">
                  Login Now!
                </Link>
              </div>
            </Col>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
}

export default SignUp;
