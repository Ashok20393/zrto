import PublicNavbar from "../components/publicnavbar";
import Footer from "../components/footer";
export default function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar */}
      <PublicNavbar />

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}