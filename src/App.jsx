import Header from "./components/header"
import Footer from "./components/Footer"
import AllRoutes from "./routes/AllRoutes"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <>
    <ToastContainer/>
      <Header/>
      <main className="min-h-screen my-10">
        <AllRoutes/>
      </main>
      {/* <main className="min-h-screen"></main> */}
      <Footer/>
    </>
  )
}

export default App