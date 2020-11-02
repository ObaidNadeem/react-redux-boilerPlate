import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as ACTION_TYPES from '../store/action/action_types';
import * as ACTIONS from '../store/action/actions';

class Container extends Component {
    render(){
        const user_text = "text1"
        return(
            <div>
                <button onClick={() => console.log(this.props.stateprop1)}>Get State</button>
                <button onClick={() => console.log(this.props.user_input)}>Get Text</button>
                {/* <button onClick={() => this.props.action1()}>Dispatch Action 1</button> */}
                {/* <button onClick={() => this.props.action2()}>Dispatch Action 2</button> */}
                <button onClick={() => this.props.actionCreator1()}>Action Creator 1</button>
                <button onClick={() => this.props.actionCreator2()}>Action Creator 2</button>
                <button onClick={() => this.props.actionCreator3(user_text)}>USER TEXT</button>
                {this.props.user_input 
                ? <h1> { this.props.user_input }</h1>
                : <h1>Login</h1>}
                {/* <h1> {this.props.stateprop1} </h1> */}
                { this.props.stateprop1 
                ? <h1>Login</h1>
                : <h1>Logout</h1>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stateprop1: state.stateReducer.stateprop1,
        user_input: state.userReducer.user_input
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // action1: () => dispatch(ACTIONS.SUCCESS),
        // action2 : () => dispatch(ACTIONS.FAILURE),
        actionCreator1 : () => dispatch(ACTIONS.success()),
        actionCreator2 : () => dispatch(ACTIONS.failure()),
        actionCreator3 : (text) => dispatch(ACTIONS.user_input(text))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Container);