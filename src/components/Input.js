import React from 'react'
import { Form } from 'react-bootstrap'
import '../components.css'
import { Typography } from '@mui/material'

const Input = (props) => {
    return (
        <>
            <Form.Group className="mb-2" controlId={props.id}>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control className={props.class} name={props.name} value={props.value} onBlur={props.onBlur} onChange={props.onChange} type={props.type} />
                {props.hr}
                {props.error && props.touch ? (<Typography className='text-danger' variant='subtitle'   >{props.error}</Typography>) : null}
            </Form.Group>


        </>
    )
}

export default Input