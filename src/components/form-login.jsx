import Input from './form/input/input.jsx'

const formLogin = (props) => {

    return (
        <div className="container">
            <form className="" action="" method="post">
                <Input label="Username" type="text" name="username" id="username" />
                <Input label="Kata Sandi" type="password" name="password" id="password" />
            </form>
        </div>

    )
}

export default formLogin;