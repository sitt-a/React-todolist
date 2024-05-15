import React from 'react'
import Herosection from '../components/Herosection'
import Pricing from '../components/Pricing'
import Service from '../components/service'

export default function Mainhome() {
  return (
    <div>
        <Herosection></Herosection>
       
        <Service></Service>
        <Pricing></Pricing>
    </div>
  )
}
