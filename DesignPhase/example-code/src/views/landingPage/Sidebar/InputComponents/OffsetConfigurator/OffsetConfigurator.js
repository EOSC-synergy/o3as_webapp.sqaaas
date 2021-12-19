import React, { useState } from "react";
import ReferenceYearSlider from "../ReferenceYearSlider/ReferenceYearSlider";
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentPlotType } from "../../../../../store/plotSlice";
import { current } from "@reduxjs/toolkit";

/**
 * enables the user to select a referenceYear, referenceModel and to toggle an offset according to those two inputs
 * @param {*} props 
 *  props.defaultRefernceModel -> the default value for reference model
 *  props.defaultReferenceYear -> the default value for reference year
 *  props.allVisibleModels -> all visible models to choose reference model from
 *  props.offsetVisible -> whether the offset is currently visible or not
 * @returns a jsx containing a referenceYearSlider, a referenceModelSelector and a button to toggle the offset
 */
function OffsetConfigurator(props) {
    
    let i = props.currReferenceModel;
    i = props.currReferenceYear;
    i = props.allVisibleModels;
    i = props.offsetVisible;

    i = props.error;

    const currentPlotType = selectCurrentPlotType()
    const referenceData = useSelector(state => state.reference[currentPlotType])

    // handle changes: dispatch actions accordingly

    return (
        <>
            <ReferenceYearSlider />
            <button />
        </>
    );
}

export default OffsetConfigurator;