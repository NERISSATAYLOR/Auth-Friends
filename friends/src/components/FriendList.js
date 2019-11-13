import React from 'react';
import Loader from 'react-loader-spinner';
import axiosWithAuth from './axiosAuth';
import AddFriends from './AddFriends';
class FriendsList extends React.Component {
  state = {
    friends: []
  };
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        // console.log(res)
        this.setState({
          friends: res.data

        });
      })
      .catch(err => console.log(err));
  };


  render() {
    // const friends = this.formatData();
    // console.log(friends);
    return (
      <div>
        <AddFriends />
        <p>Looking for Friends</p>

        {this.props.fetchingData && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )},

            <div className="friends">
          <h2>My Friends</h2>
          {this.state.friends.map(friend => (
            <div key={friend.id}>
              <p>Name: {friend.name}</p>
              <p>Age: {friend.age}</p>
              <p>email: {friend.email}</p>
            </div>

          ))}
        </div>
      </div>
    );
  };
}





export default FriendsList;
