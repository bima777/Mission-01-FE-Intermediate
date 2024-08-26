const input = (props) => {
    return (
        <div className="container">
            <div className="flex flex-col">
                <label className="" for={props.id}>{props.label}</label>
                <input className="" type={props.type} name={props.name} id={props.id} />
            </div>
        </div>
    )
}

export default input;