import React from 'react';

import User from '../components/User';

const auth = (props) => (
    <div>
        <h1>The Auth page - {props.appName}</h1>
        <User name='Kedar' age={27} />
    </div>
);

auth.getInitialProps = (context) => {
    console.log(context);

    const promise = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve( { appName: 'NextJS App' } );
        } , 1000);
    });
    return promise;
}

export default auth;