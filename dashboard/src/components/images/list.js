import React, { Component, PropTypes } from 'react';
import Table from "../common/table/table";
import Header from "../common/table/header";
import Loader from '../common/loader/loader';

import * as imageActions from '../../actions/images';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '../common/button';


class List extends Component {

    constructor(props) {
        super(props);
    }

     componentDidMount() {
        this.props.actions.getImages();
    }


   getData(data) {

        return data.map(e => [e.Id,e.RepoTags,{type:"time",value: e.Created}]);

    }

    renderData() {
        return (
            <div className="row">
            <Button name="create"/>
            <div className="col-md-9">
                <Table data={this.getData(this.props.images)}>
                    <Header>ID</Header>
                    <Header>Tag</Header>
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
    images: PropTypes.array,
    isFetching: PropTypes.bool
};
function mapStateToprops(state) {
    return { isFetching: state.images.isFetching, images: state.images.images };
}

function mapDispatchToprops(dispatch) {
    return {
        actions: bindActionCreators(imageActions, dispatch)
    };

}




export default connect(mapStateToprops, mapDispatchToprops)(List);

