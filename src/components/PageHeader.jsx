import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class PageHeader extends Component {
  render() {
    let styles = {backgroundSize: 'cover', backgroundPosition: 'center'};
    if (this.props.image) styles.backgroundImage = `url(${this.props.image})`;
    return (
      <div>
        <div className="page-header bg-primary text-white py-5" style={styles}>
          <div className="container py-5">
            <h1 className="display-5 font-weight-bold">
            {this.props.root
            ? <Link to={this.props.root} className='link-unset'>{this.props.title}</Link>
            : this.props.title
            }
            </h1>
          </div>
        </div>
        <div hidden={!this.props.lead}>
          <div className="container py-4">
            <div className="col-md-7 px-0">
              <p className="text-muted h5">{this.props.lead}</p>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    );
  }
}

export default PageHeader;