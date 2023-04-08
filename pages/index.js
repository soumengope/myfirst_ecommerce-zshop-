import Header from '../components/Header.js';
import style from '../styles/index.module.css';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link.js';

const Shop = ()=>{
    
    const [val,setVal] = useState(false);
    const [val1,setVal1] = useState(false);
    const [val2,setVal2] = useState(false);
    const [val3,setVal3] = useState(false);

    const [shoping,setShoping] = useState([]);
    const getshoping = async ()=>{
        await axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setShoping(res.data);
            //console.log(res.data)
        })
    }
    useEffect(()=>{
        getshoping();
    },[])

    //search
    const [search, setSearch] = useState("");
    //console.log(search)
    
    // add all checkbox value inside an array
    const [checked0, setChecked0] = useState(0);
    const [checked1, setChecked1] = useState(0);
    const [checked2, setChecked2] = useState(0);
    const [checked3, setChecked3] = useState(0);
    const [checked4, setChecked4] = useState(0);
    const [checked5, setChecked5] = useState(0);
    const [checked6, setChecked6] = useState(0);
    const [checked7, setChecked7] = useState(0);
    const [checked8, setChecked8] = useState(0);
    const [checked9, setChecked9] = useState(0);
    const [checked10, setChecked10] = useState(0);
    const [checked11, setChecked11] = useState(0);
    const [checked12, setChecked12] = useState(0);
    const [data, setData] = useState(0);

    var initialArray = [];
    const [theArray, setTheArray] = useState(initialArray);

    const allValues = ()=>{
        setTheArray("")
        if(checked9==true){
            setTheArray(oldArray => [...oldArray, "25"]);
        }
        if(checked10==true){
            setTheArray(oldArray => [...oldArray, "50"]);
        }
        if(checked11==true){
            setTheArray(oldArray => [...oldArray, "100"]);
        }
        if(checked12==true){
            setTheArray(oldArray => [...oldArray, "101"]);
        }
        if(data){
            setTheArray(oldArray => [...oldArray, data]);
        }
    }
    //console.log(theArray)

    return(
        <>
        <Header/>
        <div className={style.main}>
            <div className={style.sidebar}>
                <div className={style.colorsRating}>
                    <div className={style.colorText}>Colors </div>
                    <div className={style.colorRed}><input type="checkbox" onChange={()=>{setChecked0(!checked0)}}/>Red</div>
                    <div className={style.colorBlue}><input type="checkbox" onChange={()=>{setChecked1(!checked1)}}/>Blue</div>
                    <div className={style.colorGreen}><input type="checkbox" onChange={()=>{setChecked2(!checked2)}}/>Green</div>
                    <div className={style.colorBlack}><input type="checkbox" onChange={()=>{setChecked3(!checked3)}}/>Black</div>
                    <div className={style.colorWhite}><input type="checkbox" onChange={()=>{setChecked4(!checked4)}}/>White</div>
                </div>
                <div className={style.sizesRating}>
                    <div className={style.sizeText}>Sizes </div>
                    <div className={style.sizeS}><input type="checkbox" onChange={()=>{setChecked5(!checked5)}}/>S</div>
                    <div className={style.sizeM}><input type="checkbox" onChange={()=>{setChecked6(!checked6)}}/>M</div>
                    <div className={style.sizeL}><input type="checkbox" onChange={()=>{setChecked7(!checked7)}}/>L</div>
                    <div className={style.sizeXL}><input type="checkbox" onChange={()=>{setChecked8(!checked8)}}/>XL</div>
                </div>
                <div className={style.pricesRating}>
                    <div className={style.priceText}>Price Range</div>
                    <div className={style.price25}><input type="checkbox" onChange={()=>{setChecked9(!checked9)}}/>$0 to $25</div>
                    <div className={style.price50}><input type="checkbox" onChange={()=>{setChecked10(!checked10)}}/>$25 to $50</div>
                    <div className={style.price100}><input type="checkbox" onChange={()=>{setChecked11(!checked11)}}/>$50 to $100</div>
                    <div className={style.price100plus}><input type="checkbox" onChange={()=>{setChecked12(!checked12)}}/>$100 onwards</div>
                </div>
                <div className={style.slidecontainer}>
                    <div className={style.ratingText}>Rating</div>
                    <div className={style.ratingSlider}>
                    <input type="range" min="0" max="5" step="1" value={data} onChange={(e)=>{setData(e.target.value)}}/>
                    </div>
                    <div className={style.ratingLeftRightVal}>
                        <p className={style.Zero}>0</p>
                        <p calssName={style.one}>1</p>
                        <p calssName={style.two}>2</p>
                        <p calssName={style.three}>3</p>
                        <p calssName={style.four}>4</p>
                        <p calssName={style.five}>5</p>
                    </div>
                </div>
                <div className={style.filters}>
                    <button onClick={allValues} 
                    className={(val===true || val1===true || val2===true || val3===true)?style.fill_btnhide:style.fill_btn}>Apply Filter</button>
                </div>

            </div>


            <div className={style.main_contents}>
                <div className={(val===true || val1===true || val2===true || val3===true)?style.filter_shide:style.filter_search}>
                    <input type="text" className={style.srch_inp} onChange={(e)=>setSearch(e.target.value)} placeholder='search'></input>
                </div>
                <div className={style.menus}>
                    <div><button onClick={()=>{
                        setVal(true);
                        setVal1(true);
                        setVal2(true);
                        setVal3(true); 
                    }}
                    >All</button></div>
                    <div><button onClick={()=>{
                            setVal(true);
                            setVal1(false);
                            setVal2(false);
                            setVal3(false); 
                        }}
                        className={(val1===true)?style.menBtnback:style.menBtn}
                    >Mens</button></div>
                    <div><button
                    onClick={()=>{
                            setVal(false);
                            setVal1(true);
                            setVal2(false);
                            setVal3(false);
                        }}>Womens</button></div>
                    <div><button
                    onClick={()=>{
                            setVal(false);
                            setVal1(false);
                            setVal2(true);
                            setVal3(false);
                        }}>Jewelleries</button></div>
                    <div><button
                    onClick={()=>{
                            setVal(false);
                            setVal1(false);
                            setVal2(false);
                            setVal3(true);
                        }}>Electronics</button></div>
                </div>
                <div className={(val===true || val1===true || val2===true || val3===true)?style.searchfilter:style.searchfilter_hide}>
                    <button>
                    <a href='/'><Image src='/search.png' width="50px" height="50px"></Image></a>
                    </button></div>


                <div className={(val===true)?style.menshow:style.menhide}>
                <div className={style.headershopname}>Men's Cloathing</div>
                <div className={style.allapidata} >
                {
                   shoping.map((elem)=>{
                        if(elem.category=="men's clothing"){
                            return (
                                <div className={style.imageapi}>
                                    <div key={elem.id}>
                                        <img className={style.shopmainpic} src={`${elem.image}`} width="200px" height="300px"></img>
                                    </div>
                                    <div className={style.price_size}>
                                        <div className={style.price}>${elem.price}</div>
                                        <div className={style.size}>S,M,L,XL</div>
                                    </div>
                                    <div className={style.colors}>
                                        <div className={style.color_name}>Colors : </div>
                                        <div className={style.black}></div>
                                        <div className={style.blue}></div>
                                        <div className={style.green}></div>
                                        <div className={style.white}></div>
                                        <div className={style.red}></div>
                                        
                                    </div>
                                    <div className={style.ratings}>
                                        
                                        <div className={style.rating_name}>Rating : </div>
                                        {Array.from({ length:`${elem.rating.rate}`}, (_, i) => 
                                        <div className={style.star1}>
                                        <Image src="/star.png" width="20px" height="20px"></Image>
                                        </div>
                                        )}

                                    </div>
                                    <div className={style.addtocart}>
                                        <button className={style.addtocart_btn}>Add To Cart</button>
                                    </div>
                                </div>

                            )
                        }
                    })
                } 
                </div>
                </div>

                <div className={(val1===true)?style.womenshow:style.womenhide}>
                <div className={style.headershopname}>Women's Cloathing</div>
                <div className={style.allapidata} >
                {
                   shoping.map((elem)=>{
                    if(elem.category=="women's clothing"){
                    return (
                        <div className={style.imageapi}>
                            <div key={elem.id}>
                            <img className={style.shopmainpic} src={`${elem.image}`} width="200px" height="300px"></img>
                            </div>
                            <div className={style.price_size}>
                                <div className={style.price}>${elem.price}</div>
                                <div className={style.size}>S,M,L,XL</div>
                            </div>
                            <div className={style.colors}>
                                <div className={style.color_name}>Colors : </div>
                                <div className={style.black}></div>
                                <div className={style.blue}></div>
                                <div className={style.green}></div>
                                <div className={style.white}></div>
                                <div className={style.red}></div>
                            </div>
                            <div className={style.ratings}>
                                <div className={style.rating_name}>Rating : </div>
                                {Array.from({ length:`${elem.rating.rate}`}, (_, i) => 
                                <div className={style.star1}>
                                <Image src="/star.png" width="20px" height="20px"></Image>
                                </div>
                                )}
                            </div>
                            <div className={style.addtocart}>
                                <button className={style.addtocart_btn}>Add To Cart</button>
                            </div>
                        </div>

                        )
                    }
                    })
                } 
                </div>
                </div>
                <div className={(val2===true)?style.jewelleryshow:style.jewelleryhide}>
                <div className={style.headershopname}>Jewelleries</div>
                <div className={style.allapidata} >
                {
                   shoping.map((elem)=>{
                    if(elem.category=="jewelery"){
                    return (
                        <div className={style.imageapi}>
                        <div key={elem.id}>
                        <img className={style.shopmainpic} src={`${elem.image}`} width="200px" height="300px"></img>
                        </div>
                        <div className={style.price_size}>
                                <div className={style.price}>${elem.price}</div>
                                <div className={style.size}>S,M,L,XL</div>
                            </div>
                            <div className={style.colors}>
                                <div className={style.color_name}>Colors : </div>
                                <div className={style.black}></div>
                                <div className={style.blue}></div>
                                <div className={style.green}></div>
                                <div className={style.white}></div>
                                <div className={style.red}></div>
                            </div>
                            <div className={style.ratings}>
                                <div className={style.rating_name}>Rating : </div>
                                {Array.from({ length:`${elem.rating.rate}`}, (_, i) => 
                                <div className={style.star1}>
                                <Image src="/star.png" width="20px" height="20px"></Image>
                                </div>
                                )}
                            </div>
                            <div className={style.addtocart}>
                                <button className={style.addtocart_btn}>Add To Cart</button>
                            </div>
                        </div>

                        )
                    }
                    })
                } 
                </div>
                </div>
                
                <div className={(val3===true)?style.electronicshow:style.electronichide}>
                <div className={style.headershopname}>Electronics</div>
                <div className={style.allapidata} >
                {
                   shoping.map((elem)=>{
                    if(elem.category=="electronics"){
                    return (
                        <div className={style.imageapi}>
                        <div key={elem.id}>
                        <img className={style.shopmainpic} src={`${elem.image}`} width="200px" height="300px"></img>
                        </div>
                        <div className={style.price_size}>
                                <div className={style.price}>${elem.price}</div>
                                <div className={style.size}>S,M,L,XL</div>
                            </div>
                            <div className={style.colors}>
                                <div className={style.color_name}>Colors : </div>
                                <div className={style.black}></div>
                                <div className={style.blue}></div>
                                <div className={style.green}></div>
                                <div className={style.white}></div>
                                <div className={style.red}></div>
                            </div>
                            <div className={style.ratings}>
                                <div className={style.rating_name}>Rating : </div>
                                {Array.from({ length:`${elem.rating.rate}`}, (_, i) => 
                                <div className={style.star1}>
                                <Image src="/star.png" width="20px" height="20px"></Image>
                                </div>
                                )}
                            </div>
                            <div className={style.addtocart}>
                                <button className={style.addtocart_btn}>Add To Cart</button>
                            </div>
                        </div>

                        )
                    }
                    })
                } 
                </div>
                </div>



                <div className={(val===true || val2===true || val2===true || val3===true)?style.s_hide:style.s_show}>
                    <div className={style.headershopname}>Homepage</div>
                    <div className={style.allapidata} >
                    {
                        (theArray<=0)?
                        shoping.filter((elem)=>{
                            return search.toLowerCase()==''?elem:elem.category.toLowerCase().includes(search);
                        }).map((elem)=>{
                            return (
                                <div className={style.imageapi}>
                                    <div key={elem.id}>
                                    <img className={style.shopmainpic} src={`${elem.image}`} width="200px" height="300px"></img>
                                    </div>
                                    <div className={style.price_size}>
                                        <div className={style.price}>${elem.price}</div>
                                        <div className={style.size}>S,M,L,XL</div>
                                    </div>
                                    <div className={style.colors}>
                                        <div className={style.color_name}>Colors : </div>
                                        <div className={style.black}></div>
                                        <div className={style.blue}></div>
                                        <div className={style.green}></div>
                                        <div className={style.white}></div>
                                        <div className={style.red}></div>
                                    </div>
                                    <div className={style.ratings}>
                                        <div className={style.rating_name}>Rating : </div>
                                        {Array.from({ length:`${elem.rating.rate}`}, (_, i) => 
                                        <div className={style.star1}>
                                        <Image src="/star.png" width="20px" height="20px"></Image>
                                        </div>
                                        )}
                                    </div>
                                    <div className={style.addtocart}>
                                        <button className={style.addtocart_btn}>Add To Cart</button>
                                    </div>
                                </div>
                            
                            )
                        })
                        :
                        theArray.map((item)=>{
                            return(
                                    <>
                                    {
                                        shoping.map((elem)=>{
                                            if(item==25){
                                                if(elem.price>=0 && elem.price<=25){
                                                    return (
                                                        <div className={style.imageapi}>
                                                            <div key={elem.id}>
                                                            <img className={style.shopmainpic} src={`${elem.image}`} width="200px" height="300px"></img>
                                                            </div>
                                                            <div className={style.price_size}>
                                                                <div className={style.price}>${elem.price}</div>
                                                                <div className={style.size}>S,M,L,XL</div>
                                                            </div>
                                                            <div className={style.colors}>
                                                                <div className={style.color_name}>Colors : </div>
                                                                <div className={style.black}></div>
                                                                <div className={style.blue}></div>
                                                                <div className={style.green}></div>
                                                                <div className={style.white}></div>
                                                                <div className={style.red}></div>
                                                            </div>
                                                            <div className={style.ratings}>
                                                                <div className={style.rating_name}>Rating : </div>
                                                                {Array.from({ length:`${elem.rating.rate}`}, (_, i) => 
                                                                <div className={style.star1}>
                                                                <Image src="/star.png" width="20px" height="20px"></Image>
                                                                </div>
                                                                )}
                                                            </div>
                                                            <div className={style.addtocart}>
                                                                <button className={style.addtocart_btn}>Add To Cart</button>
                                                            </div>
                                                        </div>
                                                    
                                                    )
                                                }
                                                
                                            }
                                            if(item==50){
                                                if(elem.price>25 && elem.price<=50){
                                                    return (
                                                        <div className={style.imageapi}>
                                                            <div key={elem.id}>
                                                            <img className={style.shopmainpic} src={`${elem.image}`} width="200px" height="300px"></img>
                                                            </div>
                                                            <div className={style.price_size}>
                                                                <div className={style.price}>${elem.price}</div>
                                                                <div className={style.size}>S,M,L,XL</div>
                                                            </div>
                                                            <div className={style.colors}>
                                                                <div className={style.color_name}>Colors : </div>
                                                                <div className={style.black}></div>
                                                                <div className={style.blue}></div>
                                                                <div className={style.green}></div>
                                                                <div className={style.white}></div>
                                                                <div className={style.red}></div>
                                                            </div>
                                                            <div className={style.ratings}>
                                                                <div className={style.rating_name}>Rating : </div>
                                                                {Array.from({ length:`${elem.rating.rate}`}, (_, i) => 
                                                                <div className={style.star1}>
                                                                <Image src="/star.png" width="20px" height="20px"></Image>
                                                                </div>
                                                                )}
                                                            </div>
                                                            <div className={style.addtocart}>
                                                                <button className={style.addtocart_btn}>Add To Cart</button>
                                                            </div>
                                                        </div>
                                                    
                                                    )
                                                }
                                                
                                            }
                                            if(item==100){
                                                if(elem.price>50 && elem.price<=100){
                                                    return (
                                                        <div className={style.imageapi}>
                                                            <div key={elem.id}>
                                                            <img className={style.shopmainpic} src={`${elem.image}`} width="200px" height="300px"></img>
                                                            </div>
                                                            <div className={style.price_size}>
                                                                <div className={style.price}>${elem.price}</div>
                                                                <div className={style.size}>S,M,L,XL</div>
                                                            </div>
                                                            <div className={style.colors}>
                                                                <div className={style.color_name}>Colors : </div>
                                                                <div className={style.black}></div>
                                                                <div className={style.blue}></div>
                                                                <div className={style.green}></div>
                                                                <div className={style.white}></div>
                                                                <div className={style.red}></div>
                                                            </div>
                                                            <div className={style.ratings}>
                                                                <div className={style.rating_name}>Rating : </div>
                                                                {Array.from({ length:`${elem.rating.rate}`}, (_, i) => 
                                                                <div className={style.star1}>
                                                                <Image src="/star.png" width="20px" height="20px"></Image>
                                                                </div>
                                                                )}
                                                            </div>
                                                            <div className={style.addtocart}>
                                                                <button className={style.addtocart_btn}>Add To Cart</button>
                                                            </div>
                                                        </div>
                                                    
                                                    )
                                                } 
                                            }
                                            if(item==101){
                                                if(elem.price>100){
                                                    return (
                                                        <div className={style.imageapi}>
                                                            <div key={elem.id}>
                                                            <img className={style.shopmainpic} src={`${elem.image}`} width="200px" height="300px"></img>
                                                            </div>
                                                            <div className={style.price_size}>
                                                                <div className={style.price}>${elem.price}</div>
                                                                <div className={style.size}>S,M,L,XL</div>
                                                            </div>
                                                            <div className={style.colors}>
                                                                <div className={style.color_name}>Colors : </div>
                                                                <div className={style.black}></div>
                                                                <div className={style.blue}></div>
                                                                <div className={style.green}></div>
                                                                <div className={style.white}></div>
                                                                <div className={style.red}></div>
                                                            </div>
                                                            <div className={style.ratings}>
                                                                <div className={style.rating_name}>Rating : </div>
                                                                {Array.from({ length:`${elem.rating.rate}`}, (_, i) => 
                                                                <div className={style.star1}>
                                                                <Image src="/star.png" width="20px" height="20px"></Image>
                                                                </div>
                                                                )}
                                                            </div>
                                                            <div className={style.addtocart}>
                                                                <button className={style.addtocart_btn}>Add To Cart</button>
                                                            </div>
                                                        </div>
                                                    
                                                    )
                                                }
                                                
                                            }
                                            if(item==0){
                                                if(elem.rating.rate>0){
                                                    return (
                                                        <div className={style.imageapi}>
                                                            <div key={elem.id}>
                                                            <img className={style.shopmainpic} src={`${elem.image}`} width="200px" height="300px"></img>
                                                            </div>
                                                            <div className={style.price_size}>
                                                                <div className={style.price}>${elem.price}</div>
                                                                <div className={style.size}>S,M,L,XL</div>
                                                            </div>
                                                            <div className={style.colors}>
                                                                <div className={style.color_name}>Colors : </div>
                                                                <div className={style.black}></div>
                                                                <div className={style.blue}></div>
                                                                <div className={style.green}></div>
                                                                <div className={style.white}></div>
                                                                <div className={style.red}></div>
                                                            </div>
                                                            <div className={style.ratings}>
                                                                <div className={style.rating_name}>Rating : </div>
                                                                {Array.from({ length:`${elem.rating.rate}`}, (_, i) => 
                                                                <div className={style.star1}>
                                                                <Image src="/star.png" width="20px" height="20px"></Image>
                                                                </div>
                                                                )}
                                                            </div>
                                                            <div className={style.addtocart}>
                                                                <button className={style.addtocart_btn}>Add To Cart</button>
                                                            </div>
                                                        </div>
                                                    
                                                    )
                                                }
                                                
                                            }
                                            if(item==1){
                                                if(elem.rating.rate>1){
                                                    return (
                                                        <div className={style.imageapi}>
                                                            <div key={elem.id}>
                                                            <img className={style.shopmainpic} src={`${elem.image}`} width="200px" height="300px"></img>
                                                            </div>
                                                            <div className={style.price_size}>
                                                                <div className={style.price}>${elem.price}</div>
                                                                <div className={style.size}>S,M,L,XL</div>
                                                            </div>
                                                            <div className={style.colors}>
                                                                <div className={style.color_name}>Colors : </div>
                                                                <div className={style.black}></div>
                                                                <div className={style.blue}></div>
                                                                <div className={style.green}></div>
                                                                <div className={style.white}></div>
                                                                <div className={style.red}></div>
                                                            </div>
                                                            <div className={style.ratings}>
                                                                <div className={style.rating_name}>Rating : </div>
                                                                {Array.from({ length:`${elem.rating.rate}`}, (_, i) => 
                                                                <div className={style.star1}>
                                                                <Image src="/star.png" width="20px" height="20px"></Image>
                                                                </div>
                                                                )}
                                                            </div>
                                                            <div className={style.addtocart}>
                                                                <button className={style.addtocart_btn}>Add To Cart</button>
                                                            </div>
                                                        </div>
                                                    
                                                    )
                                                }
                                                
                                            }
                                            if(item==2){
                                                if(elem.rating.rate>2){
                                                    return (
                                                        <div className={style.imageapi}>
                                                            <div key={elem.id}>
                                                            <img className={style.shopmainpic} src={`${elem.image}`} width="200px" height="300px"></img>
                                                            </div>
                                                            <div className={style.price_size}>
                                                                <div className={style.price}>${elem.price}</div>
                                                                <div className={style.size}>S,M,L,XL</div>
                                                            </div>
                                                            <div className={style.colors}>
                                                                <div className={style.color_name}>Colors : </div>
                                                                <div className={style.black}></div>
                                                                <div className={style.blue}></div>
                                                                <div className={style.green}></div>
                                                                <div className={style.white}></div>
                                                                <div className={style.red}></div>
                                                            </div>
                                                            <div className={style.ratings}>
                                                                <div className={style.rating_name}>Rating : </div>
                                                                {Array.from({ length:`${elem.rating.rate}`}, (_, i) => 
                                                                <div className={style.star1}>
                                                                <Image src="/star.png" width="20px" height="20px"></Image>
                                                                </div>
                                                                )}
                                                            </div>
                                                            <div className={style.addtocart}>
                                                                <button className={style.addtocart_btn}>Add To Cart</button>
                                                            </div>
                                                        </div>
                                                    
                                                    )
                                                }
                                                
                                            }
                                            if(item==3){
                                                if(elem.rating.rate>3){
                                                    return (
                                                        <div className={style.imageapi}>
                                                            <div key={elem.id}>
                                                            <img className={style.shopmainpic} src={`${elem.image}`} width="200px" height="300px"></img>
                                                            </div>
                                                            <div className={style.price_size}>
                                                                <div className={style.price}>${elem.price}</div>
                                                                <div className={style.size}>S,M,L,XL</div>
                                                            </div>
                                                            <div className={style.colors}>
                                                                <div className={style.color_name}>Colors : </div>
                                                                <div className={style.black}></div>
                                                                <div className={style.blue}></div>
                                                                <div className={style.green}></div>
                                                                <div className={style.white}></div>
                                                                <div className={style.red}></div>
                                                            </div>
                                                            <div className={style.ratings}>
                                                                <div className={style.rating_name}>Rating : </div>
                                                                {Array.from({ length:`${elem.rating.rate}`}, (_, i) => 
                                                                <div className={style.star1}>
                                                                <Image src="/star.png" width="20px" height="20px"></Image>
                                                                </div>
                                                                )}
                                                            </div>
                                                            <div className={style.addtocart}>
                                                                <button className={style.addtocart_btn}>Add To Cart</button>
                                                            </div>
                                                        </div>
                                                    
                                                    )
                                                }
                                                
                                            }
                                            if(item==4){
                                                if(elem.rating.rate>4){
                                                    return (
                                                        <div className={style.imageapi}>
                                                            <div key={elem.id}>
                                                            <img className={style.shopmainpic} src={`${elem.image}`} width="200px" height="300px"></img>
                                                            </div>
                                                            <div className={style.price_size}>
                                                                <div className={style.price}>${elem.price}</div>
                                                                <div className={style.size}>S,M,L,XL</div>
                                                            </div>
                                                            <div className={style.colors}>
                                                                <div className={style.color_name}>Colors : </div>
                                                                <div className={style.black}></div>
                                                                <div className={style.blue}></div>
                                                                <div className={style.green}></div>
                                                                <div className={style.white}></div>
                                                                <div className={style.red}></div>
                                                            </div>
                                                            <div className={style.ratings}>
                                                                <div className={style.rating_name}>Rating : </div>
                                                                {Array.from({ length:`${elem.rating.rate}`}, (_, i) => 
                                                                <div className={style.star1}>
                                                                <Image src="/star.png" width="20px" height="20px"></Image>
                                                                </div>
                                                                )}
                                                            </div>
                                                            <div className={style.addtocart}>
                                                                <button className={style.addtocart_btn}>Add To Cart</button>
                                                            </div>
                                                        </div>
                                                    
                                                    )
                                                }
                                                
                                            }
                                            if(item==5){
                                                if(elem.rating.rate>4.5 && elem.rating.rate<=5){
                                                    return (
                                                        <div className={style.imageapi}>
                                                            <div key={elem.id}>
                                                            <img className={style.shopmainpic} src={`${elem.image}`} width="200px" height="300px"></img>
                                                            </div>
                                                            <div className={style.price_size}>
                                                                <div className={style.price}>${elem.price}</div>
                                                                <div className={style.size}>S,M,L,XL</div>
                                                            </div>
                                                            <div className={style.colors}>
                                                                <div className={style.color_name}>Colors : </div>
                                                                <div className={style.black}></div>
                                                                <div className={style.blue}></div>
                                                                <div className={style.green}></div>
                                                                <div className={style.white}></div>
                                                                <div className={style.red}></div>
                                                            </div>
                                                            <div className={style.ratings}>
                                                                <div className={style.rating_name}>Rating : </div>
                                                                {Array.from({ length:`${elem.rating.rate}`}, (_, i) => 
                                                                <div className={style.star1}>
                                                                <Image src="/star.png" width="20px" height="20px"></Image>
                                                                </div>
                                                                )}
                                                            </div>
                                                            <div className={style.addtocart}>
                                                                <button className={style.addtocart_btn}>Add To Cart</button>
                                                            </div>
                                                        </div>
                                                    
                                                    )
                                                }
                                                
                                            }
                                        })
                                    }
                                </>
                            )
                            
                        })
                    } 
                    </div>
                </div>



            </div>
        </div>
        
        </>
    )
}
export default Shop;
