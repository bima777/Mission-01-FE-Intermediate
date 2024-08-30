import Button from '../../components/form/input/button.jsx';



const Banner = (props) => {

    return (   
    
       
            <div className='bg-[url(src/assets/banner/banner-01.jpeg)] bg-cover bg-center rounded-[10px] h-[400px] w-full'>
                <div className='flex flex-col w-full justify-center items-center text-center mb-3 px-[140px] py-[20px] gap-6'>
                    <div className='flex flex-col gap-3'>
                    <h1>{props.header}</h1>
                        <p className= 'text-banner'>
                        {props.desc}
                        </p>
                    </div>
                <Button className="btn-banner" label={props.button} />
                </div>
            </div>
     
    )
}
const BannerCTA = (props) => {

    return (   
            <div className='flex items-center justify-center bg-[url(src/assets/banner/banner-02.jpeg)] bg-cover bg-center rounded-[10px] h-[400px] w-full'>
                <div className='flex flex-col w-[525px] justify-center mb-3 gap-10'>
                    <div className='flex flex-col gap-1 '>
                        <p className='text-hbanner'>{props.title}</p>
                        <h3 class='text-center text-white'>{props.header}</h3>
                        <p className='text-banner'>{props.desc}</p>
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