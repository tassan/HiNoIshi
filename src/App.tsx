import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Navbar />
      <Header />
      <GlobalStyle />
    </>
  )
}
