import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../regestration.css";
import * as formik from "formik";
import * as yup from "yup";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AdminAuth, auth } from "../../../redux/Firebase/Firebase";
import { DonePlay, ErrorPlay } from "../../../assets/audios/SoundPlay";
import logo from '../../../assets/images/logo.png' 
import { useDispatch } from "react-redux";
import { LoginAdminType, LoginType } from "../../../redux/types/registerType";
function Login() {
  let dispatch=useDispatch()
  let navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkLog, setCheckLog] = useState(true);
  const handelLogin = (e) => {
    setLoading(true)
    let signuser=  signInWithEmailAndPassword(auth, email, password)
      
      signInWithEmailAndPassword(AdminAuth, email, password).then((admin) => {
        setCheckLog(true);
        dispatch({type: LoginAdminType,pyload:admin.user})
        DonePlay();
        setLoading(false)
        navigate("/dashboard");
      }).catch(e=>console.log(e))
      signuser.then((user) => {
        setCheckLog(true);
        dispatch({type:LoginType,pyload:user.user})
        DonePlay();
        setLoading(false)
        navigate("/");
      }).catch((ea) => {
        console.log(ea)
        setCheckLog(false);
        ErrorPlay();
        setLoading(false)
      });
    e.preventDefault();
  };
  const { Formik } = formik;
  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "terms must be accepted"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        email: "",
        password: "",
        terms: false,
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
              <img src={logo} alt='' className="img-fluid" style={{width:'35%'}}/>
            </Col>
            <Col sm={12} md={12} lg={12}></Col>
            <Col sm={10} md={8} lg={6}>
              <h3 style={{ color: "#ffffff" }}>Login</h3>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-4  justify-content-center position-relative align-self-center"
            controlId="validationFormik102">
            <Col sm={10} md={8} lg={6}>
              <Form.Control
                type="email"
                placeholder="email"
                className={`input ${checkLog}`}
                aria-describedby="inputGroupPrepend"
                name="email"
                value={values.email}
                onChange={(e) => {
                  handleChange(e);
                  setEmail(e.target.value);
                }}
                isInvalid={!!errors.email}
              />
            </Col>
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-4  position-relative justify-content-center"
            controlId="validationFormik103">
            <Col sm={10} md={8} lg={6}>
              <Form.Control
                type="password"
                placeholder="Password"
                className={`input ${checkLog}`}
                aria-describedby="inputGroupPrepend"
                name="password"
                value={values.password}
                onChange={(e) => {
                  handleChange(e);
                  setPassword(e.target.value);
                }}
                isInvalid={!!errors.password}
              />
            </Col>
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Row} className="mb-4 justify-content-center">
            <Col sm={{ span: 10 }} md={8} lg={6}>
              <Button
                type="submit"
                variant=""
                onClick={handelLogin}
                className="btn-log-sign">
                <Link className="reg">Login</Link>
              </Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4 justify-content-center">
            <Col sm={{ span: 10 }} md={8} lg={6}>
              <div className="text-white">
                Create new account ?{" "}
                <Link to={"/sign-up"} className="text-white link">
                  SignUp Now!
                </Link>
              </div>
            </Col>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
