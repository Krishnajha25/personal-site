"use client"

import React, { useRef } from 'react'
import Button from './components/Button'
import { motion } from 'framer-motion'

const index = () => {
    const constraintsRef = useRef(null)

    return (
        <motion.div ref={constraintsRef} className='w-screen h-screen flex justify-center items-center'>
            <motion.div
                drag
                whileHover={{ scale: 1.1 }}
                whileTap={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                dragConstraints={constraintsRef}
            >
                <Button
                    onClick={() => console.log("Button is clicked")}
                >
                    &#128075; Hi There!
                </Button>
            </motion.div>
        </motion.div>
    )
}

export default index