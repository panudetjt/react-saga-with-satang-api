import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Ticker {
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

const initialState = {
  ticker: {} as Partial<Ticker>,
}

const symbolTickerSlice = createSlice({
  name: 'symbol-ticker',
  initialState,
  reducers: {
    startFetch(state, action: PayloadAction<string>) {},
    stopFetch(state) { },
    setTicker(state, action: PayloadAction<any>) {
      state.ticker = action.payload
    }
  }
})

export const { startFetch, stopFetch, setTicker } = symbolTickerSlice.actions

export default symbolTickerSlice.reducer