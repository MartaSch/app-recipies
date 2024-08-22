import React from "react";
import IconsSvg from './icons.svg';

const Svg = ({className, icon}) => (
    <svg className={className}>
        <use href={`${IconsSvg}#${icon}`}></use>
    </svg>
);
export default Svg;
