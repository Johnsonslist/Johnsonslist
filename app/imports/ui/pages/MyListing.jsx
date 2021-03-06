import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Listings } from '/imports/api/listings/Listing';
import Listing from '/imports/ui/components/Listing';
import { withTracker } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { _ } from 'meteor/underscore';
import { Container, Grid, Menu, Input, Sidebar } from 'semantic-ui-react';
import TitleBar from '../components/TitleBar';
import Footer from '../components/Footer';

class MyListings extends Component {
  state = {
    animation: 'push',
    direction: 'left',
    dimmed: false,
    visible: true,
  }

  componentDidMount() {
    if (this.props.location.state !== undefined) {
      this.setState({ value: this.props.location.state });
      this.setState({ search: this.props.location.state });
    }
  }

  constructor() {
    super();
    this.state = {
      search: '',
      value: '',
      sidebar: true,
      clothing: false,
      electronics: false,
      dormitory: false,
      school: false,
      outdoors: false,
      men: false,
      women: false,
      top: false,
      bottom: false,
      shoes: false,
      caccessories: false,
      laptops: false,
      photography: false,
      eaccessories: false,
      television: false,
      games: false,
      self: false,
      appliances: false,
      decor: false,
      plants: false,
      sports: false,
      camping: false,
      transportation: false,
      recreation: false,
      stationery: false,
      backpacks: false,
      textbooks: false,
      page: 1,
      listingsPerPage: 5,
    };
  }

  setPageNum = (event, { activePage }) => {
    this.setState({ page: activePage });
  };

  showClothing() {
    this.searchReset();
    this.setState({ clothing: !this.state.clothing });
    this.setState({ page: 1 });
  }

  showMen() {
    this.searchReset();
    this.setState({ men: !this.state.men });
    this.setState({ page: 1 });
  }

  showWomen() {
    this.searchReset();
    this.setState({ women: !this.state.women });
    this.setState({ page: 1 });
  }

  showTop() {
    this.searchReset();
    this.setState({ top: !this.state.top });
    this.setState({ page: 1 });
  }

  showBottom() {
    this.searchReset();
    this.setState({ bottom: !this.state.bottom });
    this.setState({ page: 1 });
  }

  showShoes() {
    this.searchReset();
    this.setState({ shoes: !this.state.shoes });
    this.setState({ page: 1 });
  }

  showCaccessories() {
    this.searchReset();
    this.setState({ caccessories: !this.state.caccessories });
    this.setState({ page: 1 });
  }

  showElectronics() {
    this.searchReset();
    this.setState({ electronics: !this.state.electronics });
    this.setState({ page: 1 });
  }

  showLaptops() {
    this.searchReset();
    this.setState({ laptops: !this.state.laptops });
    this.setState({ page: 1 });
  }

  showPhotography() {
    this.searchReset();
    this.setState({ photography: !this.state.photography });
    this.setState({ page: 1 });
  }

  showEaccessories() {
    this.searchReset();
    this.setState({ eaccessories: !this.state.eaccessories });
    this.setState({ page: 1 });
  }

  showTelevision() {
    this.searchReset();
    this.setState({ television: !this.state.television });
    this.setState({ page: 1 });
  }

  showGames() {
    this.searchReset();
    this.setState({ games: !this.state.games });
    this.setState({ page: 1 });
  }

  showDormitory() {
    this.searchReset();
    this.setState({ dormitory: !this.state.dormitory });
    this.setState({ page: 1 });
  }

  showSelf() {
    this.searchReset();
    this.setState({ self: !this.state.self });
    this.setState({ page: 1 });
  }

  showAppliances() {
    this.searchReset();
    this.setState({ appliances: !this.state.appliances });
    this.setState({ page: 1 });
  }

  showDecor() {
    this.searchReset();
    this.setState({ decor: !this.state.decor });
    this.setState({ page: 1 });
  }

  showPlants() {
    this.searchReset();
    this.setState({ plants: !this.state.plants });
    this.setState({ page: 1 });
  }

  showOutdoors() {
    this.searchReset();
    this.setState({ outdoors: !this.state.outdoors });
    this.setState({ page: 1 });
  }

  showSports() {
    this.searchReset();
    this.setState({ sports: !this.state.sports });
    this.setState({ page: 1 });
  }

