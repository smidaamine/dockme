import React, { Component, PropTypes } from 'react';
import Table from "../common/table/table";
import Header from "../common/table/header";
import Loader from '../common/loader/loader';

import * as containerActions from '../../actions/container';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import StyledLink from "../common/styledLink";

/**
 * Component list all docker containners 
 */
class List extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.actions.getContainers();
    }


    getData(data) {

        return data.map(e => [e.Id, e.Names, e.State, e.Status, e.Image, { type: "time", value: e.Created }]);

    }

    renderData() {
        return (
            <div className="row">
                <div>
                    <StyledLink to="containner" style="btn btn-primary">Create</StyledLink>
                </div>
                <div className="col-md-12">
                    <Table data={this.getData(this.props.containers)}>
                        <Header>ID</Header>
                        <Header>Names</Header>
                        <Header>STATE</Header>
                        <Header>STATUS</Header>
                        <Header>IMAGE</Header>
                        <Header>Created</Header>

                    </Table>
                </div>
            </div>
        );

    }

    render() {
        let comp = !this.props.isFetching ? this.renderData() : <Loader />;
        return (

            comp

        );
    }
}


List.propTypes = {
    actions: PropTypes.object,
    containers: PropTypes.array,
    isFetching: PropTypes.bool
};
function mapStateToprops(state) {
    return { isFetching: state.containers.isFetching, containers: state.containers.containers };
}

function mapDispatchToprops(dispatch) {
    return {
        actions: bindActionCreators(containerActions, dispatch)
    };

}




export default connect(mapStateToprops, mapDispatchToprops)(List);