import React from 'react';
import { Button, Card, Form, Row, Col } from 'react-bootstrap';
import { UserAuth } from "../context/AuthContext"
import { NavLink, useNavigate } from 'react-router-dom';
import SideImage from '../assets/Side Image.png';
import { Typography } from '@mui/material';
import '../components.css'
import { useFormik } from 'formik';
import { logInSchema } from '../schema/Schema'
import Input from '../components/Input';

const initialValues = {
    email: "",
    password: ""
}

const Login = () => {


    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: logInSchema,
        onSubmit: async (values, action) => {
            try {
                await signIn(values.email, values.password);

                navigate('/');
                action.resetForm();
            } catch (error) {
                console.log(error);
            }
        }
    });





    return (
        <>

            <Card.Body style={{ marginTop: "120px", marginBottom: '150px' }}>
                <Row>
                    <Col>
                        <Card.Img
                            className=""
                            style={{
                                maxHeight: "800px",
                                maxWidth: "90%",

                            }}
                            variant="top"
                            src={SideImage}
                            alt="side image"
                        />
                    </Col>
                    <Col md={8} lg={3} className='me-5' style={{ marginTop: "140px" }} >
                        <h2 className=' mb-2'>Log in To Exclusive</h2>
                        <Typography sx={{ mb: 5 }} variant='body1' component='h6'>Enter your details below</Typography>
                        <Form onSubmit={handleSubmit}>
                            <Input name='email' hr={<hr className='input-line mb-4' />} class={``} touch={touched.email} error={errors.email} value={values.email} label='email' onChange={handleChange} onBlur={handleBlur} type='text' id='text' />
                            <Input name='password' hr={<hr className='input-line mb-4' />} class={``} touch={touched.password} error={errors.password} value={values.password} label='Password' onChange={handleChange} onBlur={handleBlur} type='password' id='password' />

                            <Row>
                                <Col>
                                    <Button className=' mt-3' variant='danger' type='submit'  >Log in</Button>
                                </Col>
                                <Col><Typography variant='body1' component='h5' className='mt-4 text-danger'>Forget Password?</Typography></Col>
                            </Row>
                        </Form>

                        <Row>
                            <Col className='w-100 text-center  mt-3'>
                                Don't have an account?
                                <NavLink to='/signup' style={{ textDecoration: 'none' }} > SignUp</NavLink>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Card.Body>
        </>
    )
}

export default Login