import React, {createContext, useCallback, useEffect} from 'react';
import {
    useQuery,
    useMutation
} from 'react-query';

import UsersList from "../../components/UsersList/UsersList";
import {getUsers, createUserRequest} from "../../containers/Users/hooks/crud";
import UserCreate from "../../components/UserCreate/UserCreate";

export const UsersContext = createContext([]);
export const CurrentUserContext = createContext({});

function UsersListContainer() {
    const {data: response, isFetching} = useQuery('users', () => getUsers({id: 1}));
    const users = response?.data || [];

    const {mutate: createUser} = useMutation(createUserRequest);

    const onSubmit = useCallback(async formData => {
        try {
            const data = await createUser(formData);

            // console.log('User id: ', id);
        } catch (e) {
            console.log(e);
        }
    }, [createUser]);

    // useEffect(() => onSubmit({name: 'Ivan'}), []);

    return (
        <CurrentUserContext.Provider value={{name: 'Vasya'}} >
            <UsersContext.Provider value={users} >
                <UsersList isFetching={isFetching} />
                <UserCreate onSubmit={onSubmit} />
            </UsersContext.Provider>
        </CurrentUserContext.Provider>
    );
}

export default UsersListContainer;
