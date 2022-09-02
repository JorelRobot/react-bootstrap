import Card from "../UI/Card";

const UsersList = (props) => {

    return (
        <Card>
            {props.users.map(user => {
                return <div className="card mb-3" key={user.id}>
                    <div className="row g-0">
                        <div className="col-md-3">
                            <img src={`https://picsum.photos/id/${Math.floor(Math.random() * 500) + 1}/200/200`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text"><small className="text-muted">({user.age} years old)</small></p>
                                <p className="card-text"><small className="text-muted">ID: {user.id}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </Card>
    );
};

export default UsersList;