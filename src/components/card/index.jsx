import rate from '../../assets/rate/Rating.png';

const Card = (props) => {
    return (
            <div className="flex flex-col items-center justify-center overflow-hidden bg-slate-300 aspect-[384/full] border rounded-[10px] p-5 gap-4">
                <div className="w-full h-full rounded-[10px]">
                    <img src={props.image} alt="card" className='w-full h-full object-cover'/>
                </div>
                    <div className='grid gap-2'>
                        <h6>{props.header}</h6>
                        <p className='text-home'>{props.desc}</p>
                    </div>
                    <div className='flex gap-[10px] w-full'>
                        <img className='rounded-[10px]' src={props.ava} alt="ava" width='40px' height='40px'/>
                        <div className='flex flex-col text-left'>
                            <p className='text-author'>{props.author}</p>
                            <div className='flex gap-1'>
                                <p className='text-job'>{props.job}</p> 
                                <p className='text-job'>di</p>                                   
                                <p className='text-office'>{props.office}</p>
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
    )
}

export default Card;