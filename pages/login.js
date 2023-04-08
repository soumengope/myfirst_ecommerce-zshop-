import Header from "../components/Header";
import style from "../styles/login.module.css";
import Link from 'next/link';
const Login = ()=>{
    return(
        <>
            <Header/>
            <div className={style.login_header}>Login</div>
            <div className={style.main_loginform}>
                <form method="POST">
                    <input type="text" className={style.email} placeholder="Email" value="abc@gmail.com"></input>
                    <br></br><br></br><br></br>
                    <input type="password" className={style.pass} placeholder="password" value="12345678"></input>
                    <br></br><br></br><br></br><br></br>
                    <button name="submit" className={style.submit}
                    ><Link href="/"><a href="">Login</a></Link></button>
                </form>
            </div>
        </>
    )
}
export default Login;