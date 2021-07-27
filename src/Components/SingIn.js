import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom' 

export default function Signup(){
    const usernameRef = useRef()
    const passwordRef = useRef()
    const emailRef = useRef()
    const [error, setError] = useState()
    const [loading,setLoading]= useState(false)
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            if(usernameRef.current.value ==="Muhammadali" && 
                passwordRef.current.value==="123456789" && 
                emailRef.current.value ==="ItTower@gmail.com"){
            history.push('/dashboard')
            }
            else {
                setError('Failed to sign in')   
            }
        } catch{
            setError('Failed to sign in')
        }
        setLoading(false)
        
    }
    return(
        <>
        <Card  style={{maxWidth: "400px", margin: "0 auto"}}>
            <Card.Body>
                <h2 className="text-center mb-4">Sign In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="text">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" ref={usernameRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Button disabled={loading}   className="w-100 mt-3" type="submit">Sign In</Button>
                </Form>
                <div className="w-100 text-center mt-3">
                    <Link to="/forgot-password">Forgot Password</Link>
                </div> 
            </Card.Body>
        </Card>
        </>
    )
}