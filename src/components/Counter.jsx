import React from 'react'
import { useCounter } from '../hooks/useCounter'

function Counter(props) {
  var [cnt, inc, dec] = useCounter(props.inv, props.step);

  return (
    <div className="container mt-5">
      <div className="card text-center shadow p-3">
        <div className="card-body gap-3">
          <h2 className="card-title mb-4">
            Count: <span className="text-dark">{cnt}</span></h2>

          <button 
            className="btn btn-success me-3" style={{marginRight:"8px"}}onClick={inc}>Increment</button>

          <button 
            className="btn btn-danger"onClick={dec}>Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default Counter;
