const UserCreatedToast = (props) => {

    return (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div id={props.id} className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1200px-Yes_Check_Circle.svg.png" className="rounded me-2 fluid-img col-1" alt="..." />
                    <strong className="me-auto">User created successfuly</strong>
                    <small></small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </div>
    );
};

export default UserCreatedToast;