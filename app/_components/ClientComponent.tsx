"use client";

import { Suspense } from "react";
import { RSComponent } from "./registry"

// "./registry";
// import { lazy } from "react";
// const RSComponent = lazy(() => import("./RSComponent"));

const ClientComponent = ({ text }) => {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        width: "200px",
        height: "200px",
        padding: "10px",
      }}
    >
      <h6>Client Component</h6>
        <RSComponent text={text} />
      {/* <Suspense fallback={'loading'}>

      </Suspense> */}
    </div>
  );
};

export default ClientComponent;
