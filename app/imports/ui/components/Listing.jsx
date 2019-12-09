import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Image, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link, NavLink } from 'react-router-dom';
// import { Roles } from 'meteor/alanning:roles';

/** Renders a single row in the List Listing table. See pages/MyListing.jsx. */
class Listing extends React.Component {
  render() {
    return (
        <Link
        to={`/details/${this.props.listings._id}`}>
        <Card
            link
            className='limitCard'
            centered>
          <Image
              centered
              className='cardImage'
              size='small'
              src={this.props.listings.image}
          />
          <Card.Content>
            <Card.Header style={{ paddingBottom: '10px' }}>{this.props.listings.name}</Card.Header>
            <Card.Meta>Condition: {this.props.listings.condition}</Card.Meta>
            <Card.Meta>Price: ${this.props.listings.price}</Card.Meta>
            <Card.Meta>Contact Info: {this.props.listings.email}</Card.Meta>
            <Card.Meta style={{ paddingTop: '10px' }}>
              <Label color='teal'>{this.props.listings.categories}</Label>
              <Label color='red'>{this.props.listings.clothes}</Label>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Card.Meta>
              {this.props.listings.owner}
              {this.props.listings.owner !== Meteor.user().username ?
                    <NavLink
                        id='report'
                        to='/notif'
                        exact
                        activeClassName=''>
                    Report Listing
                    </NavLink>
              : '' }
              {this.props.listings.owner === Meteor.user().username ?
              <Link className='edit' to={`/edit/${this.props.listings._id}`}>Edit</Link>
              : '' }
            </Card.Meta>
          </Card.Content>
        </Card>
    </Link>
    );
  }
}

/** Require a document to be passed to this component. */
Listing.propTypes = {
  listings: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Listing);