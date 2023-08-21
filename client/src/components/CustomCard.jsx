import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

function CustomCard({item}) {
  return (
    <Card sx={{ display: "flex", flexDirection: "row", height: "180px", width: "600px", gap: "16px" }}>
      <CardMedia
        component="img"
        height="180px"
        width="240px"
        image={item.image}
        alt="Card image"
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
