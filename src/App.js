import React, { useState } from "react";
import List from "./components/List";
import data from "./helper/data";

function App() {
let dataLen=data.length
console.log(dataLen);
  const [number, setNumber] = useState(5);

  const handlePrev = () => {
   number >6 && setNumber(number-5)
   number ===5 && setNumber(dataLen)
  };
  const handleNext = () => {
    number<dataLen && setNumber(number+5)
    number===dataLen && setNumber(5)
  };

  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {number - 4} to {number})
        </h5>

        {data.slice(number-4, number).map((person, i) => (
          <List key={i} {...person} />
        ))}

        <div className="btns">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
