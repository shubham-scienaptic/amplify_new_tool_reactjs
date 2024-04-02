import axios from "axios";

export const getBestPracticesData = async (categoryType, market, country, partnerType, partner, category, subcategory, sku, startDate, endDate, current, pageSize) => {
    try {
        const response = await axios.post(process.env.REACT_APP_DOMAIN + `/best_practices/getScreenshotDetails?categoryType=${categoryType}&pageNo=${current - 1}&pageSize=${pageSize}`, {
            "country": country,
            "mpnModel": sku,
            "market": market,
            "category": category,
            "subCategory": subcategory,
            "scrapeStartDate": startDate,
            "scrapeEndDate": endDate,
            "partnerType": partnerType,
            "partnerName": partner
        });
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

export const getDigitalSelfData = async (categoryType, market, country, partnerType, partner, category, subcategory, sku, startDate, endDate, current, pageSize) => {
    try {
        const response = await axios.post(process.env.REACT_APP_DOMAIN + `/digital_shelf/getScreenshotDetails?categoryType=${categoryType}&pageNo=${current - 1}&pageSize=${pageSize}`, {
            "country": country,
            "keywordId": sku,
            "market": market,
            "category": category,
            "subCategory": subcategory,
            "scrapeStartDate": startDate,
            "scrapeEndDate": endDate,
            "partnerType": partnerType,
            "partnerName": partner
        });
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

export const getStockStatusData = async (categoryType, market, country, partnerType, partner, category, subcategory, sku, startDate, endDate, current, pageSize) => {
    try {
        const response = await axios.post(process.env.REACT_APP_DOMAIN + `/stock_status/getScreenshotDetails?categoryType=${categoryType}&pageNo=${current - 1}&pageSize=${pageSize}`, {
            "country": country,
            "mpnModel": sku,
            "market": market,
            "category": category,
            "subCategory": subcategory,
            "scrapeStartDate": startDate,
            "scrapeEndDate": endDate,
            "partnerType": partnerType,
            "partnerName": partner
        });
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}