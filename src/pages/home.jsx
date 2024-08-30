import { NavHome } from '../components/nav/index.jsx';  
import Banner from '../components/banner/index.jsx';
import { BannerCTA } from '../components/banner/index.jsx';
import Header from '../components/header/index.jsx';
import Menu from '../components/menu/index.jsx';
import CardHolder from '../components/card/card-holder.jsx';

const Home = () => {
    return (
        <div className='flex flex-col'>
            <NavHome/>    
            <div className='bg-sky-300 flex flex-col w-full justify-center items-center gap-16 px-[120px] py-16'>
                <Banner/>
                <div className='flex flex-col bg-slate-400 h-[400px] w-full gap-8'>
                    <div className='flex flex-col w-full items-start gap-[10px]'>
                        <Header header="Koleksi Video Pembelajaran Unggulan"/>
                        <p className='text-home'>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
                    </div>
                    <Menu/>
                    <CardHolder/>
                </div>
                <BannerCTA/> 
            </div>
        </div>
    )
}

export default Home;
