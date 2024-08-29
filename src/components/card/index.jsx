import rate from '../../assets/rate/Rating.png';

const Card = (props) => {
    return (
        <div className="grid grid-cols-3 gap-6 md:p-4">
            <div className="grid justify-center h-15 bg-slate-300 aspect-[384/426] border rounded-[10px] p-5 gap-4">
                <div className="w-[344px] h-[193px] rounded-[10px]">
                    <img src={props.image} alt="card"/>
                </div>
                    <div className='grid gap-2'>
                        <h6>{props.header}</h6>
                        <p className='text-home'>{props.desc}</p>
                    </div>
                    <div className='flex gap-[10px]'>
                        <img className='rounded-[10px]' src={props.ava} alt="ava" width='40px' height='40px'/>
                        <div className=''>
                            <p className='text-author'>{props.author}</p>
                            <p className='text-job'>{props.job}</p>                                
                        </div> 
                    </div>
                    <div className='flex justify-between'>
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