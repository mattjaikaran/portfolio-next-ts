import Header from '@/components/nav/HeaderNav';

const PortfolioLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <p>PortfolioLayout</p>
      <main>{children}</main>
    </div>
  );
};

export default PortfolioLayout;
