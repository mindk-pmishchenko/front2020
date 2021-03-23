import React, {createContext, useCallback, useEffect} from 'react';
import {
    useQuery,
    useMutation
} from 'react-query';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import UsersList from "../../components/UsersList/UsersList";
import {getUsers, createUserRequest} from "../../containers/Users/hooks/crud";
import UserCreate from "../../components/UserCreate/UserCreate";

export const UsersContext = createContext([]);
export const CurrentUserContext = createContext({});

function UsersListContainer() {
    const {data: response, isFetching, refetch} = useQuery('users', () => getUsers({id: 1}));
    const users = response?.data || [];

    const {mutate: createUser} = useMutation(createUserRequest);

    const onSubmit = useCallback(async formData => {
        try {
            // const data = await createUser(formData);
            refetch();
            // console.log('User id: ', id);
        } catch (e) {
            console.log(e);
        }
    }, [createUser, refetch]);

    // useEffect(() => onSubmit({name: 'Ivan'}), []);

    return (
        <CurrentUserContext.Provider value={{name: 'Vasya'}} >
            <UsersContext.Provider value={users} >
                <Card>
                    <CardHeader title="Users list" />
                    <CardContent>
                        <UsersList isFetching={isFetching} />
                        <UserCreate onSubmit={onSubmit} />
                    </CardContent>
                </Card>
            </UsersContext.Provider>
        </CurrentUserContext.Provider>
    );
}

export default UsersListContainer;
