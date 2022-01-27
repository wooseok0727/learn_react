export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={index}>{todo.text}</li>
      })}
    </ul>
  )
}
