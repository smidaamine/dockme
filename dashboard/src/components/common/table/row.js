
import React, { Component, PropTypes } from 'react';
function getRow(elemnt) {
    return (

        elemnt.map((a, index) =>

            <td key={index}>{a}</td>
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