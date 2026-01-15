import Todo from "./Todo";

export default function TodoList() {
    const data = [
        {
            text:"Laravel 12 REST Full API",
            isCompleted:true
        },
        {
            text:"React JS Dasar",
            isCompleted:false
        },
        {
            text:"React JS Consume API",
            isCompleted:false
        }
    ]

    const todos = data.map((todo) => {
        return <Todo {...todo} />
    })

    return (
        <ul>
            {todos}
        </ul>
    )
}