import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import PageContent from "./components/PageContent/PageContent";
import SideBar from "./components/SideBar/SideBar";
import DataContext from "./context/DataContext";
import SideBarContext from "./context/SideBarContext";
import GlobalStyle from "./GlobalStyle";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
          <DataContext.Provider value={{ categories, setCategories }}>
            <BrowserRouter>
              <SideBarContext.Provider
                value={{ isSideBarOpen, setIsSideBarOpen }}
              >
                <Nav />
                {isSideBarOpen && <SideBar />}
              </SideBarContext.Provider>
              <PageContent>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </PageContent>
              <Footer />
            </BrowserRouter>
          </DataContext.Provider>
    </QueryClientProvider>
  </>
  );
};

export default App;
