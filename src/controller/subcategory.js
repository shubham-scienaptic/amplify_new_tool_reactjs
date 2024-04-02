import axios from "axios"

export const getSubCategoryData = async (category1, market, country, partnerType, category) => {
    try {
        const response = await axios.post(process.env.REACT_APP_DOMAIN + `/stock_status/getSubCategories?categoryType=${category1}`, {
            "market": market,
            "country": country,
            "partnerType": partnerType,
            "category": category
        });
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

export const getSubCategoryDataShareOfSite = async (category1, market, country, partnerType, category) => {
    try {
        const response = await axios.post(process.env.REACT_APP_DOMAIN + `/digital_shelf/getSubCategories?categoryType=${category1}`, {
            "market": market,
            "country": country,
            "partnerType": partnerType,
            "category": category
        });
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

export const getSubCategoryDataPDPContent = async (category1, market, country, partnerType, category) => {
    try {
        const response = await axios.post(process.env.REACT_APP_DOMAIN + `/best_practices/getSubCategories?categoryType=${category1}`, {
            "market": market,
            "country": country,
            "partnerType": partnerType,
            "category": category
        });
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}