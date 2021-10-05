import React from "react";

const Header = () => {
    const headerStyle = {
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
    }
    return (
        <header style = {headerStyle}>
            <h4>Danh sách công việc</h4>
        </header>
    )
}

export default Header;