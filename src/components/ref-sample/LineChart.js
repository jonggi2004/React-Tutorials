import React, { Component } from 'react';

class LineChart extends Component {

    chart = null;

    draw() {
        if(this.chart) {
            this.chart.destroy();
            this.chart = null;
        }

        const { data, pair } = this.props;

        const config = {
            type: "line",
            data: {
                labels: data.map(d=> d.date),
                datasets: [
                    {
                        label: "price",
                        data: data.map(d => d.value),
                        fill: false,
                        backgroundcolor: 'blue',
                        lineTension: 0,
                        pointRadius: 0,
                    }
                ]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: `${pair} 24hr Chart`
                },
                tooltips: {
                    mode: "index",
                    intersect: false
                },
                hover: {
                    mode: "nearest",
                    intersetct: true
                }
            }
        };

        const ctx = this.canvas.getContext("2d");
        //this.chart = new Chart(ctx, config);
    }

    componentDidMount() {
        this.draw();
    }

    componentDidUpdate(preProps, preState) {
        if(preProps.data !== this.props.data) {
            this.draw();
        }
    }

    componentWillUnmount() {
        // 컴포넌트가 사라질때 인스턴스 제거
        if(this.chart) {
            this.chart.destroy();
        }
    }

    render() {
        return (
            <div className="LineChart">
                <canvas ref={ref => this.canvas = ref} />
            </div>
        );
    }
}

export default LineChart;