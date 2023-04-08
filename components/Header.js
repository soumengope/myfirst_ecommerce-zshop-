import hstyle from "../styles/header.module.css"
import Link from 'next/link';
const header = ()=>{
    return(<>
        <div className={hstyle.header}>
            <div className={hstyle.header_left} align="left">ZShop
            <p className={hstyle.no_responsive}>not responsive for mobile</p>
            </div>
            
            <div className={hstyle.header_right}>
                <div className={hstyle.header_home}><Link href="/"><a href="">Home</a></Link></div>
                <div className={hstyle.header_login}><Link href="/login"><a>Login</a></Link></div>
                <div className={hstyle.header_signup}><Link href="/signup"><a>Signup</a></Link></div>
                <div className={hstyle.mycart}><Link href="/mycart"><a>My Cart</a></Link></div>
            </div>
        </div>
    </>
    )
    }
    export default header;