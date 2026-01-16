import Todo from "./Todo";

export default function TodoList() {
    const data = [
        {
            id: 0,
            text: "Learn Laravel REST Full API",
            isCompleted: true,
        },
        {
            id: 1,
            text: "Learn React JS with Javascript",
            isCompleted: false,
        },
        {
            id: 2,
            text: "Learn React JS with Typescript",
            isCompleted: false,
        },
    ];

    return (
        <ul>
            {data.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </ul>
    )
}
