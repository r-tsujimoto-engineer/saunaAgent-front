import React from "react";
import { Header } from "../../components/layout/header/Header";
import { Box, Typography, IconButton } from "@mui/material";
import styles from "./History.module.css";
import { Footer } from "../../components/layout/footer/Footer";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

interface SaunaHistoryItem {
  date: string;
  name: string;
}
const saunaHistoryData: SaunaHistoryItem[] = [
  {
    date: "2024/04/22",
    name: "湯けたりサウナ"
  },
  {
    date: "2024/04/22",
    name: "サウナまえぱく温涼館"
  },
  {
    date: "2024/04/03",
    name: "水回館"
  }
];

export const History: React.FC = () => {
  return (
    <Box className={styles.history}>
      <Header icon={<ArrowBackIosNewOutlinedIcon />} title="訪問履歴" />
      <Box className={styles.mainContent}>
        <Box className={styles.saunaHistory}>
          <IconButton sx={{ color: "black"}}>
            <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "20px"}}/>    
          </IconButton>
          <Typography sx={{ fontSize: "20px", fontWeight: "bold"}}>
            2024年4月
          </Typography>
        </Box>
        {saunaHistoryData.map((item, index) => (
          <Box key={index} className={styles.saunaHistoryList}>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold"}}>
              {item.date}<br/>
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>
      <Footer />
    </Box>
  );
};