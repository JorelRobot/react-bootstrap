

const AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={addUserHandler}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="email" className="form-control" id="username" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age (Years)</label>
                <input type="number" className="form-control" id="age" />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    );
};

export default AddUser;