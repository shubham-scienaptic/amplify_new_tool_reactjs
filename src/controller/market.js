import axios from "axios"

export const getMarketData = async (category) => {
    try {
        const response = await axios.get(process.env.REACT_APP_DOMAIN + `/stock_status/getMarkets?categoryType=${category}`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

export const getMarketDataShareOfSite = async (category) => {
    try {
        const response = await axios.get(process.env.REACT_APP_DOMAIN + `/digital_shelf/getMarkets?categoryType=${category}`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

export const getMarketDataPDPContent = async (category) => {
    try {
        const response = await axios.get(process.env.REACT_APP_DOMAIN + `/best_practices/getMarkets?categoryType=${category}`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}