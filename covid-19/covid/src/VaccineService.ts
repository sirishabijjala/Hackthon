import axios from 'axios';

// Define the structure of the vaccineResponse
export interface VaccineResponse {
    location: string;
    timeline: number;
}

// Function to fetch vaccine data from the API
export const getVaccineData = async (location: string): Promise<VaccineResponse> => {
    const results = await axios.get(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${location}?lastdays=1`);
    return {
        location: results.data.country,
        timeline: results.data.timeline,
    };
}
