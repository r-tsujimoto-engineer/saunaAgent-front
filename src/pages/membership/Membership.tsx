import React from "react";
import { Header } from "../../components/layout/header/Header";
import { Box, Typography, IconButton } from "@mui/material";
import styles from "./Membership.module.css";
import { Footer } from "../../components/layout/footer/Footer";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';

export const Membership: React.FC = () => {
  return (
    <Box className={styles.membership}>
      <Header icon={<ArrowBackIosNewOutlinedIcon />} title="会員証" />
      <Box className={styles.mainContent}>
        <Box className={styles.membershipQRcode}>
          <QrCodeScannerOutlinedIcon sx={{ fontSize: "180px"}}/>
        </Box>
        <Box sx={{ textAlign: "center"}}>
          <Typography sx={{ fontSize: "24px" }}>田中太郎</Typography>
          <Typography sx={{ fontSize: "16px" }}>会員番号：123456789</Typography>
          <Typography sx={{ fontSize: "16px"}}>ゴールド会員</Typography>
          <Typography sx={{ fontSize: "24px", fontWeight: "bold", color: "#00B900" }}>3000ポイント</Typography>
          <Typography sx={{ fontSize: "12px"}}>会員証を表示してご提示をお願いいたします</Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};