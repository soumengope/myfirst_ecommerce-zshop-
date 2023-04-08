import Header from "../components/Header";
import style from "../styles/signup.module.css";
import Link from 'next/link';
const Login = ()=>{
    return(
        <>
            <Header/>
            <div className={style.signup_header}>Signup</div>
            <div className={style.main_signupform}>
                <form method="POST">
                    <input type="text" className={style.fname} placeholder="First Name"
                    value="unknown"></input>
                    <br></br><br></br><br></br>
                    <input type="text" className={style.lname} placeholder="Last Name"
                    value="unknown"></input>
                    <br></br><br></br><br></br>
                    <input type="text" className={style.email} placeholder="Email"
                    value="abc@gmail.com"></input>
                    <br></br><br></br><br></br>
                    <input type="password" className={style.pass} placeholder="Password"
                    value="12345678"></input>
                    <br></br><br></br><br></br><br></br>
                    <input type="password" className={style.cpass} placeholder="Confirm Password"
                    value="12345678"></input>
                    <br></br><br></br><br></br><br></br>
                    <button name="submit" className={style.submit}><Link href="/login"><a href="">Signup</a></Link></button>
                </form>
            </div>
        </>
    )
}
export default Login;