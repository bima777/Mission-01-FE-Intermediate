import Card from "./index.jsx";
//Cards
import card1 from '/src/assets/card-photos/1.png'
import card2 from '/src/assets/card-photos/2.png';
import card3 from '/src/assets/card-photos/3.png';
import card4 from '/src/assets/card-photos/4.png';
import card5 from '/src/assets/card-photos/5.png';
import card6 from '/src/assets/card-photos/6.png';
import card7 from '/src/assets/card-photos/7.png';
import card8 from '/src/assets/card-photos/8.png';
import card9 from '/src/assets/card-photos/9.png';

//Avatars
import ava1 from '/src/assets/ava-photos/1.png';
import ava2 from '/src/assets/ava-photos/2.png';
import ava3 from '/src/assets/ava-photos/3.png';
import ava4 from '/src/assets/ava-photos/4.png';
import ava5 from '/src/assets/ava-photos/5.png';
import ava6 from '/src/assets/ava-photos/6.png';
import ava7 from '/src/assets/ava-photos/7.png';
import ava8 from '/src/assets/ava-photos/8.png';
import ava9 from '/src/assets/ava-photos/9.png';

const CardHolder = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card
                image={card1}
                header="Koleksi Video Pelajaran"
                desc="Jelajahi dunia pengetahuan melalui pilihan kami"
                ava={ava1}
                author="Dokter Umum"
                job="Dokter Umum"
            />
            <Card
                image={card2}
                header="Koleksi Video Pelajaran"
                desc="Jelajahi dunia pengetahuan melalui pilihan kami"
                ava={ava2}
                author="Dokter Umum"
                job="Dokter Umum"
            />
            <Card
                image={card3}
                header="Koleksi Video Pelajaran"
                desc="Jelajahi dunia pengetahuan melalui pilihan kami"
                ava={ava3}
                author="Dokter Umum"
                job="Dokter Umum"
            />
            <Card
                image={card4}
                header="Koleksi Video Pelajaran"
                desc="Jelajahi dunia pengetahuan melalui pilihan kami"
                ava={ava4}
                author="Dokter Umum"
                job="Dokter Umum"
            />
            <Card
                image={card5}
                header="Koleksi Video Pelajaran"
                desc="Jelajahi dunia pengetahuan melalui pilihan kami"
                ava={ava5}
                author="Dokter Umum"
                job="Dokter Umum"
            />
            <Card
                image={card6}
                header="Koleksi Video Pelajaran"
                desc="Jelajahi dunia pengetahuan melalui pilihan kami"
                ava={ava6}
                author="Dokter Umum"
                job="Dokter Umum"
            />
            <Card
                image={card7}
                header="Koleksi Video Pelajaran"
                desc="Jelajahi dunia pengetahuan melalui pilihan kami"
                ava={ava7}
                author="Dokter Umum"
                job="Dokter Umum"
            />
            <Card
                image={card8}
                header="Koleksi Video Pelajaran"
                desc="Jelajahi dunia pengetahuan melalui pilihan kami"
                ava={ava8}
                author="Dokter Umum"
                job="Dokter Umum"
            />
            <Card
                image={card9}
                header="Koleksi Video Pelajaran"
                desc="Jelajahi dunia pengetahuan melalui pilihan kami"
                ava={ava9}
                author="Dokter Umum"
                job="Dokter Umum"
            />
        
        </div>
    )
}

export default CardHolder;
