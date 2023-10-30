import CoffeeCard from "./CoffeeCard"
import './CoffeeList.css'
export default function CoffeeList({coffees}){
    if(!coffees) return null 
        return (

            <main className='coffee-list'>
    {coffees.map (coffee => <CoffeeCard key={coffee.id}coffee={coffee}/>)}

            </main>


        )


}