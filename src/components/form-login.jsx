import Input from './form/input/input.jsx';
import Button from './form/input/button.jsx';
import Header from './header/index.jsx';

const FormLogin = () => {
    return (
        <div className="container w-screen h-screen flex items-center justify-center">
            <div className='bg-white border-form p-8 rounded-lg shadow-lg w-full max-w-md'>
                <form action="" method="post" className="space-y-4">
                    <Header header="Masuk ke Akun"/>
                    <p className="text-center font-sans font-normal text-base/[22.4px]">Yuk, lanjutin belajarmu di videobelajar</p>
                    <Input label="Username" type="text" name="username" id="username" />
                    <Input label="Kata Sandi" type="password" name="password" id="password" />
                    <a href="#" className="flex font-sans font-medium w-fit text-slate-600 text-base/[22.4px]">Lupa kata sandi?</a>
                    <Button className ="btn-login" label="Masuk" />
                    <Button className ="btn-register" label="Daftar" />
                    <p className="text-center">atau</p>
                    <Button className ="btn-google" label="Masuk dengan Google" />
                </form>
            </div>
        </div>
    );
};

export default FormLogin;
