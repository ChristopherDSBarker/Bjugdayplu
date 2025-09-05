// src/pages/BjorgDay.jsx
import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack,
} from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const BjorgDay = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.03;
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = showThankYou;
    }
  }, [showThankYou]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const minutes = now.getMinutes();
      setShowThankYou(minutes % 5 === 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const Data = {
    about: "Bjug Day is PLU’s annual 48-hour fundraising celebration honoring founder Rev. Bjug Harstad. Held each October, it unites the PLU community to support scholarships and student success through games, giveaways, and giving — continuing a legacy of access and opportunity.",
    mission: "Honoring tradition, supporting students, and celebrating community.",
    avatarUrl: "/images/bjugDay.jpg",
    whyBjugDayMatters: "💸 Student Scholarships: Over 95% of PLU students receive financial aid. Bjug Day gifts help bridge the gap, especially for first-generation and underrepresented students. 🧪 Academic Innovation: Donations support new lab equipment, research grants, and internship opportunities across all disciplines. 🎭 Student Life & Clubs: From choir tours to Model UN, donor funding empowers students to explore leadership and creativity. 🌍 Global Education: Your gift helps Lutes study abroad, engage in service learning, and grow into global citizens.",
    donations: ["Scholarships", "Academics", "Athletics", "Student Success"],
  };

  return (
    <Box maxWidth={1000} mx="auto" mt={5} px={2} position="relative">
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/audio/GrooveMerchantPLUJazzEnsemble.mp3"
        autoPlay
        loop
        controls={false}
        style={{ display: "none" }}
      />

      {/* Thank You Overlay */}
      {showThankYou && (
        <Box
          sx={{
            position: "fixed",
            top: 30,
            right: 30,
            zIndex: 2000,
            pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
              bgcolor: "rgba(0,0,0,0.7)",
              color: "#fff",
              px: 2,
              py: 1,
              borderRadius: "20px",
              boxShadow: "0 2px 8px #000",
              fontSize: 18,
              maxWidth: 180,
              textAlign: "center",
            }}
          >
            <ChatBubbleIcon sx={{ mr: 1, fontSize: 28 }} />
            Thank you for continuing to support PLU students!
          </Box>
          <img
            src="/images/Bjug-Harstad1.jpg"
            alt=""
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "20px",
              boxShadow: "0 0 30px #000",
              animation: "slideIn 0.7s cubic-bezier(.68, -0.55, .27, 1.55)",
            }}
          />
          <style></style>
        </Box>
      )}

      

      {/* Profile Content */}
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Celebrate Bjug Day with PLU!
      </Typography>
      <Card sx={{ maxWidth: 500, mx: "auto", mt: 3, boxShadow: 3 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Avatar
            alt={Data.about}
            src={Data.avatarUrl}
            sx={{ width: 200, height: 200, mx: "auto", mb: 2 }}
          />
          <Typography variant="h5" gutterBottom>
            {Data.about}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {Data.mission}
          </Typography>
          <Typography variant="body1" paragraph>
            {Data.whyBjugDayMatters}
          </Typography>
          {Data.donations.length > 0 && (
            <>
              <Typography variant="subtitle2" gutterBottom>
                Donations:
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                flexWrap="wrap"
              >
                {Data.donations.map((donation, index) => (
                  <Chip key={index} label={donation} variant="outlined" />
                ))}
              </Stack>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default BjorgDay;
