import React from 'react';

import axiosWithAuth from './axiosAuth';
class AddFriends extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            id: '',
            name: '',
            age: '',
            email: ''
        };

    }





    // handleaAddFriend = event => {
    //     const { name, age, email } = this.state;
    //     this.state.makeFriend({ name, age, email });
    //     this.setState({ name: '', age: '', email: '' });
    // }


    handleChange = event => {

        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

        // const friend = { id: Date.now() };

        // const friends = [...friends, friend];


    }

    render() {
        const { id, name, age, email } = this.state
        return (
            <>
                <form onSubmit={this.handleSubmit} >
                    <input
                        type="number"
                        name="id"
                        value={id}
                        onChange={this.handleChange}
                        placeholder="id"
                    />
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        placeholder="name"
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="age"
                        value={age}
                        onChange={this.handleChange}

                    />
                    <input
                        type="email"
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Update Friend</button>

                </form>
            </>

        )
    }

}
export default AddFriends;