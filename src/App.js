import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index";
import GlobalStyles from "./theme/GlobalStyles.styles";
import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import Drops from "./pages/Drops";
import Stats from "./pages/Stats";
import Create from "./pages/Create";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Reset />
      <GlobalStyles />
      <Routes>
        {/* Routes 랑 Route 주의! Router가 아니다! */}
        <Route path="/" element={<Home />} />
        <Route path="/drops" element={<Drops />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
