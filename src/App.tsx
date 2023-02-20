import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";

import theme from "@theme/defaultTheme";

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider
      client={queryClient}
      contextSharing={true}>
      <ThemeProvider theme={theme}>
        <p>Hello world</p>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
