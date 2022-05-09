import React from 'react'

export default class App extends React.Component {
  // componentDidMount() {
  //   $('<h1 />')
  //     .text('Hello world from JQuery')
  //     .css({
  //       textAlign: 'center',
  //       color: 'pink'
  //     })
  //     .appendTo($('header'))
  // }
  
  render() {
    return (
    <React.Fragment>
      <header></header>

      <hr />

      <div className="box">
        <h2 className="box-title">Box title</h2>

        <p className="box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, neque. Doloremque cum accusantium architecto quia nobis aliquid nemo quidem rem.</p>
      </div>
    </React.Fragment>
    )
  }
}