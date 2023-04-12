import { Button, ListGroup, ListGroupItem } from "reactstrap";

const UsersList = ({ users = [], onDeleteUser }) => {
  return (
    <ListGroup>
      {users
        .sort((a, b) => {
          return a.firstName > b.firstName ? 1 : -1;
        })
        .map((user) => (
          <ListGroupItem key={user.id}>
            <section style={{ display: "flex" }}>
              <div style={{ flexGrow: 1, margin: "auto 0" }}>
                {user.firstName} {user.lastName}
              </div>
              <div>
                <Button
                  outline
                  color="danger"
                  onClick={() => onDeleteUser(user.id)}
                >
                  Delete
                </Button>
              </div>
            </section>
          </ListGroupItem>
        ))}
    </ListGroup>
  );
};

export default UsersList;
