import React from 'react';
import styles from "@/styles/Footer.module.css"
import Image from 'next/image';
import usflag from "../public/newflag.jpg"
import gpay from '../public/gpay.png'
import card from '../public/cardlogo.png'
import paypal from '../public/paypal.png'
import amex from '../public/AMEX.png'
import apple from '../public/newapple.png'
import shoppay from '../public/SHOPPAY.png'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.upper}>
            <div className={styles.upperA}>
                <p style={{fontWeight:700, fontSize:'20px'}}>BE THE FIRST TO KNOW</p>
                <p style={{fontWeight:400,fontSize:'16px'}}>Sign up for updates from metta muse</p>
                <span><input type="email" placeholder='Enter your Email' /><button>SUBSCRIBE</button></span>
            </div>
            <div className={styles.upperB}>
                <p style={{fontSize:"20px",fontWeight:700}}>CONTACT US</p>
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
                <p style={{fontSize:"20px",fontWeight:700}}>CURRENCY</p>
                <p><Image src={usflag} alt='US flag' width={24} height={24} style={{borderRadius:'50%'}}></Image>.USD</p>
                <p style={{fontSize:'12px',fontWeight:400}}>transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
        </div>
        <br />
       <hr />
       <div className={styles.lower}>
          <div className={styles.lowerA} style={{display:'flex',flexDirection:'column',gap:'10px',fontSize:'15px'}}>
            <p style={{fontSize:'20px',fontWeight:700}}>metta muse</p>
            <a href="">About Us</a>
            <a href="">Stories</a>
            <a href="">Artisans</a>
            <a href="">Boutique</a>
            <a href="">Contact Us</a>
            <a href="">EU Compliance Docs</a>
          </div>
          
          <div className={styles.lowerB} style={{display:'flex',flexDirection:'column',gap:'10px',fontSize:'15px'}}>
            <p style={{fontSize:'20px',fontWeight:700}}>QUICK LINKS</p>
            <a href="">Orders & Shipping</a>
            <a href="">Join/Login as Seller</a>
            <a href="">Payment & Pricinng</a>
            <a href="">Return & Refunds</a>
            <a href="">FAQs</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
          </div>

          <div className={styles.lowerC} style={{display:'flex',flexDirection:'column',gap:'10px',fontSize:'15px'}}>
            <p style={{fontSize:'20px',fontWeight:700}}>FOLLOW US</p>
            <p><a href=""><FaInstagram/></a> <a href=""><FaLinkedin/></a> </p>
            <br />
            
            <p style={{fontSize:'20px',fontWeight:700}}>metta muse ACCEPTS</p>
            <span style={{display:'flex',gap:'10px'}}>
                <a href=""><Image src={gpay} alt='G-Pay' width={56} height={35} ></Image></a>
                <a href=""> <Image src={card} alt='Card-Pay' width={56} height={35}></Image></a>
                <a href=""><Image src={paypal} alt='Pay-Pal' width={56} height={35}></Image></a>
                <a href=""><Image src={amex} alt='AMEX' width={56} height={35}></Image></a>
                <a href=""><Image src={apple} alt='@-Pay' width={56} height={35}></Image></a>
                <a href=""><Image src={shoppay} alt='SHOP-Pay' width={56} height={35}></Image></a>
                
            </span>

          </div>
       </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <p style={{fontSize:'14px',color:'white'}}>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
