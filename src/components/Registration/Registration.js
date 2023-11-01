import React from 'react'
import styles from './Registration.module.css'
import Button from '../Button/Button'

export default function Registration() {
  return (
    <div className={styles.registrationContainer}>
        <h2>Boost your links today</h2>
        <Button 
        text="Get started"
        borderRadiusType={999}
        />
    </div>
  )
}
