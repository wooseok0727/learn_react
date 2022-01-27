import { connect } from 'react-redux'
import TodoForm from '../components/TodoForm'
import { addTodo } from '../redux/modules/todos'

const TodoFormContainer = connect(
  state => ({}),
  dispatch => ({
    add: text => dispatch(addTodo(text)),
  })
)(TodoForm)

export default TodoFormContainer
