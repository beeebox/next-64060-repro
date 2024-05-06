// 'use client'

import { Provider } from "./_components/Provider";
import { ClientComponent } from "./_components/registry";
import { default as ClientComponent2 } from "./_components/ClientComponent";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {/* Without provider it will work fine */}
      {/* <ClientComponent text={"Works fine without Provider"} /> */}

      {/* With provider it will flicker */}
      <Provider>
        <ClientComponent text={"Flickers with Provider"} />
      </Provider>

      {/* <Provider>
        <ClientComponent2
          text={"not flicks with Provider"}
        />
      </Provider> */}
    </div>
  );
}
