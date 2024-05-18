import axios from 'axios';

export interface CovidResponse {
    country: string;
    cases: number;
    deaths: number;
    recovered: number;
    active: number;
}

export const getCovidData = async (country: string): Promise<CovidResponse> => {
    const results = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`);
    return {
        country: results.data.country,
        cases: results.data.cases,
        deaths: results.data.deaths,
        recovered: results.data.recovered,
        active: results.data.active
    };
}
