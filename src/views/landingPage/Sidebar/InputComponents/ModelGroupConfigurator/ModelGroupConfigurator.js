import React from "react";
import AddModelGroupModal from "./AddModelGroupModal/AddModelGroupModal";
import ModelGroupCard from "./ModelGroupCard/ModelGroupCard";
import { Button } from '@mui/material';
import { useDispatch } from "react-redux"
import { updatedModelGroup, addedModelGroup } from "../../../../../store/modelsSlice/modelsSlice";

/**
 * enables the user to configure models that should be visible in the plot clustered as model groups
 * @param {Object} props 
 * @param {function} props.reportError - function to report errors
 * @returns {JSX} a jsx containing a ModelGroupModal and a ModelGroupCard and EditModelGroupModal per model group
 */
function ModelGroupConfigurator(props) {
    
    // const dispatch = useDispatch()

    const addModelGroup = (name, models) => {
        // dispatch(addedModelGroup({name, models}))   
    }

    const editModelGroup = 
        (
            id,
            name,
            models,
            hidden,
            derivativeVisible,
            meanVisbile,
            medianVisible,
            percentileVisible
        ) => {
        // id = index of model group in array above
        // dispatch(updatedModelGroup({
        //     id,
        //     name,
        //     models,
        //     hidden,
        //     derivativeVisible,
        //     meanVisbile,
        //     medianVisible,
        //     percentileVisible
        // }))
    }


    const [isAddModalVisible, setAddModalVisible] = React.useState(false);
    const [isEditModalVisible, setEditModalVisible] = React.useState(false);

    const closeEditModal = () => {
        setEditModalVisible(false);
    }

    const openEditModal = () => {
        setEditModalVisible(true);
    }

    const closeAddModal = () => {
        setAddModalVisible(false);
    }

    const openAddModal = () => {
        setAddModalVisible(true);
    }

    let i = props.reportError;


    return (
        <>
            <ModelGroupCard modelGroupId={1} error={props.reportError} />
            <ModelGroupCard modelGroupId={2} error={props.reportError} />
            <Button varian="outlined" onClick={openAddModal}>Open Add Model Group Modal (Dev)</Button>
            <AddModelGroupModal isOpen={isAddModalVisible} onClose={closeAddModal} error={props.reportError} />
            {/* <ModelGroup /> */}
        </>
    );
}

export default ModelGroupConfigurator;