import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Dashboard from './home/page'

export default function Home() {
  return (
    <main>
      <Navbar/>
     <Dashboard/>
     {/* <Footer/> */}
    </main>
  )
}
