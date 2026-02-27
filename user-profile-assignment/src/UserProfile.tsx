
import * as React from "react";

interface UserProfileProps {
    name: string;
    email: string;
    photoURL: string;
}

const UserProfile: React.FC<UserProfileProps> = ({name, email, photoURL}) => {
    return (
        <div className ="profile-card">
            <h2>User Profile</h2>
            <img
            src={photoURL}
            alt={`${name}'s photo`}/>
            <p>Name: {name}</p>
            <p>Email: {email}</p>

        </div>
    );
};