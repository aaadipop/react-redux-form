import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
} from "@material-ui/core";
import { getRequest, postRequest } from "./redux/ExAction"
import BasicForm from "./BasicForm"

class FormPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      localReduxData: props.reduxData
    }
  }

  componentDidMount() {
    this.props.getRequest(1);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.reduxData !== prevProps.reduxData){
      this.setState({ localReduxData: this.props.reduxData });
    }
  }

  onHandleSubmit = (event) => {
    console.log('Submitting ...')
    this.props.postRequest(this.state.localReduxData);
  }

  onHandleChange = (event) => {
    let {name, value} = event.target;

    this.setState(prevState => ({...prevState,
      localReduxData: {...prevState.localReduxData,
        payload: {...prevState.payload, [name]: value}}
    }), () => console.log('State updated ...'))
  }

  render() {
    let { localReduxData } = this.state;

    return(
      <Grid container spacing={3}>
        <Grid item xs={12}>
          Forms w. Redux. Example
        </Grid>
        <Grid item xs={12}>
          <BasicForm
            data = {localReduxData.payload}
            handleSubmit = {this.onHandleSubmit}
            handleChange = {this.onHandleChange} />
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  // getRequest: PropTypes.func.isRequired,
  reduxData: state.reduxReducerData
});
export default
  connect(mapStateToProps, { getRequest, postRequest })(FormPage);
