import Header from '../components/Header.jsx'
import './Home.css'
import HeroAmd from '../components/HeroAmd.jsx'
import AboutAmd from '../components/AboutAmd.jsx'
import PortfolioAmd from '../components/PortfolioAmd.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

function HomeAmd() {
    return (
        <>
            <main className='container'>
                <Header />
                <HeroAmd />
                <AboutAmd />
                <PortfolioAmd />
                <Contact />
                <Footer />
            </main>
        </>
    )
}

export default HomeAmd