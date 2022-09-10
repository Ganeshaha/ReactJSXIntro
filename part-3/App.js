function App(){

    return ([
        <Person name = "Joe" age = {18} hobbies = {["Running","Climbing", "Reading"]}/>,
        <Person name = "Amy" age = {12} hobbies = {["Crying", "Swimming", "Reading"]}/>,
        <Person name = "Bart" age = {18} hobbies = {["Sleeping", "Climbing", "Reading"]}/>
    ]
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));