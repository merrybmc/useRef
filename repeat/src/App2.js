import React, { useEffect, useRef } from 'react';

export default function App2() {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type='text' placeholder='username' />
      <button>로그인</button>
    </div>
  );
}
