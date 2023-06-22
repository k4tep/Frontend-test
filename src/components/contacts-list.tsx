import React, { useEffect, useState } from "react";
// import classes from "./contacts-list.module.css";
import {
    List,
    Datagrid,
    TextField,
    Button,
    WrapperField,
    TextInput,
    FilterForm,
    ReferenceInput,
    AutocompleteInput,
    Filter,
    useGetList,
} from "react-admin";
import { useMutation } from "react-query";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CircleIcon from "@mui/icons-material/Circle";
import { Icon } from "@material-ui/core";

export function ContactsList(params: any) {
    const { data, isLoading } = useGetList("contacts/countries", {
        filter: {},
    });
    console.log(data);

    const contactsFilters = [
        <TextInput label="Search by job title" source="job_title" alwaysOn />,
        <AutocompleteInput
            optionText="name"
            optionValue="name"
            choices={data}
            getOptionLabel={(option) => option.label}
            alwaysOn
            autoHighlight
            label="Choose location"
            source="country"
            isLoading={isLoading}
            suggestionLimit={10}
        />,
        // <ReferenceInput alwaysOn source="name" reference="contacts/industries">
        //     <AutocompleteInput optionText="name" label="Choose industry" />
        // </ReferenceInput>,
    ];

    return (
        <List {...params} filters={contactsFilters}>
            <Datagrid bulkActionButtons={false}>
                <WrapperField label="Full name">
                    <Button
                        // className={classes.name_button}
                        // disableRipple
                        sx={{
                            color: "#3626A7",
                            border: "1px solid #E7E8EF",
                            width: 167,
                            height: 40,
                        }}
                        label="Get the name"
                        startIcon={
                            <Icon>
                                <AccountCircleOutlinedIcon
                                    color="primary"
                                    sx={{ color: "#3626A7", width: 20, height: 20 }}
                                />
                                <CircleIcon
                                    sx={{
                                        position: "absolute",
                                        top: 5,
                                        right: 125,
                                        color: "white",
                                        opacity: "100%",
                                        width: 14,
                                        height: 14,
                                    }}
                                />
                                <CheckCircleRoundedIcon
                                    fontSize="small"
                                    sx={{
                                        color: "#26A761",
                                        position: "absolute",
                                        top: 6,
                                        right: 125.6,
                                        width: 12,
                                        height: 12,
                                    }}
                                />
                            </Icon>
                        }
                    />
                </WrapperField>
                <TextField source="job_title" />
                <TextField source="industry" />
                <TextField source="country" label="Location" />
            </Datagrid>
        </List>
    );
}
