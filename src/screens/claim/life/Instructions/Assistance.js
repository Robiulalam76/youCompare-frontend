import React from 'react';
import DisplayCard from './DisplayCard';
import styles from './styles.module.css'
import { IoMdCall } from 'react-icons/io'

const Assistance = (props) => {
  return (
    <DisplayCard>
      <p className={styles.label}>Got questions regarding insurance claim?</p>
      <p className={styles.checklistText}>Our claim assistance experts are available.</p>
      <div className={styles.faq}>
        <p className={styles.checklistText}>For queries related to Travel, Auto, Health insurance claim</p>
        <div style={{ display: 'flex', alignItems: "center"}}>
          <IoMdCall style={{ fontSize: "24px" , marginRight: "8px" }} />
          <h2 className={styles.title}>Call at +880 XXX XXXX</h2>
        </div>
      </div>
      {props.children}
    </DisplayCard>
  )
}

export default Assistance;