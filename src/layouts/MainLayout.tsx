import Header from '../components/Header';
import Footer from '../components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
