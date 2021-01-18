import { Link } from "react-router-dom";

import UserPage from './containers/UserPage';
import MyProfile from './containers/MyProfile';

function App({testProp}) {
    return (
        <>
            <div>testProp: {testProp}</div>
            <UserPage/>
            <MyProfile/>
            <Link to="/test">link</Link>
        </>
    );
}

export default App;
