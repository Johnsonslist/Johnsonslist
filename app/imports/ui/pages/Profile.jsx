import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Listings } from '/imports/api/listings/Listing';
import Listing from '/imports/ui/components/Listing';
import { withTracker } from 'meteor/react-meteor-data';
import { Container, Image, Grid, Menu } from 'semantic-ui-react';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';

/** Renders the Page for adding a document. */
class Profile extends React.Component {

  constructor() {
    super();
    this.state = {
      profile: true,
      listings: false,
      saved: false,
    };
  }

  showProfile() {
    this.setState({ profile: true });
    this.setState({ listings: false });
    this.setState({ saved: false });
  }

  showListings() {
    this.setState({ listings: !this.state.listings });
    this.setState({ profile: false });
    this.setState({ saved: false });
  }

  showSaved() {
    this.setState({ saved: !this.state.saved });
    this.setState({ profile: false });
    this.setState({ listings: false });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {

    const cardStyle = {
      paddingTop: '50px',
      // paddingLeft: '100px',
    };

    return (
        <div>
          <TitleBar/>
          <div id='prof-page'>
            <div id='prof-top'>
            <Container>
              <Grid>
                <Grid.Column width={5}>
             <Image id='profile-image' src='/images/matthew.png' size='small' circular/>
                </Grid.Column>
              </Grid>
            </Container>
            </div>
            <div id='prof-middle'>
              <Menu id='prof-menu'>
                <Menu.Item>
                  <p className='profile-words'>{this.props.currentFirst}</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='profile-words'>{this.props.currentUser}</p>
                </Menu.Item>
                <Menu.Item>
                  <p className='profile-words'>{this.props.currentEmail}</p>
                </Menu.Item>
                <Menu.Item>
                  <p id='prof-about'
                     className='profile-words'
                     onClick={this.showProfile.bind(this)}>About</p>
                </Menu.Item>
                <Menu.Item>
                  <p id='prof-listings'
                     className='profile-words'
                     onClick={this.showListings.bind(this)}>Listings</p>
                </Menu.Item>
                <Menu.Item>
                  <p id='prof-saved'
                     className='profile-words'
                     onClick={this.showSaved.bind(this)}>Saved</p>
                </Menu.Item>
              </Menu>
            </div>
            <div id='prof-bottom'>
            {this.state.profile === true ?
            <div>
              <p>ABOUT TEST TEST TEST TEST TEST TEST TEST</p>
            </div>
            : '' }
            {this.state.listings === true ?
                <Grid>
                  {this.props.listings.map((listings) => <Grid.Column key={listings._id} width={4} style={cardStyle}>
                    <Listing
                        listings={listings}/>
                  </Grid.Column>)}
                </Grid>
            : '' }
            {this.state.saved === true ?
                <Grid>
                  {this.props.listings.map((listings) => <Grid.Column key={listings._id} width={4} style={cardStyle}>
                    <Listing
                        listings={listings}/>
                  </Grid.Column>)}
                </Grid>
            : '' }
          </div>
        </div>
        <Footer/>
        </div>
    );
  }
}

/** Declare the types of all properties. */
Profile.propTypes = {
  currentUser: PropTypes.string,
  currentFirst: PropTypes.string,
  currentLast: PropTypes.string,
  items: PropTypes.string,
  currentEmail: PropTypes.string,
  listings: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// this is required to make the name show up
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const ProfileContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
  currentEmail: Meteor.user() ? Meteor.user().emails[0].address : '',
  currentFirst: Meteor.user() ? Meteor.user().profile.first : '',
  currentLast: Meteor.user() ? Meteor.user().profile.last : '',
}))(Profile);

export default withTracker(() => {
  // Get access to Stuff documents.
  const sub1 = Meteor.subscribe('MyListings');
  const sub2 = Meteor.subscribe('Favorites');
  return {
    listings: Listings.find({}).fetch(),
    ready: sub1.ready() && sub2.ready(),
  };

})(ProfileContainer);
