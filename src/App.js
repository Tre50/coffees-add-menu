import { useState } from 'react';
import CoffeeList from './components/CoffeeList';
import './App.css';
import AddCoffee from './components/addCoffee'
import Hero from './components/hero'
export default function App (){
  const [coffees,setCoffee] = useState()

  return (
    <>
    <Hero />
    <AddCoffee setCoffees= {setCoffee} />
    <CoffeeList coffee= {coffees}/>
    </>
  )
}


