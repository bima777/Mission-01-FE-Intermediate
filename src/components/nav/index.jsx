import logo from '../../assets/nav/logo-videobelajar.png';
import profile from '../../assets/nav/Avatar.png';

const Nav = () => {

    return (

        <div className="container flex justify-between items-center">
            <img src={logo} alt="logo-videobelajar"/>
        </div>
    )
}

const NavHome = () => {
    
    return (

        <div className="container flex justify-between items-center px-[120px] py-3">
            <img src={logo} alt="logo-videobelajar"/>
            <div className="flex items-center">
                <p>Kategori</p>
                <img src={profile} alt="profile"/>
            </div>
        </div>
    )
}

export default Nav;
export { NavHome };