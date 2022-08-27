import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allCountries } from '../../redux/countries/countries';
import { allCities } from '../../redux/cities/cities';

const Cities = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const cities = useSelector((state) => state.cities);

  const countryId = '1';
  // const { userId, carId } = useParams();
  // console.log('UserId '+ userId);
  // console.log('carId is ' + carId);
  useEffect(() => {
    dispatch(allCities(countryId));
    dispatch(allCountries());
  }, [dispatch]);

  return (
    <div>
      <h1>City Component</h1>
      <div>
        <div className="row">
          <div className="col-sm-12 btn btn-info">
            Cascading Dropdown in ReactJS
          </div>
        </div>

        <div className="form-group dropdn">
          <select
            className="form-control"
            name="country"
            value={countries}
            onChange={cities}
          >
            <option>Select Country</option>
            {countries.map((e, key) => (
              <option key={key} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>

          {/* <select
            className="form-control slct"
            name="state"
            value={cities.id}
            onChange={this.ChangeCity}
          >
            <label for="company">State Name</label>

            {this.state.StateData.map((e, key) => {
              return (
                <option key={key} value={e.StateId}>
                  {e.StateName}
                </option>
              );
            })}
          </select> */}
        </div>
      </div>
    </div>
  );
};

export default Cities;
