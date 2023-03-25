import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDecrement = (id) => {
    const minusValue = counters.map((c) => {
      if (c.id === id) {
        const newValue = c.value > 0 ? c.value - 1 : 0;
        return { ...c, value: newValue };
      }
      return c;
    });
    setCounters(minusValue);
  };

  const handleIncrement = (id) => {
    const plusValue = counters.map((c) =>
      c.id === id ? { ...c, value: c.value + 1 } : c
    );
    setCounters(plusValue);
  };

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default CountersList;

// fix this code above
