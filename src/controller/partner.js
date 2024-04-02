import axios from "axios"

export const getPartnersData = async (category, market, country, partnerType) => {
    try {
        const response = await axios.post(process.env.REACT_APP_DOMAIN + `/stock_status/getPartnerNames?categoryType=${category}`, {
            "market": market,
            "country": country,
            "partnerType": partnerType
        });
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

export const getPartnersDataShareOfSite = async (category, market, country, partnerType) => {
    try {
        const response = await axios.post(process.env.REACT_APP_DOMAIN + `/digital_shelf/getPartnerNames?categoryType=${category}`, {
            "market": market,
            "country": country,
            "partnerType": partnerType
        });
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

export const getPartnersDataPDPContent = async (category, market, country, partnerType) => {
    try {
        const response = await axios.post(process.env.REACT_APP_DOMAIN + `/best_practices/getPartnerNames?categoryType=${category}`, {
            "market": market,
            "country": country,
            "partnerType": partnerType
        });
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}