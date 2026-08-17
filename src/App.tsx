import { RouterProvider, useRouter } from '@/lib/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import AmenitiesPage from '@/pages/AmenitiesPage';
import BookingPage from '@/pages/BookingPage';
import PoliciesPage from '@/pages/PoliciesPage';
import MoabPage from '@/pages/MoabPage';
import ContactPage from '@/pages/ContactPage';
import FaqsPage from '@/pages/FaqsPage';
import ReviewsPage from '@/pages/ReviewsPage';
import AdminPage from '@/pages/AdminPage';

function Routes() {
  const { path } = useRouter();

  const renderPage = () => {
    switch (true) {
      case path === '/':
        return <HomePage />;
      case path.startsWith('/about'):
        return <AboutPage />;
      case path.startsWith('/amenities'):
        return <AmenitiesPage />;
      case path.startsWith('/booking'):
        return <BookingPage />;
      case path.startsWith('/policies'):
        return <PoliciesPage />;
      case path.startsWith('/moab'):
        return <MoabPage />;
      case path.startsWith('/contact'):
        return <ContactPage />;
      case path.startsWith('/faqs'):
        return <FaqsPage />;
      case path.startsWith('/reviews'):
        return <ReviewsPage />;
      case path.startsWith('/admin'):
        return <AdminPage />;
      default:
        return <HomePage />;
    }
  };

  const isAdmin = path.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{renderPage()}</main>
      {!isAdmin && <Footer />}
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <Routes />
    </RouterProvider>
  );
}

export default App;
