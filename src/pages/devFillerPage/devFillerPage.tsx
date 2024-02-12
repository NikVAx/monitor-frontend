import { Box, Card, CardContent, Typography } from "@mui/material";

export const DevelopmentPage = () => {
  return (
    <Box>
      {Array.from(Array(50).keys()).map(() => {
        return (
          <>
            <Card sx={{ minWidth: "30px", margin: "5px" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Some Word
                </Typography>
              </CardContent>
            </Card>
          </>
        );
      })}
    </Box>
  );
}
