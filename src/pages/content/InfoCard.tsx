import React from 'react'
import classes from "./Content.module.css";

interface Props {
  onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
  info:string|number; 
  inscription:string, 
  type:string;
  id:string;
}

function InfoCard({info, inscription, type, onChange, id}:Props) {
  return (
    <div className={classes["info_card"]}>
    <input id={id} defaultValue={info} onChange={onChange} type={type} min={0} />
    <input value={inscription} style={{fontSize:'10px', color:'rgba(146, 146, 146, 1)'}} />
    </div>
  )
}

export default InfoCard
