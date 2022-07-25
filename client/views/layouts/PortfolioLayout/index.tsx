import Header from '@/components/nav/Header'

const PortfolioLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <p>PortfolioLayout</p>
      <main>
        {children}
      </main>
    </div>
  )
}

export default PortfolioLayout