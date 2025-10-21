import Navbar from "../../../components/shared/Navbar";
import Footer from "../../../components/shared/Footer";

export default function PublicLayout({ children }) {
  return (
    <div className="">
      <header className="">
        <Navbar />
      </header>

      <main className="min-h-screen">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