  showCamping() {
    this.searchReset();
    this.setState({ camping: !this.state.camping });
    this.setState({ page: 1 });
  }

  showTransportation() {
    this.searchReset();
    this.setState({ transportation: !this.state.transportation });
    this.setState({ page: 1 });
  }

  showRecreation() {
    this.searchReset();
    this.setState({ recreation: !this.state.recreation });
    this.setState({ page: 1 });
  }

  showSchool() {
    this.searchReset();
    this.setState({ school: !this.state.school });
    this.setState({ page: 1 });
  }

  showStationery() {
    this.searchReset();
    this.setState({ stationery: !this.state.stationery });
    this.setState({ page: 1 });
  }

  showBackpacks() {
    this.searchReset();
    this.setState({ backpacks: !this.state.backpacks });
    this.setState({ page: 1 });
  }

  showTextbooks() {
    this.searchReset();
    this.setState({ textbooks: !this.state.textbooks });
    this.setState({ page: 1 });
  }

  updateValue(event) {
    // console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  handleClick(e) {
    if (e.key === 'Enter') {
      this.setState({ search: this.state.value });
    }
  }

  handleButton() {
    this.setState({ search: this.state.value });
  }

  searchReset() {
    this.setState({ value: '' });
    this.setState({ search: '' });
    this.setState({ clothing: false });
    this.setState({ electronics: false });
    this.setState({ dormitory: false });
    this.setState({ outdoors: false });
    this.setState({ school: false });
    this.setState({ men: false });
    this.setState({ women: false });
    this.setState({ top: false });
    this.setState({ bottom: false });
    this.setState({ shoes: false });
    this.setState({ caccessories: false });
    this.setState({ laptops: false });
    this.setState({ photography: false });
    this.setState({ eaccessories: false });
    this.setState({ television: false });
    this.setState({ games: false });
    this.setState({ self: false });
    this.setState({ appliances: false });
    this.setState({ decor: false });
    this.setState({ plants: false });
    this.setState({ sports: false });
    this.setState({ camping: false });
    this.setState({ transportation: false });
    this.setState({ recreation: false });
    this.setState({ stationery: false });
    this.setState({ backpacks: false });
    this.setState({ textbooks: false });
    this.setState({ page: 1 });
  }

  handleAnimationChange =
      (animation) => () => this.setState((prevState) => ({ animation, visible: !prevState.visible }))

