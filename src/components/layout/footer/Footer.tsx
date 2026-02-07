import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import styles from "./Footer.module.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { useNavigate, useLocation } from 'react-router-dom';

const footerItems = [
  { icon: <HomeOutlinedIcon />, label: 'ホーム', path: '/' },
  { icon: <QrCode2OutlinedIcon />, label: '会員証', path: '/membership' },
  { icon: <LocalLibraryOutlinedIcon />, label: 'お気に入り', path: '/favorite' },
  { icon: <FmdGoodOutlinedIcon />, label: '近場', path: '/nearbySauna' },
  { icon: <WebAssetOutlinedIcon />, label: '履歴', path: '/history' },
];

//Footerコンポーネントの定義
export const Footer: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedItem, setSelectedItem] = React.useState(() => {
      return footerItems.findIndex(item => item.path === location.pathname);
    });

    const handleItemClick = (index: number, path: string) => {
      setSelectedItem(index);
      navigate(path);
    };

    return (
      <Box className={styles.footer}>
        {footerItems.map((item, index) => (
          <Box key={index} sx={{ alignItems: "center" }}>
            <IconButton sx={{ 
              color: selectedItem === index ? "#2E7D32" : "black",
              transition: 'color 0.3s'
            }} onClick={() => handleItemClick(index, item.path)}>
              {React.cloneElement(item.icon, { sx: { fontSize: "24px" } })}
            </IconButton>
            <Typography 
              sx={{ fontSize: "12px", color: selectedItem === index ? "#2E7D32" : "black", fontWeight: "bold" }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    );
};