
import React from 'react'
import Counter from './components/Counter'
import Todolist from './components/Todolist';

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-4 ">
      <div className="border border-2 border-secondary container p-5">
        <h1 className="text-center fw-bold mb-4 text-dark">
          Counter Component
        </h1>

        <div className="row justify-content-center">
          <div className="col-md-5 mb-4">
            <Counter inv={5} step={10} />
          </div>

          <div className="col-md-5 mb-4">
            <Counter inv={10} step={20} />
          </div>
          <div>
            <Todolist></Todolist>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

