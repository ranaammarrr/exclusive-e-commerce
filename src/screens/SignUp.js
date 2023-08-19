import React from 'react';
import { Button, Card, Row, Col, Form } from 'react-bootstrap';
import { UserAuth } from "../context/AuthContext"
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import SideImage from '../assets/Side Image.png'
import { Typography } from '@mui/material';
import Input from '../components/Input';
import { signUpSchema } from '../schema/Schema';
import { useFormik } from 'formik';

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}



const SignUp = () => {

    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const usersCollectionRef = collection(db, "users");

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: async (values, action) => {
            try {
                await createUser(values.email, values.password)
                await addDoc(usersCollectionRef, {
                    name: values.name,
                    email: values.email,
                });

                navigate('/')
                action.resetForm();
            } catch (error) {
                console.log(error);
            }
        }
    });

    return (


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
                <Col md={8} lg={3} className='me-5' style={{ marginTop: "120px" }} >
                    <h2 className=' mb-2'>Create an account</h2>
                    <Typography sx={{ mb: 5 }} variant='subtitle1' component='h4' >Enter your details below</Typography>
                    <Form onSubmit={handleSubmit}>
                        <Input name='name' hr={<hr className='input-line mb-4' />} class={''} touch={touched.name} error={errors.name} value={values.name} label='Name' onChange={handleChange} onBlur={handleBlur} type='text' id='text' />
                        <Input name='email' hr={<hr className='input-line mb-4' />} class={''} touch={touched.email} error={errors.email} value={values.email} label='Email' onChange={handleChange} onBlur={handleBlur} type='text' id='text' />
                        <Input name='password' hr={<hr className='input-line mb-4' />} class={''} touch={touched.password} error={errors.password} value={values.password} label='Password' onChange={handleChange} onBlur={handleBlur} type='password' id='password' />
                        <Input name='confirmPassword' hr={<hr className='input-line mb-4' />} class={''} touch={touched.confirmPassword} error={errors.confirmPassword} value={values.confirmPassword} label='Confirm Password' onChange={handleChange} onBlur={handleBlur} type='password' id='confirmPassword' />


                        <Button className='w-100 mt-2' variant='danger' type='submit' >Create Account</Button>
                    </Form>
                    <Row>
                        <Col className='w-100 text-center mt-2'>
                            Already have an account?
                            <Link to='/login' style={{ textDecoration: 'none' }} > Login</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Card.Body>

    )
}

export default SignUp