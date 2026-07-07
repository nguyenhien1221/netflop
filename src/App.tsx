import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "./configs/wagmi";
import { querryClient } from "./configs/querryClient";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { router } from "./configs/router";
import { Suspense } from "react";
import PageLoader from "@/components/common/PageLoader";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={querryClient}>
        <Suspense fallback={<PageLoader />}>
          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            containerClassName="mt-12"
            containerStyle={{}}
            toasterId="default"
            toastOptions={{
              className: "",
              duration: 3000,
              removeDelay: 1000,
              style: {
                background: "#363636",
                color: "#fff",
              },

              success: {
                duration: 3000,
                iconTheme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
