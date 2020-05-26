import React from 'react';


const Header = props => {
    return (


            <div className="jumbotron">
                <h3 className="appTitle">Learning Hub</h3>
                <img className="logo-image" src="../assets/images/learning.png" alt="Logo" />
                <hr />
                <br />
                <div className="row welcomeRow">
                    <div className="col s6" >Welcome User</div>
                    <div className="col s6">Date</div>
                </div>
            </div>

    );
};

export default Header