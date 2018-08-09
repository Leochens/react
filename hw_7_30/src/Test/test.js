import React, { Component } from 'react';

import TestActionSheet from './WeUI/TestActionSheet';
import TestDialog from './WeUI/TestDialog';
import TestProgress from './WeUI/TestProgress';
import TestSlider from './WeUI/TestSlider';
import TestSwitch from './WeUI/TestSwitch';

export default class Test extends Component {
    render() {
        return (
            <div>
                <TestActionSheet />
                {/* <TestProgress /> */}
                {/* <TestSlider/> */}
                {/* <TestDialog /> */}
                {/* <TestSwitch /> */}
            </div>
        )
    }
}