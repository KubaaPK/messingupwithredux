import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectUser } from '../actions/index';

class UserList extends React.Component {
    
    constructor(props) {
        super(props);

        this.createListItems = this.createListItems.bind(this);
    }


    createListItems(){
        return this.props.users.map((user) => <li key={ user.id } onClick={() => this.props.selectUser(user)}>{ user.first } { user.last }</li>);
    }
    
    render() {
        return (
            <ul>
                { this.createListItems() }
            </ul>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users
    };
}


const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectUser: selectUser }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(UserList);