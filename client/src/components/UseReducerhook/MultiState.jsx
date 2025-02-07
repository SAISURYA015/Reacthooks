import React, { useEffect, useReducer } from "react"

//  multiple states we can upadte at once
//  const [state, dispatch] = useReducer(function, initialState)


// types
const FETCH_INIT = "FETCH_INIT"
const FETCH_START = "FETCH_START"
const FETCH_ERROR = "FETCH_ERROR"

// inital state
const initialState = {
  loading: true,
  data: null,
  error: null,
}

const dataReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return {...state, loading: true, error: null}
    case FETCH_START:
      return {...state, loding: false, data: action.payload}
    case FETCH_ERROR: 
      return {...state, loading: false, error: action.payload}

    default:
      return state;
  }
}



const MultiState = () => {

  // datareducer = function
  const [state, dispatch] = useReducer(dataReducer, initialState)

  const dataHandler = async () => {
    try {
      dispatch({type: FETCH_INIT})
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const newData = await response.json()
      dispatch({type:FETCH_START, payload: newData})
      
    } catch (error) {
      dispatch({type:FETCH_ERROR})
    }
  }

  useEffect(() => {
    dataHandler()
  }, [])
  return (
    <div>
      {state.loading && <p>Loading...</p>}
      {state.data && 
        <div>
          {state.data.map((item, index) => {
            return (
              <div key={index}>
                <h2>{item.name}</h2>
              </div>
            )
          })}
        </div>
      }
      {state.error && <div>{alert(state.error)}</div>}
    </div>
  )
}

export default MultiState
