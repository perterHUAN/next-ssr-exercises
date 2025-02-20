"use client";
import React from "react";
import format from "date-fns/format";
import Spinner from "../../../components/Spinner";

function Clock() {
  // null, state we don't get real time.
  // we will get real time after first render.
  const [time, setTime] = React.useState(null);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 50);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="clock">
      {time !== null ? format(time, "hh:mm:ss.S a") : <Spinner />}
    </p>
  );
}

export default Clock;
