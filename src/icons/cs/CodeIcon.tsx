import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import * as React from 'react';

export const CodeIcon = ({ fontSize, color }: SvgIconProps) => (
    <SvgIcon fontSize={fontSize}>
        <svg width="16" height="16" viewBox="0 0 16 16">
            <path
                fill={color}
                stroke-width="50"
                d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
            />
        </svg>
    </SvgIcon>
);

export default CodeIcon;
