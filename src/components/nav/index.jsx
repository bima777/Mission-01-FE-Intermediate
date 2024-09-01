import logos from '../../assets/nav/logo-videobelajar.png';
import profile from '../../assets/nav/Avatar.png';
import vector from '../../assets/nav/Vector.png';
import React, { useState } from 'react';

const Nav = () => { 
    {/* Untuk Navbar pada Login dan Register */}
    return (

        <div className='flex w-full hp:px-0 hp:py-4 lg:py-3 lg:px-[100px]'>
                <img src={logos} alt="logo-videobelajar" className='cursor-pointer'/>
        </div>
        
    )
}


const NavHome = () => {

        const [isDropdownOpen, setIsDropdownOpen] = useState(false); //Memakai hook useState untuk membuat dropdown
    
        const toggleDropdown = () => {
            setIsDropdownOpen(!isDropdownOpen); //Mengubah state
        };

    {/* Untuk Navbar pada Home */}
    return (
    
            <div className="fixed top-0 left-0 z-50 bg-white flex w-full hp:px-6 hp:py-4 sm:px-[30px] sm:py-3 sm:gap-6 lg:px-[120px] lg:gap-9 shadow-md">
                <div className="flex justify-between items-center w-[1120px]">
                    <img src={logos} alt="logo-videobelajar" className='cursor-pointer'/>
                    <a className='text-home hidden lg:block sm:block hp:hidden' href='#'>Kategori</a>
                    {/* Dropdown ditaruh di image vector yang terdapat khusus pada layar mobile */}
                    <img src={vector} alt="vector" className='block lg:hidden sm:hidden hp:block cursor-pointer' onClick={toggleDropdown}/> 
                </div>
                    <img src={profile} alt="profile" className='cursor-pointer hidden hp:hidden sm:block lg:block'/>

                    {/* Dropdown */}
                    {isDropdownOpen && (
                <ul className="absolute text-home top-full right-0 bg-white shadow-lg rounded-md py-2 w-[200px]">
                    <li>
                        <a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" href="#">Semua Kelas</a>
                    </li>
                    <li>
                        <a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" href="#">Pemasaran</a>
                    </li>
                    <li>
                        <a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" href="#">Desain</a>
                    </li>
                    <li>
                        <a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" href="#">Pengembangan Diri</a>
                    </li>
                    <li>
                        <a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" href="#">Bisnis</a>
                    </li>
                </ul>
            )}
            </div>
        
    )
}

export default Nav;
export { NavHome }