import React from "react";
import Counter from "./components/Counter";
import Todolist from "./components/Todolist";

function App() {
  return (
    <div
      className="d-flex justify-content-center mt-4"
      style={{ backgroundColor: "#f3eaff", minHeight: "100vh" }}
    >
      <div
        className="container p-5 shadow-sm"
        style={{
          border: "2px solid #d6c8ff",
          borderRadius: "16px",
          backgroundColor: "#ffffff",
        }}
      >
        <marquee>
          <h1
            className="text-center"
            style={{
              marginTop: "20px",
              marginBottom: "30px",
              color: "#322461ff",
              fontWeight: "700",
            }}
          >
            Counter Component
          </h1>
        </marquee>

        <div className="row justify-content-center">
          <div className="col-md-5 mb-4">
            <Counter inv={5} step={10} />
          </div>

          <div className="col-md-5 mb-4">
            <Counter inv={10} step={20} />
          </div>
        </div>

       
        <div className="mt-5">
          <marquee>
            <h1
              className="text-center"
              style={{
                marginBottom: "20px",
                color: "#1a0f3eff",
                fontWeight: "700",
                marginTop:"350px"
              }}
            >
              TodoList Component
            </h1>
          </marquee>

          <Todolist />
        </div>
      </div>
    </div>
  );
}

export default App;
