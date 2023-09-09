import HeaderNav from '@/components/nav/HeaderNav';

const MainLayout = ({ children }) => {
  return (
    <div>
      <HeaderNav />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
