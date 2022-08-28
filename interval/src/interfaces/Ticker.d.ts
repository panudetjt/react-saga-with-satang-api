export interface Ticker {
    askPrice: string;
    bidPrice: string;
    closeTime: number;
    count: number;
    firstId: number;
    highPrice: string;
    lastId: number;
    lastPrice: string;
    lastQty: string;
    lowPrice: string;
    openPrice: string;
    openTime: number;
    prevClosePrice: string;
    priceChange: string;
    priceChangePercent: string;
    quoteVolume: string;
    symbol: string;
    volume: string;
    weightedAvgPrice: string;
}
export interface SocketTicker {
    E: number;         // Event time
    e: string;      // Event type
    s: string;             // Symbol
    c: string;           // Close price
    h: string;              // Highest price
    l: string;              // Lowest price
    o: string;     // Open price
    q: string;   // Total traded quote asset volume
    v: string;         // Total traded base asset volume
}