import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Grid, Header, Container, Image, Divider, Label, Button, Icon } from 'semantic-ui-react';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Listings } from '/imports/api/listings/Listing';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { Link, NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';

/** Renders the Page for adding a document. */
class ItemPage extends React.Component {

  handleClick() {
    Listings.remove(this.props.listings._id);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    const pageStyle = { paddingTop: '20px' };
    const formStyle = { paddingTop: '75px', paddingBottom: '50px' };
    const spaceStyle = { paddingTop: '10px' };
    const labelStyle = { marginBottom: '5px',
      marginRight: '5px',
      marginTop: '0px',
      marginLeft: '5px' };

    return (
        <div>
          <TitleBar/>
          <Container style={pageStyle}>
            <Grid container style={formStyle} columns={2}>
              <Grid.Column>
                <Image className='itemPageImage' src={this.props.listings.image}/>
              </Grid.Column>
              <Grid.Column>
                <Header as="h2">{this.props.listings.name}</Header>
                <Header.Subheader>by {this.props.listings.owner}</Header.Subheader>
                <Header.Subheader>Contact me at: {this.props.listings.email}</Header.Subheader>
                <Header.Subheader style={spaceStyle}>
                  <Label color='teal'>{this.props.listings.categories}</Label>
                  {this.props.listings.categories === 'clothing' ?
                      _.map(this.props.listings.clothes,
                          (clothes, index) => <Label style={labelStyle}
                                                     key={index} color='red'>{clothes}</Label>)
                      : '' }
                  {this.props.listings.categories === 'electronics' ?
                      _.map(this.props.listings.electronics,
                          (electronics, index) => <Label style={labelStyle}
                                                         key={index} color='red'>{electronics}</Label>)
                      : '' }
                  {this.props.listings.categories === 'dormitory' ?
                      _.map(this.props.listings.dormitory,
                          (dormitory, index) => <Label style={labelStyle}
                                                       key={index} color='red'>{dormitory}</Label>)
                      : '' }
                  {this.props.listings.categories === 'outdoors' ?
                      _.map(this.props.listings.outdoors,
                          (outdoors, index) => <Label style={labelStyle}
                                                      key={index} color='red'>{outdoors}</Label>)
                      : '' }
                  {this.props.listings.categories === 'school' ?
                      _.map(this.props.listings.school,
                          (school, index) => <Label style={labelStyle}
                                                    key={index} color='red'>{school}</Label>)
                      : '' }
                  {this.props.listings.owner === Meteor.user().username ||
                  Roles.userIsInRole(Meteor.userId(), 'admin') ?
                  <Button as={NavLink} exact to='/store' id='delete' animated color='black'>
                    <Button.Content visible>
                      <Icon name='trash alternate' inverted/>
                    </Button.Content>
                    <Button.Content hidden onClick={this.handleClick.bind(this)}>Delete</Button.Content>
                  </Button>
                  : '' }
                </Header.Subheader>
                <Divider fluid/>
                <Header.Subheader>List Price: ${this.props.listings.price}</Header.Subheader>
                <Header.Subheader>Condition: {this.props.listings.condition}</Header.Subheader>
                <Header.Subheader style={spaceStyle}>{this.props.listings.description}</Header.Subheader>
                <div style={spaceStyle}>
                  {this.props.listings.owner !== Meteor.user().username ?
                      <NavLink
                          to='/notif'
                          exact
                          activeClassName=''>
                        Report Listing
                      </NavLink>
                      : ''}
                </div>
                <div style={spaceStyle}>
                  {this.props.listings.owner === Meteor.user().username ?
                      <Link to={`/edit/${this.props.listings._id}`}>Edit</Link>
                      : ''}
                </div>
              </Grid.Column>
            </Grid>
          </Container>
          <Footer/>
        </div>
    );
  }
}

/** Declare the types of all properties. */
ItemPage.propTypes = {
  listings: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// this is required to make the name show up
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  const documentId = match.params._id;
  const subscription = Meteor.subscribe('Listings');
  return {
    listings: Listings.findOne(documentId),
    ready: subscription.ready(),
  };
})(ItemPage);
