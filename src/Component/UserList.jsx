function UserList({ users }) {
    return (
        <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Roll</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td><img
                                src={user.image}
                                alt={user.name}
                                width="50"
                                height="50"
                                style={{ borderRadius: "50%" , marginRight: "10px" }}
                            />{user.name}</td>
                        
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.roll}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UserList;
