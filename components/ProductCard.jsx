import React from 'react'
import styles from '@/styles/ProductCard.module.css'
import Image from 'next/image'
import {CiHeart } from "react-icons/ci";

const ProductCard = ({product}) => {
  return (
    <div className={styles.card}>
        {/* <Image src={product.image} alt={product.title}></Image> */}
        <img src={product.image} alt={product.title} width={300} height={390}/>
        <div>
        <div style={{display:'flex',justifyContent:'space-around'}}><h2>{product.title.slice(0,20)}</h2> <CiHeart size={25} /></div>
        <p><a href="">Sign In</a> or <a href="">Create an Account</a> to see pricing</p>
        </div>



      
    </div>
  )
}

export default ProductCard
