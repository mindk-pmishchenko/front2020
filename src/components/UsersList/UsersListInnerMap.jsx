import React, {useContext} from 'react';
import {UsersContext} from "../../containers/Users/UsersList";
import List from '@material-ui/core/List';
import ListItem  from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function UsersListInnerMap() {
    const users = useContext(UsersContext);

    return (
        <List component="nav" aria-label="main mailbox folders">
            { users.map(({id, name}) => (
                <ListItem button>
                    <ListItemText primary={name} />
                </ListItem>
            ))}
        </List>
    );

}

export default UsersListInnerMap;
