import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../TodoType'


type TodosProps = {
  todos: Todo[]
  toggleCompleted: (todoId: number) => void
}

const Todos = ({ todos, toggleCompleted }: TodosProps): JSX.Element => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
          />
        )
      })}
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '40%',
    margin: '0 auto',
  },
}

export default Todos