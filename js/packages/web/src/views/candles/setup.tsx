// import { useStore, useWalletModal } from '@oyster/common';
// import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from 'antd';
// import { useCallback, useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useMeta } from '../../contexts';
import { Image } from 'antd';
import React, { useState } from 'react';
import {Row, Col, Divider,Layout, Steps, List,Table} from 'antd';

const dataSource = [
 {
            "order": "100",
            "name": "cryptoCANDLE|01-SOL-climb",
            "description": "SOL-USDT~climb to $57.60:  A 75 day view of the climb to the peak trading price of the SOL market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "SOL",
            "palette": "glow",
            "subset": "SOL-USDT-climb",
            "irange": "3-3-2021<->5-17-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "HWbAipNYmZgc6mnWsRb6rJBqq3w1DWgSYX9hhdTu3fRe"
        },
        {
            "order": "200",
            "name": "cryptoCANDLE|02-SOL-peak",
            "description": "SOL-USDT~peak at 57.6 (4-11-2021<->6-21-2021):  A 75 day view from the peak trading price of the SOL market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "SOL",
            "palette": "glow",
            "subset": "SOL-USDT-peak",
            "irange": "4-11-2021<->6-21-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "2ZcaB1NH6iBotYKprCNMsWq3tfmMb2dQYXEmk252TDkg"
        },
        {
            "order": "300",
            "name": "cryptoCANDLE|03-SOL-decent",
            "description": "SOL-USDT~decent from 57.6 (5-17-2021<->7-31-2021):  A 75 day view of the decent from the peak trading price of the SOL market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "SOL",
            "palette": "glow",
            "subset": "SOL-USDT-decent",
            "irange": "5-17-2021<->7-31-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "JBSEq7FT7Fww7mH5soFgWwL2o1RqAmzadH8wdexzyDxL"
        },
        {
            "order": "400",
            "name": "cryptoCANDLE|04-DOGE-climb",
            "description": "DOGE-USDT~climb to 0.73 (2-20-2021<->5-6-2021):  A 75 day view of the climb to the peak trading price of the DOGE market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "DOGE",
            "palette": "dred",
            "subset": "DOGE-USDT-climb",
            "irange": "2-20-2021<->5-6-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "5hKUn14DL5i1XdTTTCz6ZkHs5YDDrnJL8JwrvKXMuNoC"
        },
        {
            "order": "500",
            "name": "cryptoCANDLE|05-DOGE-peak",
            "description": "DOGE-USDT~peak at 0.73 (3-31-2021<->6-10-2021):  A 75 day view from the peak trading price of the DOGE market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "DOGE",
            "palette": "dred",
            "subset": "DOGE-USDT-peak",
            "irange": "3-31-2021<->6-10-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "9LCizsujJyUAfkLRBw4pkochn8t7ahjb4mUv3sJGPPLr",
            "Mint Authority": "Go1fz7tsGnoV2Rw46oZbPN7SxniyARUPpB5KzFbx4t2Q"
        },
        {
            "order": "600",
            "name": "cryptoCANDLE|06-DOGE-decent",
            "description": "DOGE-USDT~decent from 0.73 (5-6-2021<->7-20-2021):  A 75 day view of the decent from the peak trading price of the DOGE market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "DOGE",
            "palette": "dred",
            "subset": "DOGE-USDT-decent",
            "irange": "5-6-2021<->7-20-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "Agf48SSjAP6bktHpvfaNF126FewCV1ZTPhVgYy5kKhY2"
        },
        {
            "order": "700",
            "name": "cryptoCANDLE|07-LINK-climb",
            "description": "LINK-USDT~climb to 52.4 (2-22-2021<->5-8-2021):  A 75 day view of the climb to the peak trading price of the LINK market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "LINK",
            "palette": "duskCloud",
            "subset": "LINK-USDT-climb",
            "irange": "2-22-2021<->5-8-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "v11T4k5MpXa8rVC1JbhRGm6K6fqRZCYKBoJ7m3p3zf3"
        },
        {
            "order": "800",
            "name": "cryptoCANDLE|08-LINK-peak",
            "description": "LINK-USDT~peak at 52.4 (4-2-2021<->6-12-2021):  A 75 day view from the peak trading price of the LINK market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "LINK",
            "palette": "duskCloud",
            "subset": "LINK-USDT-peak",
            "irange": "4-2-2021<->6-12-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "CrfoHQXQenbr4kz5Fmq4ufNsZK8cpjPGsTD842xsDqDN"
        },
        {
            "order": "900",
            "name": "cryptoCANDLE|09-LINK-decent",
            "description": "LINK-USDT~decent from 52.4 (5-8-2021<->7-22-2021):  A 75 day view of the decent from the peak trading price of the LINK market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "LINK",
            "palette": "duskCloud",
            "subset": "LINK-USDT-decent",
            "irange": "5-8-2021<->7-22-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "8jYu5joABrASY8FeZvW5YKvbwJb6Pd6aMpNaon59tKXn"
        },
        {
            "order": "1000",
            "name": "cryptoCANDLE|10-LTC-climb",
            "description": "LTC-USDT~climb to 408 (2-22-2021<->5-8-2021):  A 75 day view of the climb to the peak trading price of the LTC market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "LTC",
            "palette": "plasmaPrp",
            "subset": "LTC-USDT-climb",
            "irange": "2-22-2021<->5-8-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "84ynigxmxBuB8oZzVueAoZhG3vchiSi5uRqDUKcvRAim"
        },
        {
            "order": "1100",
            "name": "cryptoCANDLE|11-LTC-peak",
            "description": "LTC-USDT~peak at 408 (4-2-2021<->6-12-2021):  A 75 day view from the peak trading price of the LTC market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "LTC",
            "palette": "plasmaPrp",
            "subset": "LTC-USDT-peak",
            "irange": "4-2-2021<->6-12-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "9soYdR4yHk5q6cFFNXmVX851z2gAjgbowrrTDCCrNzLL"
        },
        {
            "order": "1200",
            "name": "cryptoCANDLE|12-LTC-decent",
            "description": "LTC-USDT~decent from 408 (5-8-2021<->7-22-2021):  A 75 day view of the decent from the peak trading price of the LTC market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "LTC",
            "palette": "plasmaPrp",
            "subset": "LTC-USDT-decent",
            "irange": "5-8-2021<->7-22-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "ALeRV47snrPEo8eQtiTqr2eE8XGJ2zBoQRYm2nuXdzT7"
        },
        {
            "order": "1300",
            "name": "cryptoCANDLE|13-AAVE-climb",
            "description": "AAVE-USDT~climb to 660 (3-3-2021<->5-17-2021):  A 75 day view of the climb to the peak trading price of the AAVE market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "AAVE",
            "palette": "celestial",
            "subset": "AAVE-USDT-climb",
            "irange": "3-3-2021<->5-17-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "35xNQ5tKgmTmLyuN5LdrNVJUR3zNd7jSGcyCMCt1ESAv"
        },
        {
            "order": "1400",
            "name": "cryptoCANDLE|14-AAVE-peak",
            "description": "AAVE-USDT~peak at 660 (4-11-2021<->6-21-2021):  A 75 day view from the peak trading price of the AAVE market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "AAVE",
            "palette": "celestial",
            "subset": "AAVE-USDT-peak",
            "irange": "4-11-2021<->6-21-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "HCE6uvSnuEgTjkxv93414XT4qnwuRi3kpVFw4p1xMw7R"
        },
        {
            "order": "1500",
            "name": "cryptoCANDLE|15-AAVE-decent",
            "description": "AAVE-USDT~decent from 660 (5-17-2021<->7-17-2021):  A 75 day view of the decent from the peak trading price of the AAVE market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "AAVE",
            "palette": "celestial",
            "subset": "AAVE-USDT-decent",
            "irange": "5-17-2021<->7-17-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "2g8tNzk2x34WGfdBWYavVCV9N9kKfNhD7ZAcLK5EnZEJ"
        },
        {
            "order": "1600",
            "name": "cryptoCANDLE|16-BTC-climb",
            "description": "BTC-USDT~climb to 64600 (1-27-2021<->4-12-2021):  A 75 day view of the climb to the peak trading price of the BTC market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "BTC",
            "palette": "sunrise",
            "subset": "BTC-USDT-climb",
            "irange": "1-27-2021<->4-12-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "6hrsqdRcUFhqjU5tgVLnp4gU8WotFLVUrBf9bumuvmmV"
        },
        {
            "order": "1700",
            "name": "cryptoCANDLE|17-BTC-peak",
            "description": "BTC-USDT~peak at 64600 (3-7-2021<->5-17-2021):  A 75 day view from the peak trading price of the BTC market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "BTC",
            "palette": "sunrise",
            "subset": "BTC-USDT-peak",
            "irange": "3-7-2021<->5-17-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "6ctvBsEnYQtfLX7hXetJ36tu2Uf1Y3jjsQxdLuDpfduz"
        },
        {
            "order": "1800",
            "name": "cryptoCANDLE|18-BTC-decent",
            "description": "BTC-USDT~decent from 64600 (4-12-2021<->6-26-2021):  A 75 day view of the decent from the peak trading price of the BTC market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "BTC",
            "palette": "sunrise",
            "subset": "BTC-USDT-decent",
            "irange": "4-12-2021<->6-26-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "HR2i78qZG2tvEQCLmKax66dSk1CvNxgQFeXf1cDChhFm"
        },
        {
            "order": "1900",
            "name": "cryptoCANDLE|19-ADA-climb",
            "description": "ADA-USDT~climb to 2.44 (3-1-2021<->5-15-2021):  A 75 day view of the climb to the peak trading price of the ADA market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "ADA",
            "palette": "heavyWater",
            "subset": "ADA-USDT-climb",
            "irange": "3-1-2021<->5-15-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "6sGEaJE9fee7dhANWD3b3kFByiVkuZwsuVN8aZ6MpNfg"
        },
        {
            "order": "2000",
            "name": "cryptoCANDLE|20-ADA-peak",
            "description": "ADA-USDT~peak at 2.44 (4-9-2021<->6-19-2021):  A 75 day view from the peak trading price of the ADA market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "ADA",
            "palette": "heavyWater",
            "subset": "ADA-USDT-peak",
            "irange": "4-9-2021<->6-19-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "ATCpJWTkLYePHmfHf3HpQahqUEa3Ycp5CYixEw3jyVV4"
        },
        {
            "order": "2100",
            "name": "cryptoCANDLE|21-ADA-decent",
            "description": "ADA-USDT~decent from 2.44 (5-15-2021<->7-29-2021):  A 75 day view of the decent from the peak trading price of the ADA market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "ADA",
            "palette": "heavyWater",
            "subset": "ADA-USDT-decent",
            "irange": "5-15-2021<->7-29-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "DoERDSFamTPhJRGbrqSArXiH1ifpFPGAVpDCdy5amHnF"
        },
        {
            "order": "2200",
            "name": "cryptoCANDLE|22-ETH-climb",
            "description": "ETH-USDT~climb to 4358 (2-24-2021<->5-10-2021):  A 75 day view of the climb to the peak trading price of the ETH market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "ETH",
            "palette": "iceGlow",
            "subset": "ETH-USDT-climb",
            "irange": "2-24-2021<->5-10-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "DisFdLC2PHGjSQz1yS3zGYGQ5DtpEZ1feoWhNbwXbY25"
        },
        {
            "order": "2300",
            "name": "cryptoCANDLE|23-ETH-peak",
            "description": "ETH-USDT~peak at 4358 (4-4-2021<->6-14-2021):  A 75 day view from the peak trading price of the ETH market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "ETH",
            "palette": "iceGlow",
            "subset": "ETH-USDT-peak",
            "irange": "4-4-2021<->6-14-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "EMwmmHLsSjhprLieSyLTUBu9qbL4EBZuhjQ5SAzefJPr"
        },
        {
            "order": "2400",
            "name": "cryptoCANDLE|24-ETH-decent",
            "description": "ETH-USDT~decent from 4358 (5-10-2021<->7-24-2021):  A 75 day view of the decent from the peak trading price of the ETH market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "ETH",
            "palette": "iceGlow",
            "subset": "ETH-USDT-decent",
            "irange": "5-10-2021<->7-24-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "3CnhnpDzh9VmwhhtByWvtfMtX9uLUgt7YUYkgA2MQizP"
        },
        {
            "order": "2500",
            "name": "cryptoCANDLE|25-SUSHI-climb",
            "description": "SUSHI-USDT~climb to 23.3 (2-4-2021<->4-16-2021):  A 75 day view from the peak trading price of the SUSHI market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "SUSHI",
            "palette": "vaporwave",
            "subset": "SUSDTHI-USDT-climb",
            "irange": "2-4-2021<->4-16-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "9imZZUXKL2evj5LG1azjhmqaEYMvdMcrYtHHieMRpJU2"
        },
        {
            "order": "2600",
            "name": "cryptoCANDLE|26-SUSHI-peak",
            "description": "SUSHI-USDT-peak at 23.3 (3-12-2021<->5-26-2021):  A 75 day view of the decent from the peak trading price of the SUSHI market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "SUSHI",
            "palette": "vaporwave",
            "subset": "SUSDTHI-USDT-peak",
            "irange": "3-12-2021<->5-26-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "AZWrTX9pqVTw9wJ7oEuGMx1LFY3NkWjCFAAkgnSJ7GPH"
        },
        {
            "order": "2700",
            "name": "cryptoCANDLE|27-SUSHI-decent",
            "description": "SUSHI-USDT~decent from 23.3 (12-27-2021<->3-12-2021):  A 75 day view of the climb to the peak trading price of the SUSHI market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "SUSHI",
            "palette": "vaporwave",
            "subset": "SUSDTHI-USDT-decent",
            "irange": "12-27-2021<->3-12-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "EFMJ1WhyWe3PNjrUDKMgaphhCEsFhHsrsuLZ5tzYV4um"
        },
        {
            "order": "2800",
            "name": "cryptoCANDLE|28-ZEC-climb",
            "description": "ZEC-USDT~climb to 364 (3-31-2021<->6-10-2021):  A 75 day view from the peak trading price of the ZEC market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "ZEC",
            "palette": "moonGlow",
            "subset": "ZEC-USDT-climb",
            "irange": "3-31-2021<->6-10-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "89s5u6dfSQWFKVm7g4Ko1LqA8mupV8iv5z7325iYekuK"
        },
        {
            "order": "2900",
            "name": "cryptoCANDLE|29-ZEC-peak",
            "description": "ZEC-USDT-peak at 364 (5-6-2021<->7-20-2021):  A 75 day view of the decent from the peak trading price of the ZEC market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "ZEC",
            "palette": "moonGlow",
            "subset": "ZEC-USDT-peak",
            "irange": "5-6-2021<->7-20-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "Ccqz9qmwRvtrzT4w8H6uDsJPicMVegwENfY2R17bhzgw"
        },
        {
            "order": "3000",
            "name": "cryptoCANDLE|30-ZEC-decent",
            "description": "ZEC-USDT~decent from 364 (2-20-2021<->5-6-2021):  A 75 day view of the climb to the peak trading price of the ZEC market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "ZEC",
            "palette": "moonGlow",
            "subset": "ZEC-USDT-decent",
            "irange": "2-20-2021<->5-6-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Price",
            "address2": "68syawtJXFauUrqoo1ZpqDw1dPZx3ybBaKUWW3UxGt6T"
        },
        {
            "order": "3100",
            "name": "cryptoCANDLE|31-SOL-peak-TIME",
            "description": "SOL-USDT~peak at 57.6 (4-11-2021<->6-21-2021):   A 75 day view from the peak trading price of the SOL market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "SOL",
            "palette": "glow",
            "subset": "SOL-USDT-peak",
            "irange": "4-11-2021<->6-21-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Time",
            "Aberration": "6000x6000pxl",
            "address2": "5dJDozSqXiMf9UzLjJb7CiewLkya5sryS1kFggKGfnue"
        },
        {
            "order": "3200",
            "name": "cryptoCANDLE|32-SOL-peak-VOL",
            "description": "SOL-USDT~peak at 57.6 (4-11-2021<->6-21-2021):  A 75 day view from the peak trading price of the SOL market in the first 6 months of 2021.   The price and volume data over 30 min intervals is plotted and mathmatically transformed providing a glimpse of the complex relationships found within the numbers.",
            "gen": "0",
            "class": "cryptoCANDLE",
            "ticker": "SOL",
            "palette": "glow",
            "subset": "SOL-USDT-peak",
            "irange": "4-11-2021<->6-21-2021",
            "ivariable": "Time",
            "jvariable": "Price",
            "kvariable": "Volume",
            "view": "Volume",
            "Aberration": "6000x6000pxl",
            "address2": "3yPmaWRXdtp9kA9bijbfzptAp4MJEdmu5UEVKnZC1qHx"
        },

];

