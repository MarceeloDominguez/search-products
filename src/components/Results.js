import React, { Component } from 'react'
import View from './View'
import '../css/view.css'

export default class Results extends Component {

    viewResults = () => {
        const items = this.props.items
        return (
            <section className='products'>
                <div className='container'>
                    {
                        items.map(item => (
                            <View item={item} key={item.id} />
                        ))
                    }
                </div>
            </section>
        )
    }

    render() {
        return (
            <div>
                { this.viewResults()}
            </div>
        )
    }
}
