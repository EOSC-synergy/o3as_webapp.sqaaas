import * as React from 'react';
import Section from './Section/Section.js';
import defaultStructure from '../../../config/defaultConfig.json';
import DownloadModal from './DownloadModal/DownloadModal.js';
import { setCurrentType } from '../../../store/plotSlice.js';
import { useDispatch } from "react-redux";
import PlotTypeSelector from './InputComponents/PlotTypeSelector/PlotTypeSelector.js';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';



/**
 * Contains all input components responsible for the modification 
 * of the plot settings.
 * @param {Object} props 
 * @param {boolean} props.isOpen -  whether sideBar should be open
 * @param {function} props.onClose - handles closing of the sidebar
 * @param {function} props.reportError - enables component to report an error
 * @returns {JSX} a jsx containing a sidebar with sections containing input components, a download button and a plotType dropdown
 */
function Sidebar(props) {

    const dispatch = useDispatch()

    const [isDownloadModalVisible, setDownloadModalVisible] = React.useState(false);
    const [expandedSection, setExpandedSection] = React.useState(null); // -> idx of sections array

    /**
     * closes the download modal
     */
    const closeDownloadModal = () => {
        setDownloadModalVisible(false);
    }

    /**
     * shows the download modal
     */
    const openDownloadModal = () => {
        setDownloadModalVisible(true);
    }

    /**
     * collapses all sections
     */
    const collapseSection = () => {
        setExpandedSection(null);
    }

    /**
     * expands section with id (index in section array) i
     * collapses all other currently expanded sections
     * @param {int} i 
     */
    const expandSection = (i) => {
        setExpandedSection(i);
    }

    console.log(defaultStructure);
    console.log(defaultStructure.sections);
    console.log(defaultStructure);

    return (
    <>
        
        {props.isOpen && 
            <SwipeableDrawer
                anchor="right"
                open={props.isOpen}
                onClose={props.onClose}
                onOpen={props.onOpen}
            >

                <PlotTypeSelector />

                {defaultStructure["sections"].map((s, idx) =>
                    <>
                    <Section
                        name={s.name}
                        key={idx}
                        open={expandedSection === idx}
                        components={"Empty for now"}
                        onCollapse={collapseSection}
                        onExpand={expandSection}
                    />
                    </>
                )}

                {/* Maybe into their own component? */}
                {/* <Button text="Download" onClick={onOpenDownloadModal}/> */}
                <DownloadModal open={isDownloadModalVisible} onClose={closeDownloadModal} />
            </SwipeableDrawer>
        }

    </>);
}

export default Sidebar;