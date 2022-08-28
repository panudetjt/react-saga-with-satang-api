import { satang_api_url, satang_web_socket_url } from "configs/service"
import { SocketTicker, Ticker } from "interfaces/Ticker";
import { EventChannel, eventChannel } from "redux-saga";

export const getSymbol24hr = async (symbol: string): Promise<Ticker> => {
    try {
        const resp = await fetch(`${satang_api_url}/v3/ticker/24hr?symbol=${symbol}`);
        const data = await resp.json();
        return data;
    } catch (error) {
        throw error;
    }
}

interface GetMiniTickerStreamParams {
    updateSpeed: string;
}
export const getMiniTickerStream = ({ updateSpeed }: GetMiniTickerStreamParams = { updateSpeed: "@3000ms" }): EventChannel<SocketTicker[]> => {

    return eventChannel((emitter) => {

        const socket = new WebSocket(`${satang_web_socket_url}/!miniTicker@arr${updateSpeed}`);

        const onMessage = (message: MessageEvent<string>) => {
            emitter(JSON.parse(message.data));
        }

        socket.addEventListener("message", onMessage);

        return () => {
            socket.close();
            socket.removeEventListener("message", onMessage);
        }
    })
}

export default {
    getSymbol24hr,
}