import styles from './BottomNavigation.module.scss';
import {HomeRounded, Search, AccountCircle} from '@material-ui/icons';

export const BottomNavigation = () => {
  return (
    <nav className={styles.bottom_navigation_container}>
      <ul className={styles.navigation_items_container}>
        <li>
          <HomeRounded style={{fill: '#fff'}}/>
        </li>
        <li><Search style={{fill: '#fff'}}/></li>
        <li><AccountCircle style={{fill: '#fff'}}/></li>
      </ul>
    </nav>
  )
}