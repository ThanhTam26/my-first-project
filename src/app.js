import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div style={styles.container}>
      <h1>Simple Counter</h1>
      <p style={styles.counter}>{count}</p>
      <div>
        <button style={styles.button} onClick={handleDecrease}>-</button>
        <button style={styles.button} onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: 'Arial, sans-serif',
  },
  counter: {
    fontSize: '48px',
    margin: '20px 0',
  },
  button: {
    fontSize: '24px',
    padding: '10px 20px',
    margin: '0 10px',
    cursor: 'pointer',
  },
};

export default App;
