import React from 'react';


class Ticket extends React.Component {
  constructor(props) {
    super(props);

    this.onTicketClick = this.onTicketClick.bind(this);
  }

  onTicketClick = (event) => {
    window.location = '/tickets/' + this.props.id
  }

  render () {
    return(
      <tr onClick={this.onTicketClick}>
        <td>{this.props.id.substring(this.props.id.length - 6, this.props.id.length).toUpperCase()}</td>
        <td>{this.props.requestor}</td>
        <td>{this.props.desc}</td>
        <td>{this.props.author}</td>
        <td>{this.props.created.split('T')[0]}</td>
        <td>{this.props.due.split('T')[0]}</td>
      </tr>
    );
  }
}

export default Ticket;