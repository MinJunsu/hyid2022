import "../styles/globals.css";
import type { AppProps } from "next/app";

import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const [client] = useState(() => new QueryClient());
  return (
    <div className="font-Montserrat">
      <QueryClientProvider client={client}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;
