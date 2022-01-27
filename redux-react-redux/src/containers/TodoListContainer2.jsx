import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps = state => ({ todos: state.todos })
const mapDispatchToProps = dispatch => ({})

const TodoListContainer = connect(
  // config
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
