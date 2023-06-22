import { Row, InputGroup, Form, Button, Col, Spinner } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SendMessageOnDoc } from "../../redux/Firebase/AddDetails";
import { useSelector } from "react-redux";
import { DonePlay, ErrorPlay} from "../../assets/audios/SoundPlay";
import { initializeDetails } from "../../redux/reducer/reducerRegister/reducerAuth";

function ContantForm() {
  const { Formik } = formik;
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const user=useSelector(e=>e.userDetails.details)[0];
  let time=new Date().getTime()
  const handelClick=()=>{
    if (message!==''&&email!==''&&phone!==''&&user!==initializeDetails) {
      setLoading(true)
      SendMessageOnDoc(time,user.id,email,phone,message,user.image,user.firstName+' '+user.lastName).then(()=>{DonePlay();setEmail('');setPhone('');setMessage('');setLoading(false)}).catch(e=>{setLoading(false);ErrorPlay()});
    }else{
      ErrorPlay()
    }
  }
  const schema = yup.object().shape({
    email: yup.string().required(),
    phone: yup.string().required(),
    message: yup.string().required(),
    
  });
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        email: "",
        phone: "",
        message: '',

      }}>
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
          <Col lg={12} style={{position:'absolute',top:'20%',left:'50%' ,transform:'translateX(-50%)'}}>{loading && <Spinner animation="grow"/>}</Col>
            <Form.Group
              as={Col}
              md="8"
              className=""
              controlId="validationFormik01">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                aria-describedby="inputGroupPrepend"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value);handleChange(e)}}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                  {email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label>Phone</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">📞</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="phone"
                  aria-describedby="inputGroupPrepend"
                  name="phone"
                  value={phone}
                  onChange={(e)=>{setPhone(e.target.value);handleChange(e)}}
                  isInvalid={!!errors.phone}
                  />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
                  </Row>
            <Row className="mb-3">
            <Form.Group  className='col-12' controlId="validationFormik02">
            <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                aria-describedby="inputGroupPrepend"
                value={message}
                placeholder='Enter your message'
                onChange={(e)=>{setMessage(e.target.value);handleChange(e)}}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid" >
                  {errors.message}
                </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Link to={values.address&&values.address2&&values.city&&values.firstName&&values.lastName&&values.phone&&values.state&&values.zip?'/':null}>
          <Button type="submit" disabled={loading} variant="" onClick={handelClick} className="btn-more-2 mt-lg-5 mt-3">
            Send Now
          </Button>
          </Link>
          <Row style={{justifyContent:'center'}} className='mt-lg-5 mt-3'>
            <Col lg={3} md={4} sm={6} xs={10}>
          
          </Col>
          </Row>
          
        </Form>
      )}
    </Formik>
  );
}

export default ContantForm;
