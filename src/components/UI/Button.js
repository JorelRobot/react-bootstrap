const Button = (props) => {
    return (
        <button
            className="btn btn-success"
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;