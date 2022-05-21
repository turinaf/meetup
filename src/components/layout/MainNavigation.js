import { Link } from 'react-router-dom'
function MainNavigation(){
 return <header>
     <div>React Meetups</div>
     <nav>
         <ul>
             <li> <Link to={'/'}>All meetups </Link></li>
         </ul>
         <ul>
             <li> <Link to={'/new-meetup'}>Add new meetup </Link></li>
         </ul>
         <ul>
             <li> <Link to={'/favorites'}>My Favorites </Link></li>
         </ul>
     </nav>
 </header>
}

export default MainNavigation;