import React, { Component,PropTypes } from 'react';
import Row from './row';
import Header from './header';
import style from './style.css';


const Table = ({children, data}) => {
    return (
        <table className={style.breakable+" table"}>
            <thead>
            
                <tr>
                    {children}
                </tr>
            </thead>

            <Row data={data} />

        </table>
    );
};


Table.propTypes = {
    data : PropTypes.array.isRequired,
     children : PropTypes.array
};

export default Table;