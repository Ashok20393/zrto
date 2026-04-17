import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

export default function DashboardLayout({ children }) {

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6">
          {children}
        </div>

      </div>

    </div>
  );
}