const button = (props) => {

    return (
        <div className="container flex">
            <input className={props.className} type="submit" value={props.label} />
        </div>
    )
}

export default button;