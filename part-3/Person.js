function Person({name,age, hobbies}){
    let hobbiesList=hobbies.map(hobby =><li>{hobby}</li>);
   

    return (

        <div>
        <p> Learn some information about this person</p>
        <p> Name: {name}</p>
        <p> Age: {age}</p>
        <h3> {age >= 18 ? "Please go vote!" : "You must be 18"}</h3>
        <ul>
            {hobbiesList}
        </ul>

        </div>
    

    );

}