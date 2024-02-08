import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const DevFillerPage = () => {
  return (
    <>
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
                  Word of the Day
                </Typography>
              </CardContent>
            </Card>
          </>
        );
      })}
    </>
  );
}
