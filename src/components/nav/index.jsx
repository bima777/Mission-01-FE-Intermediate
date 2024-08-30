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

        <div className="flex w-full bg-white py-3 px-[120px] gap-9">
            <div className="flex justify-between items-center w-[1120px]">
                <img src={logo} alt="logo-videobelajar" className='cursor-pointer'/>
                <a className='text-home' href='#'>Kategori</a>
            </div>
                <img src={profile} alt="profile" className='cursor-pointer'/>
        </div>
    )
}

export default Nav;
export { NavHome };