import React, { useState } from "react";
import { Header } from "../../components/layout/header/Header";
import { Box, Typography } from "@mui/material";
import styles from "./NearbySauna.module.css";
import { Footer } from "../../components/layout/footer/Footer";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

const categories = [
  "総合評価",
  "低価格",
  "家族向け"
];

const saunaData = [
  {
    id: 1,
    name: "hogehogeサウナ",
    image: "/images/home/recommendationSauna.jpeg",
    totalTime: "49",
    rating: "4.5",
    material: "hogehoge",
    congestion: "混雑度"
  },
  {
    id: 2,
    name: "hogehogeスパ",
    image: "/images/home/recommendationSauna2.jpeg",
    totalTime: "68",
    rating: "4.7",
    material: "低温サウナ",
    congestion: "hogehoge"
  }
];

export const NearbySauna: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  return (
    <Box className={styles.nearbySauna}>
      <Header icon={<ArrowBackIosNewOutlinedIcon />} title="近場のサウナ" />
      <Box className={styles.mainContent}>
        <Box className={styles.saunaSelectCategory}>
          {categories.map((category, index) => (
            <Box 
              key={index}
              className={`${styles.categoryItem} ${category === selectedCategory ? styles.selected : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              <Typography sx={{ 
                fontSize: "14px",
                color: category === selectedCategory ? '#fff' : '#000'
              }}>
                {category}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box className={styles.saunaList}>
          {saunaData.map((sauna) => (
            <Box key={sauna.id} className={styles.recommendationSauna}>
              <img 
                src={sauna.image}
                className={styles.recommendationImage}
              />  
              <Box className={styles.recommendationSaunaName}>
                <Typography sx={{ fontSize: "12px", fontWeight: "bold", textAlign: "left"}}>
                  {sauna.name}
                </Typography>
                <Box className={styles.recommendationSaunaAssesment}>
                  <Box className={styles.recommendationSaunaTotalTime}>
                    <WatchLaterRoundedIcon sx={{ fontSize: "16px"}}/>
                    <Typography sx={{ fontSize: "12px", fontWeight: "bold", textAlign: "left"}}>
                      hogehoge {sauna.totalTime}
                    </Typography>
                  </Box>
                  <Box className={styles.recommendationSaunaTotalAssesment}>
                    <GradeRoundedIcon sx={{ fontSize: "16px", color: "#F9A825"}}/>
                    <Typography sx={{ fontSize: "12px", fontWeight: "bold", textAlign: "left"}}>
                      {sauna.rating}
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.recommendationSaunaStatus}>
                  <Box className={styles.recommendationSaunaStatusMaterial}>
                    <Typography sx={{ fontSize: "12px", fontWeight: "bold", textAlign: "left", color: "#FF6B00"}}>
                      {sauna.material}
                    </Typography>
                  </Box>
                  <Box className={styles.recommendationSaunaStatusCongestion}>
                    <Typography sx={{ fontSize: "12px", fontWeight: "bold", textAlign: "left", color: "#00B300"}}>
                      {sauna.congestion}
                    </Typography>
                    <CircleOutlinedIcon sx={{ fontSize: "12px", color: "#00B300"}}/>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
          <Box className={styles.searchSauna}>
            <FmdGoodOutlinedIcon sx={{ fontSize: "20px", color: "#00B300"}}/>
          <Typography sx={{ fontSize: "16px", color: "black"}}>
            現在地から探す
          </Typography>
        </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};