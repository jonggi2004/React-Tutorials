import React from 'react';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import './index.css'
import { SampleProvider } from '../../contexts/sample';
import { AnotherProvider } from '../../contexts/another';
import Counter from './Counter'
//import { AnotherProvider } from '../../contexts/another2';
//import Counter2 from './Counter2';

const AppProvider = ({ contexts, children }) => contexts.reduce(
    (prev, context) => React.createElement(context, {
        children: prev
    }),
    children
);

const ContextApp = () => {
    return (
        <AppProvider
            contexts={[SampleProvider, AnotherProvider]}
        >
            <div className="panes">
                <LeftPane />
                <RightPane />
            </div>
            <Counter />
            {/* <Counter2 /> */}
        </AppProvider>

        // <SampleProvider>
        //     <AnotherProvider>
        //         <div className="panes">
        //             <LeftPane />
        //             <RightPane />
        //         </div>
        //     </AnotherProvider>
        // </SampleProvider>
    );
};

export default ContextApp;