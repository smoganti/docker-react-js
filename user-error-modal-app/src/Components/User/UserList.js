import Card from '../UI/Card';
import styles from './UserList.module.css'

const UserList = (props) => {

    let listJsx = '';

    if (props.users.length === 0)
        listJsx = <div>No Data present currently. Please enter above</div>
    else
        listJsx = <ul>
            {props.users.map(user => { return <li key={user.id}>{user.name} ({user.age}) Years Old.</li> }
            )}
        </ul>
    return (
        <Card className={styles.users}>
            {listJsx}
        </Card>
    );
};

export default UserList;