import React, { Component, useState } from "react";
import images from "../constants/images";

const Context = React.createContext();

export class Provider extends Component {
    state = {
        reviews: [
            {
                id: 1,
                image: `${images.human1}`,
                reviews: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            },
            {
                id: 2,
                image: 'Šta je operativni lizing?',
                reviews: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
            },
            {
                id: 3,
                image: 'Šta je operativni lizing?',
                reviews: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'
            },
        ]
    }


    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer