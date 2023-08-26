import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);



        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(inpval);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email address', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {
            console.log(inpval, 'sex')
            axios.post("http://localhost:5000/api/auth/login", {
                email: inpval.email,
                password: inpval.password
            }).then(res => {
                if (res.data.message) {
                    return toast.error(res.data.message, { position: 'top-center' })
                }
                localStorage.setItem("token", res.data.token);
                setTimeout(() => {
                    window.open("/land", "_blank");
                }, 2000);
                return toast.success("Login sucessfull!", { position: 'top-center' });
            })
            // if (getuserArr && getuserArr.length) {
            //     const userdata = JSON.parse(getuserArr);
            //     const userlogin = userdata.filter((el, k) => {
            //         return el.email === email && el.password === password
            //     });

            //     if (userlogin.length === 0) {
            //         alert("invalid details")
            //     } else {
            //         console.log("user login succesfully");

            //         {
            //             console.log("data added succesfully");
            //             axios.post("http://localhost:5000/api/auth/login",{
            //                 email: inpval.email,
            //                 password: inpval.password
            //         }).then(res=>{console.log(res.data)})
            //         }

            //         // localStorage.setItem("user_login", JSON.stringify(userlogin))



            //         // history("/land")
            //         window.open(
            //             "/land", "_blank");
            //     }
            // }
        }

    }

    return (
        <>
        <nav>
        <img class="logo" src="asset/images/cl_logo.png" alt="LetsChat" />
        <h1 >Welcome to Cloudstrats Chatapp</h1>
    </nav>
            <div className="container mt-3" style={{ height: "80%" }}>
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "80%" }}>
                        <h3 className='text-center col-lg-6'>  Sign IN</h3>
                        <Form >

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Register Here <a href='/'>SignUp</a> </p>
                    </div>
                    <SIgn_img />
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login