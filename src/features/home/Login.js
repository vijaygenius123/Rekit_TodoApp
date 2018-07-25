import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


function SimpleAppBar(props) {
  return (
    <div >
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const styles = {
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
};


class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {

    const sideList = (
      <div className="list">
        <List className="list-item">Home
        <div role="button">
        <button> </button>
        </div>
        </List>
        <Divider />
        <List>Actions
         <div role="button"> 
          <button onClick={this.props.props.actions.logout}> Logout </button>
         </div>
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
                      </Drawer>

      </div>
    );
  }
}

export class Login extends Component {


constructor(){
  super();
  this.state = {
    username: '',
    password: '',
  }
}


  handleChange = (event) => {
    this.setState({
      username : event.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
   this.props.actions.login();
  }

  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    console.log(this.props);
    return (
      <div className="home-login">
      <SimpleAppBar />
      <h1> Login Form </h1>
      
      {this.props.home.loggedIn ? 
      <div>
        <h1 className="user"> Welcome User </h1> 
        <button onClick={this.props.actions.logout}> Logout </button> 
              <TemporaryDrawer props={this.props}/>

        </div>
      :  
      <form onSubmit={this.handleSubmit} >
        <FormControl >
          <InputLabel htmlFor="name-simple">Name</InputLabel>
          <Input id="name-simple" value={this.state.username} onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </FormControl>
        </form>}
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
