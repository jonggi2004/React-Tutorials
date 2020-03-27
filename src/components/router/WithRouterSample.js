import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

// HoC(Higher-order Component): 라우터로 사용된 컴포넌트가 아니어도 match, location, history 객체에 접근

class WithRouterSample extends Component {
    render() {
        const {location, match, history} = this.props;

        return (
        <>
            <div style={{display: 'inline-block'}}>
                <h4>location</h4>
                <textarea
                    value={JSON.stringify(location, null, 2)}
                    rows={7}
                    readOnly={true}
                />
            </div>
            <div style={{display: 'inline-block'}}>
                <h4>match</h4>
                <textarea
                    value={JSON.stringify(match, null, 2)}
                    rows={7}
                    readOnly={true}
                />
            </div>
            <div>
                <button onClick={() => history.push('/')}>홈으로</button>
            </div>
        </>
        );
    }
}

export default withRouter(WithRouterSample);