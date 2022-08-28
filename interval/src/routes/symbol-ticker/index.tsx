import { Button, Card, Space, Statistic, Typography } from "antd";
import { PropsWithChildren, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSymbol24hr } from "services/satang";
import { RootState } from "store";
import { decrement, increment, incrementAsync, startFetch, stopFetch } from "./slice";

const { Title, Paragraph } = Typography;

interface Detail {
    symbol: string;
    lastPrice: string;
    volume: string;
}

function numberWithCommas(x: number | string) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export default function SymbolTicker() {
    const state = useSelector((state: RootState) => state.symbolTicker)
    const dispatch = useDispatch()
    const params = useParams();
    const { symbol = "" } = params;
    useEffect(() => {
        dispatch(stopFetch());
        dispatch(startFetch(symbol));
    }, [symbol]);
    return (
        <Card>
            <Statistic title={state?.ticker.symbol?.toUpperCase()} value={state?.ticker.lastPrice} />
            <Paragraph>Volume: {numberWithCommas(state?.ticker.volume || 0)}</Paragraph>
        </Card>
    )
}