const columns = [

{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },

    {
    title: 'GEN',
    dataIndex: 'gen',
    key: 'gen',
  },

      {
    title: 'Ticker',
    dataIndex: 'ticker',
    key: 'ticker',
  },
  {
    title: 'Color Palette',
    dataIndex: 'palette',
    key: 'palette',
  },

            {
    title: 'Subset',
    dataIndex: 'subset',
    key: 'subset',
  },


    {
    title: 'I Range',
    dataIndex: 'irange',
    key: 'xrange',
  },
    {
    title: 'i Var',
    dataIndex: 'ivariable',
    key: 'ivariable',
  },
    {
    title: 'j Var',
    dataIndex: 'jvariable',
    key: 'jvariable',
  },
      {
    title: 'k Var',
    dataIndex: 'kvariable',
    key: 'kvariable',
  },


        {
    title: 'View',
    dataIndex: 'view',
    key: 'view',
      },
];



export const SetupView = () => {
  // const { store } = useMeta();
  // const history = useHistory();
  // const wallet = useWallet();
  // const { setVisible } = useWalletModal();
  // const connect = useCallback(
  //   () => (wallet.wallet ? wallet.connect().catch() : setVisible(true)),
  //   [wallet.wallet, wallet.connect, setVisible],
  // );

  return (
    <>
                    <h2 className="page-section-heading text-center text-uppercase text-white">CryptoCANDLES</h2>
               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '2rem' }}></div>

