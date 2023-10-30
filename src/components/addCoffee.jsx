
    import './addCoffee.css'

    export default function AddCoffee(){

        const handleSubmit = (e)=>{

            e.preventDefault()
            //gather form data
            //e.target is the form
            //e.target is the input name
            //e.target.name.value is the va;lue of of the input name
            const name = e.target.name.value 
            const recipe = e.target.recipe.value 
            const description = e.target.description.value

            const newCoffee = {name, recipe,description}
            //console.log(newCoffee)
            //post newCopffee object to the API
            fetch('https://first-deployed-api-c12.web.app/coffee',{
            method:'POST',
            headers: {
                "Content-type": 'applicatrion/json',

            },
            body: JSON.stringify(newCoffee),

            })
            .then(res => res.JSON())
            .then(message => console.log(message))

            .catch(alert)
        }
return (

    <section className="coffee-form">

        <h2>Add a Coffee</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                name:
                <input type='text' name="Name"/>

            </label>
            <label htmlFor="recipe">
                
                <input type='text' name="Recipe"/>

            </label>
            
            <label htmlFor="description">
                name:
                <input type='text' name="Description"/>

            </label>

            <input type ="submit" value="ADD" className="add-btn"/>

            </form>

    </section>

)


}