
export const FETCH_LAUNCHES = 'fetch_launches';
export const fetchLaunches = (page=0, filters ={}) => async (dispatch, getState, api) => {
  
  let listEndPoint = `https://api.spacexdata.com/v3/launches/?page=${page}`;\
  if (filters.launchSuccess) {
    listEndPoint += `&launch_success=${filters.launchSuccess}`;
  }
  if (filters.landSuccess) {
    listEndPoint += `&land_success=${filters.landSuccess}`;
  }
  if (filters.launchYear) {
    listEndPoint += `&launch_year=${filters.launchYear}`;
  }
  const res = await api.get(listEndPoint);
  dispatch({
    type: FETCH_LAUNCHES,
    payload: res
  });
};
