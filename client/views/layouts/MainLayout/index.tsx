import Header from '@/components/nav/Header'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}

export default MainLayout