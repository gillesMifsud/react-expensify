// HOC : Higher Order Component :
// A component (HOC) that renders other components
// Reuse code
// Render Hijacking
// Props manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private, don't share.</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in.</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render( <AdminInfo isAdmin={true} info="This is the description" />, document.getElementById('app'));
ReactDOM.render( <AuthInfo isAuthenticated={true} info="this is the description" />, document.getElementById('app'));