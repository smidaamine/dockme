
import React, { Component, PropTypes } from 'react';
import moment from 'moment';
function getRow(elemnt) {
    return (

        elemnt.map((a, index) => {
            if (a.type == "time") {
                return (
                    <td key={index}>{moment.unix(a.value).fromNow()}</td>
                );
            }
            else
                return (
                    <td key={index}>{a}</td>);
        }
        )


    );
}
const Row = ({data}) => {


    return (


        <tbody>
            {
                data.map((e, index) =>

                    <tr key={index}>{getRow(e)}</tr>

                )}
        </tbody>



    );
};
Row.propTypes = {
    data: PropTypes.array.isRequired
};

export default Row;