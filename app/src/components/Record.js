const Record = (props) => {
    return (
        <tr>
            <td>{props.user.id}</td>
            <td>{props.user.userName}</td>
            <td>{props.user.phone}</td>
            <td>{props.user.email}</td>
            <td>{props.user.date}</td>
            <td><button className="btn btn-success" onClick={() => props.editEventHandler(props.user)}>Edit</button></td>
            <td><button className="btn btn-danger" onClick={() => props.deleteEventHandler(props.user)}>Delete</button></td>
        </tr>
    );
};

export default Record;