import React, {Component} from "react";
import PropTypes from "prop-types";
import Map from './map/Map.jsx'

class Itinerary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:this.props.name,
            events: []
        };
    }

/*     refrescar() {
        this.setState({
            comments:this.props.restaurant.comments
        }) 
    } */

/*      componentDidMount(){
    
        var quer= "/restaurant/"+this.props.restaurant.id+"/votes";
        console.log(quer);
        
    } */

/*     onSubmit(){
        var quer= "/restaurant/"+this.props.restaurant.id+"/comment"
        fetch(quer, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user_mail: this.state.mail,
              text: this.state.text,
              vote: this.state.rating
            })
          });
          this.refrescar();
    } */

   /*  handleEmailChange(e){
        this.setState({email: e.target.value});
     }
    handleText(e){
        this.setState({text: e.target.value});
     }
    handleRating(e){
        this.setState({rating: e.target.value});
    }
 */

    render() {
        return (
            <div>
                {this.props.name + "   number of restaurants to visit: " + this.state.events.length}
                <Map restaurants={this.state.events}/>
            </div>
        );
    }
}

/* Restaurant.PropTypes = {
    restaurant: PropTypes.object.isRequired
} */

export default Itinerary;