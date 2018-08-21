import React, { Component } from 'react';
import TestDialog from './WeUI/TestDialog';
import TestActionSheet from './WeUI/TestActionSheet';
import TestProgress from './WeUI/TestProgress';
import TestSlider from './WeUI/TestSlider';
import TestSwitch from './WeUI/TestSwitch';
// import './test.less';




function promise() {
    return new Promise((resolve, reject) => {
        if (0) {
            resolve(1)
        } else {
            reject(0)
        }
    })
}
async function hello() {
    try {
        const x = await promise();
        console.log('reslove', x);
    } catch (err) {
        console.log('reject', err);
    }


    console.log('hahahaah');
}

export default class Test extends Component {
    render() {
        hello();
        return (
            <div className="xxxxxxx">
                {/* <h3>渲染ActionSheet请单独打开</h3> */}
                {/* <TestDialog />
                <TestActionSheet />
                <TestProgress />
                <TestSlider/>
                <TestSwitch /> */}
            </div>
        )
    }
}