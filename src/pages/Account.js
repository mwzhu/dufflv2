import React, { useContext } from 'react'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const Account = () => {
    return (
        <AmplifyAuthenticator>
            <h3>Account Page</h3>
        <AmplifySignOut></AmplifySignOut>
        </AmplifyAuthenticator>
    )
}

export default Account;