import Link from "next/link";
import footerStyle from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyle.footer}>
      <p>Copyright &copy; DJ Events 2021</p>
      <p>
        <Link href="/about">About This Project</Link>
      </p>
    </footer>
  );
}
