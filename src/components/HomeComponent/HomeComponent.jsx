import { useState } from "react";

export const HomeComponent = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount((count) => count + 1);
  return (
    <>
      <p className="read-the-docs">Click on the Button</p>
      <button onClick={handleCount}>Click number: {count}</button>
    </>
  );
};
