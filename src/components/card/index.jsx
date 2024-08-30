import rate from '../../assets/rate/Rating.png';

const Card = (props) => {
    return (
            <div className="container group">
                <div className="flex flex-col items-center justify-center overflow-hidden aspect-[384/full] border rounded-[10px] p-5 gap-4 cursor-pointer group-hover:bg-orange-200">
                    <div className="w-full h-full rounded-[10px]">
                        <img src={props.image} alt="card" className='w-full h-full object-cover'/>
                    </div>
                        <div className='grid gap-2'>
                            <h6>Big 4 Auditor Financial Analyst</h6>
                            <p className='text-home line-clamp-2 group-hover:line-clamp-none'>
                            Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik
                            </p>
                        </div>
                        <div className='flex gap-[10px] w-full'>
                            <img className='rounded-[10px]' src={props.ava} alt="ava" width='40px' height='40px'/>
                            <div className='flex flex-col text-left'>
                                <p className='text-author'>Jenny Ortega</p>
                                <div className='flex gap-1'>
                                    <p className='text-job'>Senior Accountant</p> 
                                    <p className='text-job'>di</p>                                   
                                    <p className='text-office'>Gojek</p>
                                </div>
                            </div> 
                        </div>
                        <div className='flex justify-between w-full'>
                            <div className='flex gap-2'>
                                <img className='' src={rate} alt="rating" width='90px' height='18px'/>
                                <p className='text-job'>3.5 (86)</p>
                            </div>
                                <h4>Rp 300K</h4>
                        </div>  
                </div>
            </div>
    )
}

export default Card;