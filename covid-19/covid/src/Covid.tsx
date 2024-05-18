import React, { useEffect, useState } from "react";
import { getCovidData, CovidResponse } from './CovidService';
import './Covid.css'
export const Covid: React.FC = (): JSX.Element => {
    const [country, setCountry] = useState<string>("India");
    const [covidResponse, setCovidResponse] = useState<CovidResponse>();

    useEffect(() => {
        const fetchCovidData = async () => {
            const result = await getCovidData(country);
            setCovidResponse(result);
        };
        fetchCovidData();
    }, [country]);

    return (
       
        <div className="container">
            <h1>COVID-19</h1>
            <select value={country} onChange={(e) => { setCountry(e.target.value) }}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Brazil">Brazil</option>
                <option value="China">china</option>
                <option value="Russia">Russia</option>
            </select>
            <p>Country: {covidResponse?.country}</p>
            <p>Cases: {covidResponse?.cases}</p>
            <p>Deaths: {covidResponse?.deaths}</p>
            <p>Recovered: {covidResponse?.recovered}</p>
            <p>Active: {covidResponse?.active}</p>
        </div>
    );
};
