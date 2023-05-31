import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
 const [loginFormData, setLoginFormData] = useState({email:"",password: ""})

 function handleSubmit(e) {
    e.preventDefault()
    console.log(loginFormData)
 }

 function handleChange(e) {
    const { name, value } = e.target
    setLoginFormData(prev => ({
        ...prev,
        [name]: value
    }))
 }

 return (
    <div>
        <h1>Sign in to your account</h1>
        <form>
            <input
                name="email"
                onChage={handleChange}
                type="email"
                placeholder='email address'
                value={loginFormData.email}
            />
            <input 
                type="email"
                onChange={handleChange}
                placeholder='password' 
                value={loginFormData.password}
            />
        </form>
    </div>
 )
}

export default Login