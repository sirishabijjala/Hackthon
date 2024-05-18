import React, { useEffect, useState } from "react";
import { getVaccineData, VaccineResponse } from './VaccineService';
import './Covid.css';

export const Vaccine: React.FC = (): JSX.Element => {
    const [location, setCountry] = useState<string>("India");
    const [vaccineResponse, setVaccineResponse] = useState<VaccineResponse | null>(null);

    useEffect(() => {
        const fetchVaccineData = async () => {
            const result = await getVaccineData(location);
            setVaccineResponse(result);
        };
        fetchVaccineData();
    }, [location]);

    return (
        <div className="container">
            <h1>Vaccination</h1>
            <select value={location} onChange={(e) => { setCountry(e.target.value) }}>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="china">China</option>
            </select>
            {vaccineResponse && (
                <>
                    <p>Country: {vaccineResponse.location}</p>
                    <p>Timeline: {JSON.stringify(vaccineResponse.timeline)}</p>
                </>
            )}
        </div>
    );
};
