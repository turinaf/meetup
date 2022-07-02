import { useContext } from 'react';
import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorite_context'

function MainNavigation(){
    const favoriteCtx = useContext(FavoritesContext);
 return <header className={classes.header}>
     <div className={classes.logo}>React Meetups</div>
     <nav>
         <ul>
             <li> <Link to={'/'}>All meetups </Link></li>
             <li> <Link to={'/new-meetup'}>Add new meetup </Link></li>
             <li> <Link to={'/favorites'}>My Favorites <span className={classes.badge}>{favoriteCtx.totalFavorites}</span> </Link></li>
         </ul>
     </nav>
 </header>
}

export default MainNavigation;