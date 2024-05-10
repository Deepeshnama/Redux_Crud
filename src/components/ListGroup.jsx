import React, { useEffect } from 'react'
import ListItem from './ListItem'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from './features/todo/todoSlice'

const ListGroup = () => {

  const { allTodos , isLoading , isError } = useSelector((state) => state.todos)


  const dispatch = useDispatch()

  // setInterval(() => {
  //   dispatch(getTodos());
  // }, 10000);

  useEffect(() => {
    dispatch(getTodos())
  } , [])

  if(isError){
    return(
      <h1 className="text-center display-2 text-danger my-3">Something Went Wrong...</h1>
    )
  }

  if(isLoading){
    return(
      <h1 className="text-center display-2 text-warning my-3">Loading...</h1>
    )
  }

  if(allTodos.length === 0){
    return(
      <h1 className="text-center display-2 text-secondary my-3">No Todos Yet</h1>
    )
  }
  


  return (
    <ul className="list-group">
         {
          allTodos.map((todo) => <ListItem key = {todo._id}  todo = {todo} />)
         }
    </ul>
  )
}

export default ListGroup