import React, {useState, useEffect, createContext} from 'react';

import UsersList from "../../components/UsersList/UsersList";
import {getUsers} from "../../containers/Users/hooks/crud";

export const UsersContext = createContext([]);
export const CurrentUserContext = createContext({});

function UsersListContainer() {
    const [users, setUsers] = useState([]);

    const getData = async () => {
        const {data} = await getUsers({id: 1});
        setUsers(data);
    };

    useEffect(getData, []);

    const usersContext = {users, currentUser: {name: 'Vasya'}};

    return (
        <CurrentUserContext.Provider value={{name: 'Vasya'}} >
            <UsersContext.Provider value={users} >
                <UsersList />
            </UsersContext.Provider>
        </CurrentUserContext.Provider>
    );
}

export default UsersListContainer;