  render() {

    const VerticalSidebar = ({ animation, direction }) => (
        <Sidebar
            id='sidebar'
            as={Menu}
            animation={animation}
            direction={direction}
            vertical
            visible
            width='thin'
        >
          <p className='side-bar-main-item'>Main Categories</p>
          <a onClick={this.showClothing.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showClothing.bind(this)}>
              Clothing
              ({(this.props.listings.filter((items) => items.categories === 'clothing')).length})
            </p>
          </a>
          <a onClick={this.showElectronics.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showElectronics.bind(this)}>
              Electronics
              ({(this.props.listings.filter((items) => items.categories === 'electronics')).length})
            </p>
          </a>
          <a onClick={this.showDormitory.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showDormitory.bind(this)}>
              Dormitory
              ({(this.props.listings.filter((items) => items.categories === 'dormitory')).length})
            </p>
          </a>
          <a onClick={this.showOutdoors.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showOutdoors.bind(this)}>
              Outdoors
              ({(this.props.listings.filter((items) => items.categories === 'outdoors')).length})
            </p>
          </a>
          <a onClick={this.showSchool.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showSchool.bind(this)}>
              School
              ({(this.props.listings.filter((items) => items.categories === 'school')).length})
            </p>
          </a>
          <p className='side-bar-main-item'>Clothing</p>
          <a onClick={this.showMen.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showMen.bind(this)}>
              Men
              ({(this.props.listings.filter((items) => _.contains((items.clothes), 'men'))).length})
            </p>
          </a>
          <a onClick={this.showWomen.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showWomen.bind(this)}>
              Women
              ({(this.props.listings.filter((items) => _.contains((items.clothes), 'women'))).length})
            </p>
          </a>
          <a onClick={this.showTop.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showTop.bind(this)}>
              Tops
              ({(this.props.listings.filter((items) => _.contains((items.clothes), 'top'))).length})
            </p>
          </a>
          <a onClick={this.showBottom.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showBottom.bind(this)}>
              Bottoms
              ({(this.props.listings.filter((items) => _.contains((items.clothes), 'bottom'))).length})
            </p>
          </a>
          <a onClick={this.showShoes.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showShoes.bind(this)}>
              Shoes
              ({(this.props.listings.filter((items) => _.contains((items.clothes), 'shoes'))).length})
            </p>
          </a>
          <a onClick={this.showCaccessories.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showCaccessories.bind(this)}>
              Accessories
              ({(this.props.listings.filter((items) => _.contains((items.clothes), 'accessories'))).length})
            </p>
          </a>
          <p className='side-bar-main-item'>Electronics</p>
          <a onClick={this.showLaptops.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showLaptops.bind(this)}>
              Computers
              ({(this.props.listings.filter((items) => _.contains((items.electronics), 'computers'))).length})
            </p>
          </a>
          <a onClick={this.showPhotography.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showPhotography.bind(this)}>
              Photography
              ({(this.props.listings.filter((items) => _.contains((items.electronics), 'photography'))).length})
            </p>
          </a>
          <a onClick={this.showEaccessories.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showEaccessories.bind(this)}>
              Accessories
              ({(this.props.listings.filter((items) => _.contains((items.electronics), 'accessories'))).length})
            </p>
          </a>
          <a onClick={this.showTelevision.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showTelevision.bind(this)}>
              Television
              ({(this.props.listings.filter((items) => _.contains((items.electronics), 'television'))).length})
            </p>
          </a>
          <a onClick={this.showGames.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showGames.bind(this)}>
              Games
              ({(this.props.listings.filter((items) => _.contains((items.electronics), 'games'))).length})
            </p>
          </a>
          <p className='side-bar-main-item'>Dormitory</p>
          <a onClick={this.showSelf.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showSelf.bind(this)}>
              Self Care
              ({(this.props.listings.filter((items) => _.contains((items.dormitory), 'self care'))).length})
            </p>
          </a>
          <a onClick={this.showAppliances.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showAppliances.bind(this)}>
              Appliances
              ({(this.props.listings.filter((items) => _.contains((items.dormitory), 'appliances'))).length})
            </p>
          </a>
          <a onClick={this.showDecor.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showDecor.bind(this)}>
              Home Decor
              ({(this.props.listings.filter((items) => _.contains((items.dormitory), 'home decor'))).length})
            </p>
          </a>
          <a onClick={this.showPlants.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showPlants.bind(this)}>
              Plants
              ({(this.props.listings.filter((items) => _.contains((items.dormitory), 'plants'))).length})
            </p>
          </a>
          <p className='side-bar-main-item'>Outdoors</p>
          <a onClick={this.showSports.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showSports.bind(this)}>
              Sports & Fitness
              ({(this.props.listings.filter((items) => _.contains((items.outdoors), 'sports & fitness'))).length})
            </p>
          </a>
          <a onClick={this.showCamping.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showCamping.bind(this)}>
              Camping & Hiking
              ({(this.props.listings.filter((items) => _.contains((items.outdoors), 'camping & hiking'))).length})
            </p>
          </a>
          <a onClick={this.showTransportation.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showTransportation.bind(this)}>
              Transportation
              ({(this.props.listings.filter((items) => _.contains((items.outdoors), 'transportation'))).length})
            </p>
          </a>
          <a onClick={this.showRecreation.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showRecreation.bind(this)}>
              Recreation
              ({(this.props.listings.filter((items) => _.contains((items.outdoors), 'recreation'))).length})
            </p>
          </a>
          <p className='side-bar-main-item'>School</p>
          <a onClick={this.showStationery.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showStationery.bind(this)}>
              Stationery
              ({(this.props.listings.filter((items) => _.contains((items.school), 'stationery'))).length})
            </p>
          </a>
          <a onClick={this.showBackpacks.bind(this)}>
            <p className='side-bar-items'
               onClick={this.showBackpacks.bind(this)}>
              Backpacks
              ({(this.props.listings.filter((items) => _.contains((items.school), 'backpacks'))).length})
            </p>
          </a>
        </Sidebar>
    );

    VerticalSidebar.propTypes = {
      animation: PropTypes.string,
      direction: PropTypes.string,
      visible: PropTypes.bool,
    };

    const { animation, dimmed, direction, visible } = this.state;
    const vertical = direction === 'bottom' || direction === 'top';

    let filteredItems = this.props.listings.filter(
        (items) => items.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
            items.categories.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1,
    );

    if (this.state.clothing) {
      filteredItems = filteredItems.filter((items) => items.categories === 'clothing');
    }

    if (this.state.men) {
      filteredItems = filteredItems.filter((items) => _.contains((items.clothes), 'men'));
    }

    if (this.state.women) {
      filteredItems = filteredItems.filter((items) => _.contains((items.clothes), 'women'));
    }

    if (this.state.top) {
      filteredItems = filteredItems.filter((items) => _.contains((items.clothes), 'top'));
    }

    if (this.state.bottom) {
      filteredItems = filteredItems.filter((items) => _.contains((items.clothes), 'bottom'));
    }

    if (this.state.shoes) {
      filteredItems = filteredItems.filter((items) => _.contains((items.clothes), 'shoes'));
    }

    if (this.state.caccessories) {
      filteredItems = filteredItems.filter((items) => _.contains((items.clothes), 'accessories'));
    }

    if (this.state.electronics) {
      filteredItems = filteredItems.filter((items) => items.categories === 'electronics');
    }

    if (this.state.laptops) {
      filteredItems = filteredItems.filter((items) => _.contains((items.electronics), 'computers'));
    }

    if (this.state.photography) {
      filteredItems = filteredItems.filter((items) => _.contains((items.electronics), 'photography'));
    }

    if (this.state.eaccessories) {
      filteredItems = filteredItems.filter((items) => _.contains((items.electronics), 'accessories'));
    }

    if (this.state.television) {
      filteredItems = filteredItems.filter((items) => _.contains((items.electronics), 'television'));
    }

    if (this.state.games) {
      filteredItems = filteredItems.filter((items) => _.contains((items.electronics), 'games'));
    }

    if (this.state.dormitory) {
      filteredItems = filteredItems.filter((items) => items.categories === 'dormitory');
    }

    if (this.state.self) {
      filteredItems = filteredItems.filter((items) => _.contains((items.dormitory), 'self care'));
    }

    if (this.state.appliances) {
      filteredItems = filteredItems.filter((items) => _.contains((items.dormitory), 'appliances'));
    }

    if (this.state.decor) {
      filteredItems = filteredItems.filter((items) => _.contains((items.dormitory), 'decor'));
    }

    if (this.state.plants) {
      filteredItems = filteredItems.filter((items) => _.contains((items.dormitory), 'plants'));
    }

    if (this.state.outdoors) {
      filteredItems = filteredItems.filter((items) => items.categories === 'outdoors');
    }

    if (this.state.sports) {
      filteredItems = filteredItems.filter((items) => _.contains((items.outdoors), 'sports & fitness'));
    }

    if (this.state.camping) {
      filteredItems = filteredItems.filter((items) => _.contains((items.outdoors), 'camping & hiking'));
    }

    if (this.state.transportation) {
      filteredItems = filteredItems.filter((items) => _.contains((items.outdoors), 'transportation'));
    }

    if (this.state.recreation) {
      filteredItems = filteredItems.filter((items) => _.contains((items.outdoors), 'recreation'));
    }

    if (this.state.school) {
      filteredItems = filteredItems.filter((items) => items.categories === 'school');
    }

    if (this.state.stationery) {
      filteredItems = filteredItems.filter((items) => _.contains((items.school), 'stationery'));
    }

    if (this.state.backpacks) {
      filteredItems = filteredItems.filter((items) => _.contains((items.school), 'backpacks'));
    }

    let title;
    if (this.state.clothing === true) {
      title = 'CLOTHING';
    } else if (this.state.electronics === true) {
      title = 'ELECTRONICS';
    } else if (this.state.dormitory === true) {
      title = 'DORMITORY';
    } else if (this.state.outdoors === true) {
      title = 'OUTDOORS';
    } else if (this.state.school === true) {
      title = 'SCHOOL';
    } else if (this.state.men === true) {
      title = 'CLOTHING: MEN';
    } else if (this.state.women === true) {
      title = 'CLOTHING: WOMEN';
    } else if (this.state.top === true) {
      title = 'CLOTHING: TOPS';
    } else if (this.state.bottom === true) {
      title = 'CLOTHING: BOTTOMS';
    } else if (this.state.shoes === true) {
      title = 'CLOTHING: SHOES';
    } else if (this.state.caccessories === true) {
      title = 'CLOTHING: ACCESSORIES';
    } else if (this.state.laptops === true) {
      title = 'ELECTRONICS: COMPUTERS';
    } else if (this.state.photography === true) {
      title = 'ELECTRONICS: PHOTOGRAPHY';
    } else if (this.state.eaccessories === true) {
      title = 'ELECTRONICS: ACCESSORIES';
    } else if (this.state.television === true) {
      title = 'ELECTRONICS: TELEVISION';
    } else if (this.state.games === true) {
      title = 'ELECTRONICS: GAMES';
    } else if (this.state.self === true) {
      title = 'DORMITORY: SELF CARE';
    } else if (this.state.appliances === true) {
      title = 'DORMITORY: APPLIANCES';
    } else if (this.state.decor === true) {
      title = 'DORMITORY: HOME DECOR';
    } else if (this.state.plants === true) {
      title = 'DORMITORY: PLANTS';
    } else if (this.state.sports === true) {
      title = 'OUTDOORS: SPORTS & FITNESS';
    } else if (this.state.camping === true) {
      title = 'OUTDOORS: CAMPING & HIKING';
    } else if (this.state.transportation === true) {
      title = 'OUTDOORS: TRANSPORTATION';
    } else if (this.state.recreation === true) {
      title = 'OUTDOORS: RECREATION';
    } else if (this.state.stationery === true) {
      title = 'SCHOOL: STATIONERY';
    } else if (this.state.backpacks === true) {
      title = 'SCHOOL: BACKPACKS';
    } else {
      title = 'ALL LISTINGS';
    }

    const cardStyle = {
      paddingTop: '30px',
      // paddingLeft: '100px',
      marginBottom: '50px !important',
    };
    const pageStyle = { paddingTop: '20px' };
    const searchStyle = { paddingLeft: '100px', paddingRight: '100px' };

    return (
        <div className='background'>
          <TitleBar/>
          <div id='store-test'>

            <div id='store-headline'>
              <p>YOUR LISTINGS: {title}</p>
            </div>
            <Grid>
              <Grid.Column width={3}>
                <a onClick={this.searchReset.bind(this)}>
                  <p className='side-bar-items' id='all-items-button'
                     onClick={this.searchReset.bind(this)}>
                    View All Listings
                    ({(this.props.listings.filter((items) => items)).length})
                  </p>
                </a>
              </Grid.Column>
              <Grid.Column width={13} style={searchStyle}>
                <div id='store-search'>
                  <Input
                      type='text'
                      value={this.state.value}
                      fluid
                      size='large'
                      onChange={this.updateValue.bind(this)}
                      onKeyPress={this.handleClick.bind(this)}
                      placeholder='Search...'
                      action={{ icon: 'search', onClick: () => this.handleButton() }}
                  />
                </div>
              </Grid.Column>
            </Grid>
            <div id='store-content'>
              <Container fluid style={pageStyle}>
                <Sidebar.Pushable>
                  {vertical ? null : (
                      <VerticalSidebar
                          animation={animation}
                          direction={direction}
                          visible={visible}
                      />
                  )}

                  <Sidebar.Pusher dimmed={dimmed && visible}>
                    <Grid>
                      {/* eslint-disable-next-line react/jsx-key */}
                      {filteredItems.map((listings) => <Grid.Column width={4} style={cardStyle}>
                            <Listing
                                key={listings._id}
                                listings={listings}/>
                          </Grid.Column>)}
                    </Grid>
                  </Sidebar.Pusher>
                </Sidebar.Pushable>
              </Container>
            </div>
          </div>
          <Footer/>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
MyListings.propTypes = {
  listings: PropTypes.array.isRequired,
  location: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('MyListings');
  return {
    listings: Listings.find({}).fetch(),
    ready: subscription.ready(),
  };
})(MyListings);
