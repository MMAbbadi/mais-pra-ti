function Todo(props){
    return (
        <>
            <div>
                <h1>{props.title}</h1>
                <div>
                    <button>Delete</button>
                    <button>Complete</button>
                </div>
            </div>
        </>
    )
}

export default Todo
