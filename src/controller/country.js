import axios from "axios"

export const getCountryData = async (category, market) => {
    try {
        const response = await axios.get(process.env.REACT_APP_DOMAIN + `/stock_status/getCountriesByMarket?categoryType=${category}&&market=${market}`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

export const getCountryDataShareOfSite = async (category, market) => {
    try {
        const response = await axios.get(process.env.REACT_APP_DOMAIN + `/digital_shelf/getCountriesByMarket?categoryType=${category}&&market=${market}`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

export const getCountryDataPDPContent = async (category, market) => {
    try {
        const response = await axios.get(process.env.REACT_APP_DOMAIN + `/best_practices/getCountriesByMarket?categoryType=${category}&&market=${market}`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}