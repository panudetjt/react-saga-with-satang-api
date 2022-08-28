import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SocketTicker, Ticker } from "interfaces/Ticker"

interface SymbolTickerState {
  ticker: Partial<Ticker> | Record<string, never>;
  contentLoading: boolean;
}
const initialState: SymbolTickerState = {
  ticker: {},
  contentLoading: false,
}

const symbolTickerSlice = createSlice({
  name: 'symbol-ticker',
  initialState,
  reducers: {
    startFetch(state, action: PayloadAction<string>) { },
    stopFetch(state) { },
    setTicker(state, action: PayloadAction<Ticker>) {
      state.ticker = action.payload
    },
    setTickerFromSocket(state, action: PayloadAction<SocketTicker>) {
      const { s, q, c } = action.payload;
      state.ticker = { symbol: s, volume: q, lastPrice: c };
    }
  }
})

export const { startFetch, stopFetch, setTicker, setTickerFromSocket } = symbolTickerSlice.actions

export default symbolTickerSlice.reducer