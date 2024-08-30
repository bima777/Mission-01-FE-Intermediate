import { Header1 } from '../header/index.jsx';
import Button from '../../components/form/input/button.jsx'


const Banner = (props) => {

    return (   
    
       
            <div className='bg-black bg-cover bg-center rounded-[10px] h-[400px] w-full py-[82px] px-[140px]'>
                <div className='flex flex-col w-full justify-center items-center mb-3'>
                    <Header1 header={props.header}/>
                    <div className='mt-3 p-0'>
                        <p className= 'text-banner'>
                        {props.desc}
                        </p>
                    </div>
                </div>
                <Button className="btn-banner" label={props.button} />
            </div>
     
    )
}
const BannerCTA = (props) => {

    return (   
            <div className='flex items-center justify-center bg-black bg-cover bg-center rounded-[10px] h-[400px] w-full py-[82px] px-[140px]'>
                <div className='bg-sky-200 flex flex-col w-[525px] justify-center mb-3 gap-10'>
                    <div className='flex flex-col gap-1 '>
                        <p className='text-hbanner'>Tes</p>
                        <Header1 header="Oke"/>
                        <p className='text-banner'>Tes</p>
                    </div>
                <div className='relative'>
                    <div class="h-[58px]">
                        <input type="text" class="focus:shadow focus:outline-none h-full py-2 pl-8 pr-2 gap-5" placeholder="Masukkan Emailmu"/>
                    </div>
                        <div class="absolute top-2 right-2 w-[132px] h-[42px]">
                            <button class="btn-cta hover:bg-red-600">Subscribe</button>
                        </div>
                </div>
                </div>
            </div>
     
    )
}

export default Banner;
export { BannerCTA };