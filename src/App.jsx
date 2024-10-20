import Header from "./components/Header"
import Footer from "./components/Footer"
import AllRoutes from "./routes/AllRoutes"

const App = () => {
  return (
    <>
      <Header/>
      <AllRoutes/>
      {/* <main className="min-h-screen"></main> */}
      <Footer/>
    </>
  )
}

export default App