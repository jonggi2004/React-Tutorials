import React, { Component } from 'react';
import moment from 'moment'
import axios from 'axios'
import Buttons from './Buttons';
import LineChart from './LineChart'

class ChartSample extends Component {
    state = {
        pair: 'BTCUSD',
        data: []
    }

    handleChangePair = pair => {
        this.setState({ pair });
    }

    getData = async () => {
        const { pair } = this.state;
        try {
            const response = await axios.get(`https://api.bitfinex.com/v2/candles/trade:5m:t${pair}/hist?limit=288`);
            // [ MTS, OPEN, CLOSE, HIGH, LOW, VOLUME ]
            const data = response.data.map(
                (candle => ({
                    date: moment(candle[0]).format('LT'),   // 시간만 나타나도록 설정
                    value: candle[2]
                }))
            ).reverse();    // 역순으로 받게되어 반대로 소팅
            
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        // 첫 로딩시에 getData 호출
        this.getData();
    }

    componentDidUpdate(preProps, preState) {
        // pair 값이 바뀔때 getData 호철
        if(preState.pair !== this.state.pair){
            this.getData();
        }
    }
    render() {
        return (
            <div className='Chart'>
                <Buttons onChangePair={this.handleChangePair} />
                {/* 데이터가 없으면 렌더링 하지 않음 */}
                {this.state.data.length > 0 && <LineChart data={this.state.data} pair={this.state.pair} />}
            </div>
        );
    }
}

export default ChartSample;