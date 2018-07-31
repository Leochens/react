import React from 'react';
import { COLORS } from '../const/config';
export class ColorText extends React.Component {

    render() {
        const { text, type } = this.props;
        let color = '';
        let fontWeight = 600;
        switch (type) {
            case 'warning': {
                color = COLORS.WARRING;
                break;
            }
            case 'great': {
                color = COLORS.GREAT;
                break;
            }
            default: {
                color = COLORS.DEFAULT;
                break;
            }
        }
        return (
            <div style={{ color: color, fontWeight: fontWeight }}>
                {text}
            </div>
        )
    }
}