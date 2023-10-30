    import { useEffect } from 'react'
    import './addCoffee.css'

    export default function AddCoffee({setCoffees}) {

        const getCoffees = () => {
            fetch('https://first-deployed-api-c12.web.app/coffees')
            .then(res => res.json())
            .then(data => setCoffees(data))
            .catch(alert)

        }

        useEffect (() => {
                getCoffees()
        }, []) //ONE TIME AFTER THE COMPONENTS MOUNTS GET THE COFFEE

        const handleSubmit = (e)=>{

            e.preventDefault()
            //gather form data
            //e.target is the form
            //e.target is the input name
            //e.target.name.value is the va;lue of of the input name
            const name = e.target.name.value 
            const recipe = e.target.recipe.value 
            const description = e.target.description.value


            const newCoffee = {name, recipe, description}
            //console.log(newCoffee)
            //post newCopffee object to the API
            fetch('https://first-deployed-api-c12.web.app/coffees',{
            method:'POST',
            headers: {
                "Content-type": 'application/json',

            },
            body: JSON.stringify(newCoffee),

            })
            .then(res => res.json())
           
            .then(data => {
                if(data.message === "Success")

                e.target.description.value =''
                e.target.name.value = ''
                e.target.recipe.value = ''

                getCoffees()
              } )
            

            .catch(alert)
        }
return (

    <section className="coffee-form">

        <h2>Add a Coffee</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:
                <input type='text' name="name"/>

            </label>
            <label htmlFor="recipe">
                Recipe:
                <input type='text' name="recipe"/>

            </label>
            
            <label htmlFor="description">
            Description:
                <input type='text' name="description"/>

            </label>

            <input type ="submit" value="ADD" className="add-btn"/>

            </form>

    </section>

)


    }