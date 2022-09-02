import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allCountries } from '../../redux/countries/countries';
import { allCities } from '../../redux/cities/cities';
import '../../assets/appointmentForm.css';

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
      <div className="form-group dropdn">
        <select className="form-control form-data" name="country" value={countries.id} onChange={ChangeState}>
          <option>Select Country</option>
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
        <select className="form-control slct form-data" name="city_id" value={cities.id}>
          <option>Select Cities</option>
          {cities.map((city) => <option key={city.id} value={city.id}>{city.name}</option>)}
        </select>
      </div>
    </div>
  );
};

export default Cities;
