import React, { useState, useRef, useLayoutEffect } from "react";

export const Quote = ({ author, quote }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
   // console.log(pRef.current.getBoundingClientRect()); // permite obtener datos del element tales como width, height, etc
    const { width, height } = pRef.current.getBoundingClientRect();

    setBoxSize({ width: width, height: height });
    return () => {};
  }, []);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">
          {author}
        </p>
        <footer className="blockquote-footer">{quote}</footer>
      </blockquote>

      <code> {JSON.stringify(boxSize)} </code>
    </>
  );
};
