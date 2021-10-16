import Header from "./Header"
import Footer from "./Footer"

const MainLayout = ({ children }) => {
  return (
    <div id='main-layout'>
      <div className='main-layout-container'>
        <Header />
        <div className='template-content'>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout