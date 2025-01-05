import React from 'react'
import styles from "@/styles/sideBar.module.css"
import { FaAngleDown } from "react-icons/fa";

const SideBar = () => {

    const handleclick=()=>{
         let pattern=document.getElementById('ideal for');
         if(pattern.style.display==='none'){
            pattern.style.display='flex'
         }else{
            pattern.style.display='none'
         }

    }
    const handleoccasion=()=>{
        let pattern=document.getElementById('occassion');
        if(pattern.style.display==='none'){
           pattern.style.display='flex'
        }else{
           pattern.style.display='none'
        }

   }
   const handlework=()=>{
    let pattern=document.getElementById('work');
    if(pattern.style.display==='none'){
       pattern.style.display='flex'
    }else{
       pattern.style.display='none'
    }

}
const handlefabric=()=>{
    let pattern=document.getElementById('fabric');
    if(pattern.style.display==='none'){
       pattern.style.display='flex'
    }else{
       pattern.style.display='none'
    }

}
const handlesegment=()=>{
    let pattern=document.getElementById('segment');
    if(pattern.style.display==='none'){
       pattern.style.display='flex'
    }else{
       pattern.style.display='none'
    }

}
const handlesuitable=()=>{
    let pattern=document.getElementById('suitable');
    if(pattern.style.display==='none'){
       pattern.style.display='flex'
    }else{
       pattern.style.display='none'
    }

}
const handleraw=()=>{
    let pattern=document.getElementById('raw');
    if(pattern.style.display==='none'){
       pattern.style.display='flex'
    }else{
       pattern.style.display='none'
    }

}
const handlepatt=()=>{
    let pattern=document.getElementById('patt');
    if(pattern.style.display==='none'){
       pattern.style.display='flex'
    }else{
       pattern.style.display='none'
    }

}
  return (
    <div className={styles.sidebar}>
      <div>
        <input type="checkbox" />CUSTOMIZABLE
      </div>
      <br />
      <hr />
      <div className={styles.sidebardiv}>
        <button className={styles.custombtn}>IDEAL FOR</button>
        <FaAngleDown onClick={handleclick}/>
      </div>
      <p>All</p>
      <div>
        <br /><br />
        <div className={styles.suboption} id='ideal for'>
        <p>Unselect all</p>
        <span><input type="checkbox" /><label htmlFor="men">Men</label></span>
        <span><input type="checkbox" /><label htmlFor="women">Women</label></span>
        <span><input type="checkbox" /><label htmlFor="kids">Baby & Kids</label></span>
        </div> 
      </div>
         <hr />
      <div className={styles.sidebardiv}>
        <button className={styles.custombtn}>OCCASION</button>
        <FaAngleDown onClick={handleoccasion}/>
      </div>
      <p>All</p>
      <div>
        <br /><br />
        <div className={styles.suboption} id='occassion'>
        <p>Unselect all</p>
        <span><input type="checkbox" /><label htmlFor="festival">Festival</label></span>
        <span><input type="checkbox" /><label htmlFor="wedding">Wedding</label></span>
        <span><input type="checkbox" /><label htmlFor="meeting">Meeting</label></span>
        </div>
      </div>
         <hr />
      <div className={styles.sidebardiv}>
        <button className={styles.custombtn}>WORK</button>
        <FaAngleDown onClick={handlework}/>
      </div>
      <p>All</p>
      <div>
        <br /><br />
        <div className={styles.suboption} id='work'>
        <p>Unselect all</p>
        <span><input type="checkbox" /><label htmlFor="office">Office</label></span>
        <span><input type="checkbox" /><label htmlFor="home">Home</label></span>
        <span><input type="checkbox" /><label htmlFor="out">Out</label></span>
        </div>

        
      </div>
            <hr />
      <div className={styles.sidebardiv}>
        <button className={styles.custombtn}>FABRIC</button>
        <FaAngleDown onClick={handlefabric}/>
      </div>
      <p>All</p>
      <div>
        <br /><br />
        <div className={styles.suboption} id='fabric'>
        <p>Unselect all</p>
        <span><input type="checkbox" /><label htmlFor="cotton">Cotten</label></span>
        <span><input type="checkbox" /><label htmlFor="polyster">Polyster</label></span>
        <span><input type="checkbox" /><label htmlFor="combination">Combed</label></span>
        </div>

        
      </div>
         <hr />
      <div className={styles.sidebardiv}>
        <button className={styles.custombtn}>SEGMENT</button>
        <FaAngleDown onClick={handlesegment} />
      </div>
      <p>All</p>
      <div>
        <br /><br />
        <div className={styles.suboption} id='segment'>
        <p>Unselect all</p>
        <span><input type="checkbox" /><label htmlFor="large">Large</label></span>
        <span><input type="checkbox" /><label htmlFor="medium">Medium</label></span>
        <span><input type="checkbox" /><label htmlFor="small">Small</label></span>
        </div>

        
      </div>
         <hr />
      <div className={styles.sidebardiv}>
        <button className={styles.custombtn}>SUITABLE FOR</button>
        <FaAngleDown onClick={handlesuitable} />
      </div>
      <p>All</p>
      <div>
        <br /><br />
        <div className={styles.suboption} id='suitable'>
        <p>Unselect all</p>
        <span><input type="checkbox" /><label htmlFor="men">Men</label></span>
        <span><input type="checkbox" /><label htmlFor="women">Women</label></span>
        <span><input type="checkbox" /><label htmlFor="kids">Baby & Kids</label></span>
        </div>

        
      </div>
         <hr />
      <div className={styles.sidebardiv}>
        <button className={styles.custombtn}>RAW MATERIALS</button>
        <FaAngleDown  onClick={handleraw}/>
      </div>
      <p>All</p>
      <div>
        <br /><br />
        <div className={styles.suboption} id='raw'>
        <p>Unselect all</p>
        <span><input type="checkbox" /><label htmlFor="men">Men</label></span>
        <span><input type="checkbox" /><label htmlFor="women">Women</label></span>
        <span><input type="checkbox" /><label htmlFor="kids">Baby & Kids</label></span>
        </div>

        
      </div>
           <hr />
      <div className={styles.sidebardiv}>
        <button className={styles.custombtn}>PATTERN</button>
        <FaAngleDown onClick={handlepatt}/>
      </div>
      <p>All</p>
      <div>
        <br /><br />
        <div className={styles.suboption} id='patt'>
        <p>Unselect all</p>
        <span><input type="checkbox" /><label htmlFor="checks">checks</label></span>
        <span><input type="checkbox" /><label htmlFor="striped">Striped</label></span>
        <span><input type="checkbox" /><label htmlFor="line">Lined</label></span>
        </div>

        
      </div>

      

    </div>
  )
}

export default SideBar
