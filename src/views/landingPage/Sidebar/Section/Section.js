import React, { useState } from "react";
import defaultStructure from '../../../../config/defaultConfig.json';
import LocationSelector from "../InputComponents/LatitudeBandSelector/LatitudeBandSelector";
import ModelGroupConfigurator from "../InputComponents/ModelGroupConfigurator/ModelGroupConfigurator";
import OffsetConfigurator from "../InputComponents/OffsetConfigurator/OffsetConfigurator";
import PlotNameField from "../InputComponents/PlotNameField/PlotNameField";
import ReferenceYearSlider from "../InputComponents/ReferenceYearSlider/ReferenceYearSlider";
import RegionSelector from "../InputComponents/RegionSelector/RegionSelector";
import TimeCheckBoxGroup from "../InputComponents/TimeCheckboxGroup/TimeCheckboxGroup";
import XAxisSlider from "../InputComponents/XAxisSlider/XAxisSlider";
import YAxisSlider from "../InputComponents/YAxisSlider/YAxisSlider";
import PropTypes from 'prop-types'; 
import LatitudeBandSelector from "../InputComponents/LatitudeBandSelector/LatitudeBandSelector";

/**
 * an expandable section containing a list of inputComponents as well as a name
 * @param {Object} props
 * @param {Array of String} props.components -> an array containing a string representation of all components that should be plotted
 * @param {String} props.name -> the name of the section
 * @param {function} props.reportError -> used for error handling
 * @param {boolean} props.isExpanded -> whether this section should be expanded
 * @param {function} props.onCollapse -> function to collapse this section
 * @param {function} props.onExpand -> function to expand this section
 * @returns {JSX} an accordeon that once expanded displays the components specified by the config files and the API doc
 */
function Section(props) {
    
    let i = props.components;
    i = props.key;
    i = props.name;
    i = props.reportError;
    i = props.isExpanded;
    i = props.onCollapse
    i = props.onExpand;
    

    /**
     * maps a given name to a corresponding component from the ./InputComponents folder
     * if there is no component with the given name, calls the props.reportError function
     * @public
     * @param {String} name the name of the component
     * @returns a component from the './InputComponents
     */
    function mapNameToComponent(name) {
        return 0;
    }

    return <>
        {/* {props.components.array.forEach(element => {
            mapNameToComponent(element);
        })}

        {defaultStructure.forEach(c => <> */}
            {/*Components from defaultStructure*/}
        {/* </>)} */}

        {/* For purpose of the UML Diagram */}
        {props.name}
        {mapNameToComponent(props.name)}
        <ModelGroupConfigurator />
        <OffsetConfigurator />
        <PlotNameField />
        <ReferenceYearSlider />
        <TimeCheckBoxGroup />
        <XAxisSlider />
        <YAxisSlider />
        <RegionSelector />
        <LatitudeBandSelector />
    </>;
}

Section.propTypes = {
    name: PropTypes.string,
}

export default Section;