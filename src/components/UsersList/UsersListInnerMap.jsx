import React, {useContext} from 'react';
import {CurrentUserContext, UsersContext} from "../../containers/Users/UsersList";

function UsersListInnerMap() {
    const users = useContext(UsersContext);
    const currentUser = useContext(CurrentUserContext);
    console.log(currentUser.name);

    return users.map(({id, name}) => (<div>{id}: {name}</div>));

}

export default UsersListInnerMap;
