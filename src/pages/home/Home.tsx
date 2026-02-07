import React from "react";
import { Header } from "../../components/layout/header/Header";
import { Box, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { ArrowForwardIos } from "@mui/icons-material";
import { Footer } from "../../components/layout/footer/Footer";
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import QrCode2OutlinedIcon from '@mui/icons-material/QrCode2Outlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import Menu from '@mui/icons-material/Menu';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box className={styles.home}>
      <Header icon={<Menu />} title="SAUNA＋" />
      <Box className={styles.mainContent}>
        <Box className={styles.userInfo}>
          <Typography sx={{fontWeight: "bold", fontSize: "12px"}}>
            こんにちは、田中さん
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box className={styles.membershipDot} />
            <Typography sx={{ fontWeight: "bold", fontSize: "12px"}}>
              ゴールド会員
            </Typography>
          </Box>
        </Box>
        <Box className={styles.todaysRecommendation}>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold"}}>
            本日のおすすめ
          </Typography>
          <IconButton sx={{ color: "black"}}>
            <ArrowForwardIos sx={{ fontSize: "20px"}}/>    
          </IconButton>
        </Box>
        <Box className={styles.recommendationSauna}>
          <img 
            src="/images/home/recommendationSauna.jpeg"
            className={styles.recommendationImage}
          />  
          <Box className={styles.recommendationSaunaName}>
          <Typography sx={{ fontSize: "12px", fontWeight: "bold", textAlign: "left"}}>
            hogehogeサウナ
          </Typography>
            <Box className={styles.recommendationSaunaAssesment}>
              <Box className={styles.recommendationSaunaTotalTime}>
                <WatchLaterRoundedIcon sx={{ fontSize: "16px"}}/>
                <Typography sx={{ fontSize: "12px", fontWeight: "bold", textAlign: "left"}}>
                   hogehoge
                </Typography>
              </Box>
              <Box className={styles.recommendationSaunaTotalAssesment}>
                <GradeRoundedIcon sx={{ fontSize: "16px", color: "#F9A825"}}/>
                <Typography sx={{ fontSize: "12px", fontWeight: "bold", textAlign: "left"}}>
                  4.5
                </Typography>
            </Box>
            
            </Box>
            <Box className={styles.recommendationSaunaStatus}>
              <Box className={styles.recommendationSaunaStatusMaterial}>
                <Typography sx={{ fontSize: "12px", fontWeight: "bold", textAlign: "left", color: "#FF6B00"}}>
                  hogehoge
                </Typography>
              </Box>
              <Box className={styles.recommendationSaunaStatusCongestion}>
                <Typography sx={{ fontSize: "12px", fontWeight: "bold", textAlign: "left", color: "#00B300"}}>
                  hogehoge
                </Typography>
                <CircleOutlinedIcon sx={{ fontSize: "12px", color: "#00B300"}}/>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={styles.category} onClick={() => navigate("/membership")}>
          <QrCode2OutlinedIcon sx={{ fontSize: "20px", color: "white"}}/>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "white", textAlign: "left"}}>
            会員証を表示
          </Typography>
        </Box>
        <Box className={styles.category}>
          <LocalLibraryOutlinedIcon sx={{ fontSize: "20px", color: "white"}}/>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "white", textAlign: "left"}}>
            アンケート回答
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};