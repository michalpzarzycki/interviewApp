import React from 'react';
import styles from './Navbar.module.css'


function Navbar() {
  return (
   <nav className={styles.navbar}>
       <div className={styles.navbarLeft}>LEWA</div>
       <div className={styles.navbarRight}>
<ul className={styles.viewList}>
    <li><a href="/view1">WIDOK 1</a></li>
    <li><a href="/view2">WIDOK 2</a></li>
    <li><a href="/view3">WIDOK 3</a></li>
    <li><a href="/view4">WIDOK 4</a></li>

</ul>
       </div>
   </nav>
  );
}

export default Navbar;