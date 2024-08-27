import Input from './input/input.jsx';
import Button from './input/button.jsx';
import Header from '../header/index.jsx';

const FormRegister = () => {
    return (

        <div className="container w-screen h-screen flex items-center justify-center my-36">
        <div className='bg-white border-form p-8 rounded-lg shadow-lg w-full max-w-md'>
            <form action="" method="post" className="space-y-4">
                <Header header="Pendaftaran Akun"/>
                <p className="text-center font-sans font-normal text-base/[22.4px]">Yuk, daftarkan akunmu sekarang juga!</p>
                <Input label="Nama Lengkap" type="text" name="username" id="username" />
                <Input label="E-Mail" type="email" name="email" id="email" />
                <Input label="No. Hp" type="tel" name="phone" id="phone" />
                <Input label="Kata Sandi" type="password" name="password" id="password" />
                <Input label="Konfirmasi Kata Sandi" type="password" name="confirm_password" id="confirm_password" />
                <a href="#" className="flex font-sans font-medium w-fit text-slate-600 text-base/[22.4px]">Lupa Password?</a>
                <Button className ="btn-register" label="Daftar" />
                <Button className ="btn-login" label="Masuk" />
                <p className="text-center">atau</p>
                <Button className ="btn-google" label="Masuk dengan Google" />
            </form>
        </div>
    </div>

    )
}

export default FormRegister;