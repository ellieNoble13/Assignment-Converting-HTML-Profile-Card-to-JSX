import React from "react";

const UserProfile = ({name, email, photoURL}) => {
    const styles = {
        card: {
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            textAlign: "center",
            width: "300px",
            border: "2px solid #007bff",
            margin: "20px auto",
            fontFamily: "Arial, sans-serif"
        },
        image: {
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "15px",
            border: "3px solid #007bff"
        },
        name: {
            color: "#007bff",
            marginBottom: "15px",
            fontSize: "24px"
        },
        text: {
            color: "#333",
            margin: "5px 0",
            fontSize: "16px"
        },
        link: {
            display: "inline-block",
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontWeight: "bold"
        }
    };

    return (
        <div style={styles.card}>
            <h2 style={styles.name}>{name}</h2>
            <img
                src={photoURL}
                alt={`${name}'s photo`}
                style={styles.image}
            />
            <p style={styles.text}>Email: {email}</p>
            <a href={`mailto:${email}`} style={styles.link}>
                Send Email
            </a>
        </div>
    );
};

export default UserProfile;