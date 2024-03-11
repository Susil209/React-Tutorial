import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step,setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <h1>Counter</h1>

      <div>
        <button onClick={() => setStep(step - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago today was`}
          </span>
          {date.toDateString()}
        </p>
      </div>
    </>
  );
}
