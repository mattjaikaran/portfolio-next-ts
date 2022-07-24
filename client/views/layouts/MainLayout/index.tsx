import Footer from '@/components/nav/Footer'
import Header from '@/components/nav/Header'

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default MainLayout