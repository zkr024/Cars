import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allCountries } from '../../redux/countries/countries';
import { allCities } from '../../redux/cities/cities';

const Cities = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const cities = useSelector((state) => state.cities);

  useEffect(() => {
    dispatch(allCountries());
  }, [dispatch]);

  const ChangeState = (e) => {
    dispatch(allCities(e.target.value));
  };

  return (
    <div>
      <h1>Country/City Component</h1>
      <div>
        <div className="row">
          <div className="col-sm-12 btn btn-info">
            Cascading Dropdown in ReactJS
          </div>
        </div>

        <div className="form-group dropdn">
          <select className="form-control" name="country" value={countries.id} onChange={ChangeState}>
            <option>Select Country</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          <select className="form-control slct" name="city" value={cities.id}>
            <option>Select Cities</option>
            {cities.map((city) => <option key={city.id} value={city.id}>{city.name}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Cities;
