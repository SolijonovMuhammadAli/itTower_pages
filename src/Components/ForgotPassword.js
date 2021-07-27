import React, {useRef, useState} from 'react'
import {Form, Button, Card,Alert} from 'react-bootstrap'
import {Link} from 'react-router-dom' 

export default function ForgotPassword(){
    const emailRef = useRef()
    const [error, setError] = useState()
    const [loading,setLoading]= useState(false)
    const [message,setMessage] = useState('')

   async function handleSubmit(e){
        e.preventDefault()
        try {
            setMessage('')
            setError('')
            setLoading(true)
            setMessage("Check your inbox for further instrutions")
        } catch{
            setError('Failed to sign in')
        }
        setLoading(false)
        
    }
    return(
        <>
        <Card  style={{maxWidth: "400px", margin: "0 auto"}}>
            <Card.Body>
                <h2 className="text-center mb-4">Forgot Password</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Button disabled={loading}   className="w-100 mt-3" type="submit">Reset Password</Button>
                    <div className="w-100 text-center mt-3">
                        <Link to="/">Log In</Link>
                    </div>
                </Form>
            </Card.Body>
        </Card>
        </>
    )
}