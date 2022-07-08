import Record from './Record';

const Table = (props) => {
    return (
        <div className="contact-lists mt-5">
            <table id="users-table" className="table table-hover">
                <thead>
                    <tr>
                        <td>№</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Date</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user) => {
                        return (
                            <Record
                                user={user}
                                key={user.id}
                                editEventHandler={props.editEventHandler}
                                deleteEventHandler={props.deleteEventHandler}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default Table;