import React from 'react';
import { useState, useEffect } from 'react'
import { Box, Tab, Tabs, Typography, ListItem, Button } from '@mui/material'
import EnterStudentDetails from './EnterStudentDetails';
const ClassTabs = ({classList}) => {
    const [tabIndex, setTabIndex] = useState(0)
    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex)
    }
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenClose = () =>{
        if(isOpen == true){
            setIsOpen(false)
        } else{
            setIsOpen(true)
        }
    }
    return (
        <div>
            <Box>
                <Tabs value={tabIndex} onChange={handleTabChange} variant="scrollable">
                    {classList.map((eachClass, index) => (
                        <Tab key={eachClass.id} label={eachClass.ClassName} value={index} />
                    ))}
                </Tabs>
            </Box>

            <Box sx={{ padding: 2 }}>

                {classList.map((eachClass, index) => (
                    <Box key={eachClass.id}>
                        {tabIndex === index && (
                            <Box>
                                <div>
                                {eachClass.id}
                                <Typography>STUDENTS</Typography>
                                <ListItem>
                                    Student name 1 – Emotions: {eachClass.ClassName} - Alone
                                    <Button variant="outlined">View details</Button>
                                </ListItem>
                                <Button variant="contained" onClick={handleOpenClose}>add Student +</Button>
                                {/* {isOpen && <EnterClass value ={classList} onChange ={handleSubmit} onClose={handleOpenClose}/>} */}
                                {isOpen && <EnterStudentDetails classID ={eachClass.id} onClose={handleOpenClose}/>}
                                </div>
                            </Box>
                        )}
                    </Box>
                ))}
            </Box>
        </div>
    );
}

export default ClassTabs