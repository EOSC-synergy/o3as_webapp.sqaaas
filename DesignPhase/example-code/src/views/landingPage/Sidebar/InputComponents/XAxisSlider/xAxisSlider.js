import React, { useState } from "react";

/**
 * enables the user to zoom in and out of the x-axis
 * @param {*} props 
 *  props.defaultMin -> the default minimum value of the x-axis
 *  props.defaultMax -> the default maximum value of the x-axis
 *  props.min -> the smallest possible minimum value of the x-axis
 *  props.max -> the biggest possible maximum value of the x-axis
 * @returns a jsx containing a range slider
 */
export default function XAxisSlider(props) {
    
    props.min;
    props.max;
    props.error;

    // TODO: -> Redux
    props.currMin;
    props.currMax;
    props.changeMin;
    props.changeMax;
    
    return (
        <>
        </>
    );
}