import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // state가 변경될 때 마다 재렌더링이 되며 console이 찍힘
  console.log('렌더링', count);

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const countRef = useRef(0);
  console.log(countRef);

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
  };

  return (
    <div>
      <p>State: {count}</p>
      <button onClick={increaseCountState}>State 증가</button>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountRef}>ref 증가</button>
      <button onClick={() => console.log(countRef)}>ref 확인</button>
    </div>
  );
}

export default App;
