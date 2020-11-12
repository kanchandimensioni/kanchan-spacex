import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLaunches } from '../actions';
import { Helmet } from 'react-helmet';
import Launch from '../components/Launch';

class Launches extends Component {
  componentDidMount() {
    this.props.fetchLaunches();
  }

  renderUsers() {
    return this.props.launches.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  head() {
    return (
      <Helmet>
        <title> Launches Loaded</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    const { launches } = this.props
    return (
      <div>
        {this.head()}
        <div className="spacex-launch-wrapper__card-wrapper">
          {launches
            && launches.map((launch, index) => {
              return <Launch key={index}  launch={launch} />;
            })}
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { launches: state.launches };
}

function loadData(store) {
  return store.dispatch(fetchLaunches());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchLaunches })(Launches)
};
