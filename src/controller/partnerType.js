import axios from "axios"

export const getPartnerTypeData = async (category, market, country) => {
    try {
        const response = await axios.get(process.env.REACT_APP_DOMAIN + `/stock_status/getPartnerTypeByMarketCountry?categoryType=${category}&market=${market}&country=${country}`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

export const getPartnerTypeDataShareOfSite = async (category, market, country) => {
    try {
        const response = await axios.get(process.env.REACT_APP_DOMAIN + `/digital_shelf/getPartnerTypeByMarketCountry?categoryType=${category}&market=${market}&country=${country}`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

export const getPartnerTypeDataPDPContent = async (category, market, country) => {
    try {
        const response = await axios.get(process.env.REACT_APP_DOMAIN + `/best_practices/getPartnerTypeByMarketCountry?categoryType=${category}&market=${market}&country=${country}`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

