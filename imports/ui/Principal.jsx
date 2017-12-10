import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Map from './map/Map.jsx'
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import {Tabs, Tab} from 'material-ui/Tabs';
import "../api/foursquareAPI.js";
import RestaurantList from "./RestaurantList.jsx";
import ItinerariesList from "./ItinerariesList.jsx";
import DragDropContext from "./dnd.jsx";
import Newss from './News.jsx';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

//Temporarily store data here
const PostsData = [
  {
    "category": "News",
    "title": "CNN Acquire BEME",
    "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "Travel",
    "title": "Nomad Lifestyle",
    "text": "Learn our tips and tricks on living a nomadic lifestyle",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "Development",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  },
  {
    "category": "News",
    "title": "CNN Acquire BEME",
    "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "Travel",
    "title": "Nomad Lifestyle",
    "text": "Learn our tips and tricks on living a nomadic lifestyle",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "Development",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  }
]

// Principal component - represents Principal component
class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'a',
          currentLatitude : this.props.currentLatitude,
          currentLongitude : this.props.currentLongitude,
          nearRestaurants: this.props.nearRestaurants,
          itineraries: [],
<<<<<<< HEAD
          listRest:[]
=======
          events: []
>>>>>>> d7674ca9f77e86df96d42ef2cb9764c5c0298e50
        };
        
    }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  
  render() {
    //console.log(this.state);
    return (
      <div className="Principal NewsRestaurant"> 
      <div className = "NewsRestaurant">
        <Newss nearRestaurants={this.props.nearRestaurants}/> 
      </div>
        
        <Tabs
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        >
          <Tab label="Itineraries" value="b">
            <div>
              <h2 className="text-center" style={styles.headline}>Itineraries</h2>
              <p>
                here's where a list of Itineraries will show up
              </p>
              <ItinerariesList itineraries={this.state.itineraries}/>
              <DragDropContext events={this.state.events}/>
            </div>
          </Tab>
        </Tabs>
        <Map/>
      </div>
    );
  }
}
Principal.propTypes = {
};

export default Principal;