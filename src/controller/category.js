import axios from "axios"

export const getCategoryData = async (category, market, country, partnerType) => {
    try {
        const response = await axios.post(process.env.REACT_APP_DOMAIN + `/stock_status/getCategories?categoryType=${category}`, {
            "market": market,
            "country": country,
            "partnerType": partnerType
        });
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

export const getCategoryDataShareofSite = async (category, market, country, partnerType) => {
    try {
        const response = await axios.post(process.env.REACT_APP_DOMAIN + `/digital_shelf/getCategories?categoryType=${category}`, {
            "market": market,
            "country": country,
            "partnerType": partnerType
        });
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

export const getCategoryDataPDPContent = async (category, market, country, partnerType) => {
    try {
        const response = await axios.post(process.env.REACT_APP_DOMAIN + `/best_practices/getCategories?categoryType=${category}`, {
            "market": market,
            "country": country,
            "partnerType": partnerType
        });
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}