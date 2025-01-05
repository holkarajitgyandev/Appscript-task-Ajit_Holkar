import React from 'react'
import styles from '@/styles/ProductCard.module.css'
import Image from 'next/image'

const ProductCard = ({product}) => {
  return (
    <div className={styles.card}>
        {/* <Image src={product.image} alt={product.title}></Image> */}
        <img src={product.image} alt={product.title} width={300} height={390}/>
        <div>
        <h2>{product.title.slice(0,20)}</h2>
        <p><a href="">Sign In</a> or <a href="">Create an Account</a> to see pricing</p>
        </div>



      
    </div>
  )
}

export default ProductCard
