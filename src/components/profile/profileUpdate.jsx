import { Row, InputGroup, Form, Button, Col, Spinner } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { DonePlay, ErrorPlay } from "../../assets/audios/SoundPlay";
import { useEffect, useState } from "react";
import { upload } from "../../redux/Firebase/Firebase";
import { useSelector } from "react-redux";
import { AddDetails } from "../../redux/Firebase/AddDetails";
import { useDispatch } from "react-redux";




function ProfileUpdate(props) {
let dispatch=useDispatch()
let photo=useSelector(e=>e.userImage)
let user =useSelector(e=>e.reducerAuth.profile)
let userDetails =useSelector(e=>e.userDetails.details)[0]
const [Loading, setLoading] = useState("");
const [firstName, setFirstName] = useState(`${userDetails.firstName}`);
  const [lastName, setLastName] = useState(`${userDetails.lastName}`);
  const [image, setImage] = useState(``);
  const [phone, setPhone] = useState(`${userDetails.phone}`);
  const [address, setAddress] = useState(`${userDetails.address}`);
  const [address2, setAddress2] = useState(`${userDetails.address2}`);
  const [city, setCity] = useState(`${userDetails.city}`);
  const [state, setStates] = useState(`${userDetails.state}`);
  const [zip, setZip] = useState(`${userDetails.zip}`);
  const [email, setEmail] = useState(`${userDetails.email}`);
  const [country, setCountry] = useState(`${userDetails.country}`);
//? upload image

useEffect ( () => {
    image!==''&& upload(image,setLoading,dispatch);
    setImage('')

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image]);


let handelClick= (e) => {
    setLoading(true)
    e.preventDefault()
    AddDetails(user.uid,firstName,lastName,email,phone,photo,country,address,address2,city,zip,state).then(e=>{DonePlay();props.setfirst('none')}).catch(e=>ErrorPlay())
    setLoading(false)
  }
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string().required(),
    country: yup.string().required(),
    address: yup.string().required(),
    address2: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),

  });
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName:`${userDetails.firstName}`,
        lastName:`${userDetails.lastName}`,
        image: ``,
        phone: `${userDetails.phone}`,
        email: `${userDetails.email}`,
        country: `${userDetails.country}`,
        address: `${userDetails.address}`,
        address2: `${userDetails.address2}`,
        city: `${userDetails.city}`,
        zip: `${userDetails.zip}`,
        state: `${userDetails.state}`,
      }}>
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit} className='text-white'>
          <Row className="mb-3">
          
            <Col lg={12} style={{position:'absolute',top:'20%',left:'50%' ,transform:'translateX(-50%)'}}>{Loading && <Spinner animation="grow"/>}</Col>
            <Form.Group
              as={Col}
              md="3"
              className=""
              controlId="validationFormikFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={e=>{
                    handleChange(e);
                    setFirstName(e.target.value)
                }}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={!!errors.firstName}
                placeholder={'First Name'}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              className=""
              controlId="validationFormikLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={e=>{
                    handleChange(e);
                    setLastName(e.target.value)
                }}
                isValid={touched.lastName && !errors.lastName}
                isInvalid={!!errors.lastName}
                placeholder={'Last Name'}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="3"
              className="mb-3"
              controlId="validationFormik01">
              <Form.Label>Image Profile</Form.Label>
              <Form.Control
                type="file"
                aria-describedby="inputGroupPrepend"
                name="image"
                value={values.image}
                onChange={e=>{
                    handleChange(e);
                    setImage(e.target.files[0])
                }}
                isInvalid={!!errors.image}
                placeholder="password"
                
              />
              <Form.Control.Feedback type="invalid">
                {errors.image}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik02">
              <Form.Label>Phone</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">📞</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="phone"
                  aria-describedby="inputGroupPrepend"
                  name="phone"
                  value={values.phone}
                  onChange={e=>{
                    handleChange(e);
                    setPhone(e.target.value)
                }}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} md="5" controlId="validationFormik03">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={e=>{
                    handleChange(e);
                    setEmail(e.target.value)
                }}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              className="mb-3"
              controlId="validationFormik04">
              <Form.Label>Country</Form.Label>
              <Form.Control
              
                type="text"
                aria-describedby="inputGroupPrepend"
                name="country"
                value={values.country}
                onChange={e=>{
                    handleChange(e);
                    setCountry(e.target.value)
                }}
                
                placeholder="country"
                
                isInvalid={!!errors.country}
              />
              <Form.Control.Feedback type="invalid">
                {errors.country}
              </Form.Control.Feedback>
            </Form.Group>
            

            <Form.Group
              as={Col}
              md="3"
              className="mb-3"
              controlId="validationFormik05">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                aria-describedby="inputGroupPrepend"
                name="address"
                value={values.address}
                onChange={e=>{
                    handleChange(e);
                    setAddress(e.target.value)
                }}
                isInvalid={!!errors.address}
                placeholder="Apartment, studio, or floor"
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group
              as={Col}
              md="3"
              className="mb-3"
              controlId="validationFormik06">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                type="text"
                aria-describedby="inputGroupPrepend"
                name="address2"
                value={values.address2}
                onChange={e=>{
                    handleChange(e);
                    setAddress2(e.target.value)
                }}
                isInvalid={!!errors.address2}
                placeholder="Apartment, studio, or floor"
              />
              <Form.Control.Feedback type="invalid">
                {errors.address2}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik07">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={e=>{
                    handleChange(e);
                    setCity(e.target.value)
                }}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik08">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={e=>{
                    handleChange(e);
                    setStates(e.target.value)
                }}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationFormik09">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={e=>{
                    handleChange(e);
                    setZip(e.target.value)
                }}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          
          </Row>
          
            <Button
            disabled={Loading}
              type="submit"
              variant=""
              onClick={handelClick}
              className="btn-more-2 mt-lg-5 mt-3">
              Change Now
            </Button>
            {Loading?<p className="mt-3">Waiting upload image </p>:null}
          <Row style={{ justifyContent: "center" }} className="mt-lg-5 mt-3">
            <Col lg={3} md={4} sm={6} xs={10}></Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}

export default ProfileUpdate;
