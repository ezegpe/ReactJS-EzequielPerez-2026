import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import styles from "./layouts.module.css";

function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <Nav />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
