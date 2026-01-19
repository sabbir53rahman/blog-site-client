"use client";

import { useEffect } from "react";

export default function AboutError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // we can pass this error to a logger
    console.log(error);
  }, []);

  return (
    <div>
      <h1>Error</h1>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
