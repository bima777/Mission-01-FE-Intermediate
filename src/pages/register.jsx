import Nav from '../components/nav/index.jsx';
import FormRegister from '../components/form/form-register.jsx';
import { Form } from 'react-router-dom';

const register = () => {

    return (

        <div className='flex w-screen justify-center items-center flex-col'>
            <Nav/>
            <FormRegister/>
        </div>
    )
}

export default register;