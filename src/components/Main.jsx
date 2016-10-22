import React, {Component} from 'react';
import Actions from '../../src/actions/Actions';
import Store from '../../src/stores/Store';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FlatButton from 'material-ui/FlatButton';
import {cyanA200} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';
import Footer from '../../src/components/Footer.jsx';
import Nav from '../../src/components/Nav.jsx';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import ReactDOM from 'react-dom';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import {cyanA100} from 'material-ui/styles/colors';
// import {cyan400} from 'material-ui/styles/colors';
// import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
// import IconButton from 'material-ui/IconButton';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import ReactCSSTransitionGroup from 'react-addons-transition-group';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const styles = {
    container: {
        textAlign: 'center'
    },
    card: {
        width: 200,
        float: 'left'
    },
    circlePaper: {
        height: 200,
        width: 200,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
        cursor: 'pointer',
    },
};

const InfoCard = () => (
    <Card>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
        </CardActions>
    </Card>
);

var Main = React.createClass({
    state: {
        open: false
    },

    handleRequestClose: function() {
        this.setState({
            open: false,
        });
    },

    getInitialState: function() {
        return Store.get();
    },

    handleChange: function() {
        Actions.set(this.state.value);
    },

    handleTouchTap: function(text) {
        this.setState({
            open: true,
            dialogText: text
        });
    },

    render: function() {
        const standardActions = (
          <FlatButton
            label="Ok"
            primary={true}
            onTouchTap={this.handleRequestClose}
          />
        );

        return (
            <MuiThemeProvider muiTheme={getMuiTheme({
                palette: {
                    primary1Color: cyanA200
                },
            })}>
                <div style={styles.container}>

                    <Nav label="Surfing" url="/surfing" outline="" />

                    <Dialog
                        className='dialog'
                        open={this.state.open}
                        title="Sports"
                        actions={standardActions}
                        onRequestClose={this.handleRequestClose}>
                        {this.state.dialogText}
                    </Dialog>

                    <div className="clear"></div>

                    <div className="hero">
                        <div className="hero-inner">
                            <h1 className="hero-title">RecoveryX</h1>
                        </div>
                    </div>

                    <div className="circles-block" ref="circles">
                        <div className="circle-block">
                            <Paper
                                className="surfboard-card main-card"
                                onTouchTap={this.handleTouchTap.bind(null, 'blah')}
                                style={styles.circlePaper} zDepth={2}
                                circle={true}>
                            </Paper>
                            <div>Sports</div>
                        </div>

                        <div className="circle-block">
                            <Paper
                                className="cleanup-card main-card"
                                onTouchTap={this.handleTouchTap.bind(null, 'blah')}
                                style={styles.circlePaper} zDepth={2}
                                circle={true}>
                            </Paper>
                            <div>Service</div>
                        </div>

                        <div className="circle-block">
                            <Paper
                                className="twelve-card main-card"
                                onTouchTap={this.handleTouchTap.bind(null, 'blah')}
                                style={styles.circlePaper} zDepth={2}
                                circle={true}>
                            </Paper>
                            <div>Steps</div>
                        </div>
                    </div>

                    <div className="main-info-wrapper card-margin-top">
                        <InfoCard/>
                    </div>

                    <Footer/>
                </div>
            </MuiThemeProvider>
        );
    }
});

module.exports = Main;
