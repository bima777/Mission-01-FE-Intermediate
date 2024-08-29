import { Header1 } from '../header/index.jsx';
import Button from '../../components/form/input/button.jsx'


const Banner = (props) => {

    return (   
    
       
            <div className='bg-black bg-cover bg-center rounded-[10px] h-[400px] w-[1200px] max-w-[1200px] py-[82px] px-[140px]'>
                <div className='flex flex-col w-full justify-center items-center mb-3'>
                    <Header1 header={props.header}/>
                    <div className='mt-3 p-0'>
                        <p className='text-banner'>
                        {props.desc}
                        </p>
                    </div>
                </div>
                <Button className="btn-banner" label={props.button} />
            </div>
     
    )
}

export default Banner;