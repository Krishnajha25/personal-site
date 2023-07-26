"use client"

import React from 'react'
import Button from './components/Button'

const index = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <Button
                onClick={() => console.log("Button is clicked")}
            >
                &#128075; Hi There 
            </Button>
        </div>
  )
}

export default index