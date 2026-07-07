import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "./configs/wagmi";
import { querryClient } from "./configs/querryClient";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { router } from "./configs/router";
import { Suspense } from "react";
import PageLoader from "@/components/common/PageLoader";

function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={querryClient}>
        <Suspense fallback={<PageLoader />}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
