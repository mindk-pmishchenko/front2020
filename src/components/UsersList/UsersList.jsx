import UsersListInner from "./UsersListInner";

function UsersList({isFetching}) {
    return (
        <div>
            {isFetching && 'Loading...'}
            {!isFetching && <UsersListInner />}
        </div>
    );
}

export default UsersList;
