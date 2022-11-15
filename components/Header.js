import Link from "next/link";
import headerStyles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logo}>
        <Link href='/'>
            <p>DJ Events</p>
        </Link>
      </div>

      <nav>
          <ul>
              <li>
                 <Link href='/events'>
                    <p>Events</p>
                 </Link> 
              </li>
          </ul>
      </nav>
    </header>
  );
}
