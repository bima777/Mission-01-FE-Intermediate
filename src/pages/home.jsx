import { NavHome } from '../components/nav/index.jsx';  
import Banner from '../components/banner/index.jsx';
import { BannerCTA } from '../components/banner/index.jsx';
import Menu from '../components/menu/index.jsx';
import CardHolder from '../components/card/card-holder.jsx';


const Home = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-wrap'>
                <NavHome/>
                <div className='w-full px-[120px] py-16 flex flex-col gap-[64px]'>
                    <Banner 
                    header="Revolusi Pembelajaran:Temukan Ilmu Baru melalui Platform Video Interaktif!"
                    desc="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
                    button="Temukan Video Course untuk Dipelajari!"
                    />
                    
                    <div className='flex flex-col gap-[10px]'>
                    <h3>Koleksi Video Pembelajaran Unggulan</h3>
                    <p className='text-home'>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
                    </div>
                    <Menu/>

                    <CardHolder/>
                    <BannerCTA
                        title="NEWSLETTER"
                        header="Mau Belajar Lebih Banyak?"
                        desc="Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id"
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Home;
