import Head from "next/head";

import Test from "../src/Test";

export default function Home() {
  return (
    <div>
      <div>This is test page</div>
      <div
        style={{
          width: 500,
          height: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Test />
      </div>
    </div>
  );
}
