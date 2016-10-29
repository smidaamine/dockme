import React, { Component, PropTypes } from 'react';


import Header from './common/header/header';
import InputText from './common/inputText';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './style.css';
import { Link } from 'react-router';


class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                
                <div className="container">

                    {this.props.children}
                </div>
            </div>


        );
    }

}

App.propTypes = {
    children: PropTypes.object
};



export default App;