<Row>
<Col flex="0 0 0%"></Col>
 <Col flex="0 0 15%">
<div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '0.5rem' }}></div>
<img src="solanachart.png" alt="crypto" width="260" />

        </Col>
<Col flex="0 0 5%"></Col>
 <Col flex="1 0 35%">

Trading data turned inside out.

               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '1rem' }}></div>


Candles burning into pixels.
               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '1rem' }}></div>

For each of the 10 largest cryptocurrencies by market share, we pull 3,600 data points on price and volume at 30 minute intervals data from Binance.
               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '1rem' }}></div>

Our window covers the 75 days around each coin’s peak price so far in 2021, resulting in 32 individual subsets to build from.
               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '1rem' }}></div>

The PROT V4 algorithm then goes to work, warping these technical data into abstraction. Powered by over 13 million points, each image uniquely captures the raw intensity of the crypto movement.

        </Col>

<Col flex="1 0 3%"></Col>
 <Col flex="1 0 20%">

       <Image
        width={275}
        src="0000-XZ-torchOwt-Time-Price-Vol-90-70-WM.png"/>



        </Col>


</Row>
<Divider />

         <h3 className="page-section-heading text-center text-uppercase text-white">Dataset Metadata</h3>
                        <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '1rem' }}></div>


<Row>


<Col flex="1 0 40%">

        <a href="https://nhr3qvv4gtod3jxouayptkrbmuclfs2sx3atiw4zv62bispnf4wa.arweave.net/aeO4Vrw03D2m7qAw-aohZQSyy1K-wTRbma-0FEntLyw/?ext=html">
        <img
        width="675"
        src="candlesarweave.png"/></a>
</Col>
</Row>


               <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '2rem' }}></div>

         <h3 className="page-section-heading text-center text-uppercase text-white">Attribute Table</h3>
                        <div className="container d-flex align-items-center flex-column" style={{ width: '100%', marginTop: '1rem' }}></div>

<Row>

<Table dataSource={dataSource} columns={columns} />

</Row>
    </>
  );
};
