import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Books</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Books</Link>
          </li>
          <li>
            <Link href='/new-book'>Add New Book</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
