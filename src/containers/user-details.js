import React from 'react';
import { connect } from 'react-redux';


class UserDetail extends React.Component {

    render() {
        if(!this.props.user) {
            return(<p>select user</p>);
        }
        return (
            <div>
                <img src={ this.props.user.thumbnail } />
                <h2>{ this.props.user.first } { this.props.user.last }</h2>
                <h3>{ this.props.user.age }</h3>
                <p>{ this.props.user.description }</p>
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);