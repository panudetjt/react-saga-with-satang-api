import { satang_api_url } from "configs/service"

export const getSymbol24hr = async (symbol: string) => {
    try {
        const resp = await fetch(`${satang_api_url}/v3/ticker/24hr?symbol=${symbol}`);
        const data = await resp.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export default {
    getSymbol24hr,
}