import axios from 'axios';

export interface NeighbourResponse {
    country: string;
    cases: number;
    deaths: number;
    recovered: number;
    active: number;
}

export const getneighbourData = async (country: string): Promise<NeighbourResponse> => {
    const results = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);
    return {
        country: results.data.country,
        cases: results.data.cases,
        deaths: results.data.deaths,
        recovered: results.data.recovered,
        active: results.data.active
    };
}
