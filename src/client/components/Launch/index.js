import React from 'react';
import PropTypes from 'prop-types';

const index = props => {
  
  const { launch } = props;
  const { mission_name, mission_id, launch_year, launch_success, flight_number } = launch;
  const mission_patch_small = (launch.links && launch.links.mission_patch_small)?launch.links.mission_patch_small:''
  
 const land_success = launch.rocket && launch.rocket.first_stage && launch.rocket.first_stage.cores && launch.rocket.first_stage.cores[0].land_success ? launch.rocket.first_stage.cores[0].land_success.toString(): "false"
  return (
      
            <div className="spacex-launch-wrapper__launch-tile">
              {console.log(mission_name)}
              <div className="spacex-launch-wrapper__image-wrapper">
              <img 
                className="spacex-launch-wrapper__image" 
                src={mission_patch_small} 
                alt={mission_name} 
                title={mission_name} />
              </div>
              <h2 className="spacex-launch-wrapper__mission-title">{mission_name} #{flight_number}</h2>
              <div className="spacex-launch-wrapper__list">
                <label>Mission Ids: </label>
                <ul className="spacex-launch-wrapper__items">
                  { mission_id && mission_id.length > 0 ? mission_id.map( (mId, Index) => <li className="spacex-launch-wrapper__items-list" key={Index}> {mId} </li> ) : ''}
                  </ul>
              </div>
              <div className="spacex-launch-wrapper__list">
                <label>Launch Year: </label>
                <span className="spacex-launch-wrapper__item">{launch_year}</span>
              </div>
              <div className="spacex-launch-wrapper__list">
                <label>Successful Launch: </label>
                <span className="spacex-launch-wrapper__item">{launch_success ? launch_success.toString() : 'false'}</span>
              </div>
              <div className="spacex-launch-wrapper__list">
                <label>Successful Landing: </label>
                <span className="spacex-launch-wrapper__item">{land_success}</span>
              </div>
            </div>
    
  );
};
index.propTypes = {
  launch: PropTypes.object,
};

export default index;
