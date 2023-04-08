import style from '../styles/shop1.module.css'
import Image from 'next/image';
import Header from "../components/Header.js";
const Index = ()=>{
    return(
        <>
        <Header/>

        <div className={style.zshop_logo}>ZShop</div>

        <div className={style.content_write}>My First Shop built on HTML,CSS AND Next.JS</div>

        <div className={style.logsign}>
            <div className={style.login_btn}><button>Login</button></div>
            <div className={style.signup_btn}><button>Signup</button></div>
        </div>

        <div className={style.mainCenterDiv}>
            <div className={style.leftImg}>
                <Image src="/image_home.png" width="340" height="453"></Image>
                <div className={style.price_size}>
                    <div className={style.price}>$100</div>
                    <div className={style.size}>S,M,L</div>
                </div>
                <div className={style.colors}>
                    <div className={style.color_name}>Colors : </div>
                    <div className={style.black}></div>
                    <div className={style.blue}></div>
                    <div className={style.green}></div>
                </div>
                <div className={style.ratings}>
                    <div className={style.rating_name}>Rating : </div>
                    <div className={style.star1}>
                        <Image src="/star.png" width="20px" height="20px"></Image>
                    </div>
                    <div className={style.star1}>
                        <Image src="/star.png" width="20px" height="20px"></Image>
                    </div>
                    <div className={style.star1}>
                        <Image src="/star.png" width="20px" height="20px"></Image>
                    </div>
                </div>
                <div className={style.addtocart}>
                    <button className={style.addtocart_btn}>Add To Cart</button>
                </div>

            </div>
            <div className={style.center_img}>
            <Image src="/undraw_webshop.png" width="1007" height="711"></Image>
            </div>
        </div>

        </>
    )
}
export default Index;