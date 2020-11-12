import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchLaunches } from '../../actions';
import * as CommonConstant from '../../../constants';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launchYear : '',
      launchSuccess: null,
      landStatus: null,
    };
  }
  onToggleHandler = (filterName, filterVal) => {
    let newState = {};
    const selIndex = filterVal ? 0 : 1;
    switch(filterName) {
      case 'launchYear':
        newState = { launchYear : filterVal};
      break;
      case 'launchSuccess':
        CommonConstant.filterTypes.launchSuccess[selIndex].class = 'selected';
        newState = { launchSuccess: filterVal };
      break;
      case 'landStatus' :
        CommonConstant.filterTypes.landStatus[selIndex].class = 'selected';
        newState = { landStatus: filterVal };
      break;
      default: 
        newState = { ...this.state,  
          launchYear : '',
          launchSuccess:  null,
          landStatus: null
        }
      }
    this.setState((prevState) => {
      return newState;
    }, 
    () => {
      const { launchYear, launchSuccess, landStatus} = this.state;
       this.props.filterLauncesByParams({launchYear, launchSuccess, landSuccess:landStatus});
      }
    )
  }

 
  render() {
  
    return (
        <section className="spacex-launch-wrapper__filter-container">
          <div className="spacex-launch-wrapper__filter-header">Filters <button className="spacex-launch-wrapper__clear-filter" onClick={() => this.onToggleHandler('', null)}>clear filters</button></div>
          <div className="spacex-launch-wrapper__filters">
            <h4 className="spacex-launch-wrapper__title">Launch Year</h4>
            <div className="spacex-launch-wrapper__filter-items">
              { CommonConstant.yearArr.map((yr, index) => {
                const selClass = this.state.launchYear == yr ? 'selected' : '';
                return (
                <button className={`spacex-launch-wrapper__filter-btn ${selClass}`} key={index} onClick = {() => this.onToggleHandler('launchYear', yr)}>
                 {yr} </button>
                )
              }) 
            }
            </div>
          </div>
          { Object.keys(CommonConstant.filterTypes).map((launch, indx) => {
            return (
              <div key={indx} className="spacex-launch-wrapper__filters">
              <h4 className="spacex-launch-wrapper__title">{CommonConstant.filterNames[launch]}</h4>
              <div  className="spacex-launch-wrapper__filter-items">
                { CommonConstant.filterTypes[launch].map((launchStatus, indx2) => {
                  const selClass = launchStatus.filterVal == this.state[launch] ? 'selected' : '';
                  return ( 
                  <button key={`${launchStatus}${indx2}`} className={`spacex-launch-wrapper__filter-btn ${selClass}`} onClick = {() => this.onToggleHandler(launch, launchStatus.filterVal)}>
                    {launchStatus.filterName}
                </button>)
                })}
               </div>
            </div>
            )
          })}
        
          
        </section>

     
    );
  }
}

Filter.propTypes = {
  filterLauncesByParams: PropTypes.func
};

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    filterLauncesByParams: (filters) => dispatch(fetchLaunches(0, filters))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
