import React, { useEffect, useState } from 'react';

export default function Clock() {
  const [date, setDate] = useState(new Date());
  const [timerID, setTimerID] = useState(null);

  useEffect(() => {
    setTimerID(setInterval(() => setDate(new Date()), 1000));
    return () => clearInterval(timerID);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()} on {date.toLocaleDateString()}</h2>
    </div>
  );
}