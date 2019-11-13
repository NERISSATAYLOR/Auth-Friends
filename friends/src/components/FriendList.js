import React from "react";

import Loader from "react-loader-spinner";
import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: sessionStorage.getItem("token")
    }
  });
};

class FriendList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
    if (!sessionStorage.getItem("token")) {
      console.error("Please Login!!!");
    } else {
      console.info("We are logged in");
    }
  }

  // getData = () => {
  //   const authAxios = axiosWithAuth();
  //   authAxios
  //     .get("https://lambda-fake-auth.herokuapp.com/api/data")
  //     .then(response => {
  //       this.setState({ gasPrices: response.data.data });
  //     });
  // };
  getData = () => {
    fetch("http://localhost:5000/api/friends", {
      headers: { authorization: sessionStorage.getItem("token") }
    })
      .then(res => res.json())
      .then(response => {
        this.setState({ friends: response.data });
      });
  };

  
  render() {
    

    return (
  
              <div className="top-title">FriendList

        
        
        {this.props.fetchingData && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}
        
              <div>
                {friends && friends.map(friend => (
                  <div key={friend.id} className="friend">
 
                      <p>{friend.name}</p>
                    </div>
                    
                    
                
               
                ))}
              </div>
            </div>
   
        )}
     
                }

export default FriendList;
