import React, { useEffect, useState } from "react";
import { getneighbourData, NeighbourResponse } from './NeighbourService';
import './Covid.css'
export const Covid: React.FC = (): JSX.Element => {
    const [country, setCountry] = useState<string>("India");
    const [nResponse, setResponse] = useState<NeighbourResponse>();

    useEffect(() => {
        const fetchCovidData = async () => {
            const result = await getneighbourData(country);
            setResponse(result);
        };
        fetchCovidData();
    }, [country]);

    return (
        <div className="container">
            <select value={country} onChange={(e) => { setCountry(e.target.value) }}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Brazil">Brazil</option>
            </select>
            <p>Country: {nResponse?.country}</p>
            <p>Cases: {nResponse?.cases}</p>
            <p>Deaths: {nResponse?.deaths}</p>
            <p>Recovered: {nResponse?.recovered}</p>
            <p>Active: {nResponse?.active}</p>
        </div>
    );
};
