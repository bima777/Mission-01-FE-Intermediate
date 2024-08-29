import { NavHome } from '../components/nav/index.jsx';  
import Banner from '../components/banner/index.jsx';
import Header from '../components/header/index.jsx';
import Menu from '../components/menu/index.jsx';
import CardHolder from '../components/card/card-holder.jsx';


const Home = () => {
    
    return (

        <div className='flex w-full h-full items-center bg-slate-500 gap-16 flex-col'>
            <div className='flex w-full justify-center items-center flex-col gap-6'>
                <NavHome/>
                <Banner/>
            </div>
            <div className='bg-white h-[400px] w-[1200px] max-w-[1200px]'>
                <div className='flex flex-col w-full bg-red-500 items-start'>
                    <Header header="Koleksi Video Pembelajaran Unggulan"/>
                    <p className='mt-[10px]'>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
                </div>
                <Menu/>
                <div className='flex justify-center'>
                    <CardHolder/>
                </div>
            </div>

        </div>

        
    )
}

export default Home;