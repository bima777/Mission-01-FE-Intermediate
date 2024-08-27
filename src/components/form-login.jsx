import Input from './form/input/input.jsx'
import Button from './form/input/button.jsx'

const formLogin = () => {

    return (
        <div className="container w-screen">
            <div className='flex justify-center bg-red-500 w-1/2'>
                <form className="" action="" method="post">
                    <Input label="Username" type="text" name="username" id="username" />
                    <Input label="Kata Sandi" type="password" name="password" id="password" />
                    <a href="#">Lupa kata sandi?</a>
                    <Button label="Masuk"/>
                    <Button label="Daftar"/>
                    <p>atau</p>
                    <Button label="Masuk dengan Google"/>
                </form>
            </div>
        </div>

    )
}

export default formLogin;