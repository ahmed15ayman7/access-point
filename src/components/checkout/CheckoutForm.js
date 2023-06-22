import { Row, InputGroup, Form, Button, Col } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { ErrorPlay, WaterPlay } from "../../assets/audios/SoundPlay";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCart } from "../../redux/types/deleteType";
import { OrderNow } from "../../redux/Firebase/AddDetails";

function CheckoutForm() {
  let data = useSelector((e) => e.reducerCartQuantity.productsCart);
  let user = useSelector((e) => e.userDetails.details);
  let dispatch = useDispatch();
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    address: yup.string().required(),
    address2: yup.string().required(),
  });
  let bool;
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "",
        lastName: "",
        phone: "",
        city: "",
        state: "",
        zip: "",
        address: "",
        address2: "",
      }}>
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              className=""
              controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Phone</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">📞</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="phone"
                  aria-describedby="inputGroupPrepend"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              className="mb-3"
              controlId="validationFormik06">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                aria-describedby="inputGroupPrepend"
                name="address"
                value={values.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
                placeholder="1234 Main St"
              />
            </Form.Group>

            <Form.Group
              as={Col}
              md="6"
              className="mb-3"
              controlId="validationFormik07">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                type="text"
                aria-describedby="inputGroupPrepend"
                name="address2"
                value={values.address2}
                onChange={handleChange}
                isInvalid={!!errors.address2}
                placeholder="Apartment, studio, or floor"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          {
            (bool =
              values.address !== "" &&
              values.address2 !== "" &&
              values.city !== "" &&
              values.firstName !== "" &&
              values.lastName !== "" &&
              values.phone !== "" &&
              values.state !== "" &&
              values.zip !== ""
                ? true
                : false)
          }
          <Link to={bool ? "/" : null}>
            <Button
              type="submit"
              variant=""
              onClick={() => {
                OrderNow(user[0], data);
                Object.keys(errors).length === 0 && bool === true
                  ? WaterPlay()
                  : ErrorPlay();
                dispatch({ type: deleteAllCart });
              }}
              className="btn-more-2 mt-lg-5 mt-3">
              Order Now
            </Button>
          </Link>
          <Row style={{ justifyContent: "center" }} className="mt-lg-5 mt-3">
            <Col lg={3} md={4} sm={6} xs={10}></Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}

export default CheckoutForm;
