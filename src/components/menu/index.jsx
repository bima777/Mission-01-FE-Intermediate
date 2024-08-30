const Menu = () => {
    return (
        <div>
            <ul className="flex text-home group">
                <li>
                    <a className="inline-block py-3 pr-9 pl-0 hover:text-orange-600" href="#">Semua Kelas</a>
                </li>
                <li>
                    <a className="inline-block py-3 pr-9 pl-0 hover:text-orange-600" href="#">Pemasaran</a>
                </li>
                <li>
                    <a className="inline-block py-3 pr-9 pl-0 hover:text-orange-600" href="#">Desain</a>
                </li>
                <li>
                    <a className="inline-block py-3 pr-9 pl-0 hover:text-orange-600" href="#">Pengembangan Diri</a>
                </li>
                <li>
                    <a className="inline-block py-3 pr-9 pl-0 hover:text-orange-600" href="#">Bisnis</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
