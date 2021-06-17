import React, { useContext } from 'react'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const Admin = () => {
    return (
        <AmplifyAuthenticator>
            <h3>Admin Page</h3>
        <AmplifySignOut></AmplifySignOut>
        </AmplifyAuthenticator>
    )
}

export default Admin;