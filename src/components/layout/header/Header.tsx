import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import styles from "./Header.module.css";

interface HeaderProps {
    icon: React.ReactNode;
    title: string;
}

//Headerコンポーネントの定義
export const Header: React.FC<HeaderProps> = ({ icon, title }) => {
    return (
        <Box className={styles.header}>
            <IconButton
                sx={{ color: "white" ,justifySelf: "start"}}>
                {icon}    
            </IconButton>
            <Typography 
                sx={{ color: "white", fontWeight: "bold" , fontSize: "16px", justifySelf: "center"}}
            >
                {title}
            </Typography>
        </Box>
    );
};