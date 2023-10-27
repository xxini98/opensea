import { Box } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header/Header";
import History from "../common/History";
import Title from "../common/Tilte";

const Layout = ({ pagename, title }) => {
  return (
    <div className="wrap">
      <Header />
      <main className="main">
        <Box>
          <History pagename={pagename} />
          <Title title={title} />
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

// 얘는 와꾸라 생각하기
