import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Apilink } from "../../../Constants/Apilink";
import { tokens } from "../../../theme";
import Box from "@mui/material/Box";
import { useTheme, IconButton } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import StatBox from "../../DashboardComponents/StatBox";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../../DashboardComponents/LineChart";
import ProgressCircle from "../../DashboardComponents/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  useEffect(() => {
    getuser();
  }, []);
  const getuser = async () => {
    const access = localStorage.getItem("accesstoken");
    const refresh = localStorage.getItem("refreshtoken");
    if (access !== null || refresh !== null) {
      const verifyRefreshToken = async () => {
        const response = await fetch(Apilink + "/auth/api/token/verify/", {
          method: "POST",
          body: JSON.stringify({
            token: refresh,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = response.json();
        console.log(data);
        if (Object.keys(data).length > 0) {
          navigate("/login");
          localStorage.removeItem("refreshtoken");
          localStorage.removeItem("accesstoken");
        } else {
          console.log("Continued to check  Access Token");
          const verifyAccessToken = async () => {
            await fetch(Apilink + `/auth/api/token/verify/`, {
              method: "POST",
              body: JSON.stringify({
                token: access,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((res) => {
                if (Object.keys(res).length > 0) {
                  console.log("Access Token Expired");
                  const getNewAccessToken = async () => {
                    await fetch(Apilink + `/auth/api/token/refresh/`, {
                      method: "POST",
                      body: JSON.stringify({
                        refresh: "Token " + refresh,
                      }),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        console.log("Got Tokens");
                        console.log("New Access Token: ", data["access"]);
                        console.log("New Refresh Token: ", data["refresh"]);
                        async function Storing() {
                          if (data["access"]) {
                            localStorage.setItem("accesstoken", data["access"]);
                            localStorage.setItem(
                              "refreshtoken",
                              data["refresh"]
                            );
                          }
                        }
                        Storing();
                      })
                      .catch((error) => {
                        console.log("Got some error while getting new tokens");
                      });
                  };
                  getNewAccessToken();
                } else {
                  console.log("Both Tokens are verified setting to True");
                }
              });
          };
          verifyAccessToken();
        }
      };
      verifyRefreshToken();
    } else {
      navigate("/login");
    }
  };
  let NotloggedIn = 0;
  let approved = 0;
  let A = 0;
  let B = 0;
  let C = 0;
  const [allData, setAllData] = React.useState([]);
  React.useEffect(() => {
    fetchAllData();
  }, []);
  const fetchAllData = async () => {
    await fetch(Apilink + "/files/getallfiledata/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setAllData(res));
  };
  const checkLoggedIn = () => {
    for (const item of allData) {
      if (item["status"] === "NotLogged In") {
        NotloggedIn = NotloggedIn + 1;
      }
    }
    for (const item of allData) {
      if (item["status"] === "Approved") {
        approved = approved + 1;
      }
    }
    for (const item of allData) {
      if (item["filetype"] === "A") {
        A = A + 1;
      }
    }
    for (const item of allData) {
      if (item["filetype"] === "B") {
        B = B + 1;
      }
    }
    for (const item of allData) {
      if (item["filetype"] === "C") {
        C = C + 1;
      }
    }
  };
  checkLoggedIn();

  const recentFiles = allData.slice(Math.max(allData.length - 5, 0));

  return (
    <Container component="section" maxWidth="lg" style={{ padding: 2 }}>
      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              gridColumn: "span 3",
              backgroundColor: colors.primary[400],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StatBox
              title={allData.length}
              subtitle="All Files"
              progress="0.75"
              increase="+15%"
              icon={
                <EmailIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              gridColumn: "span 3",
              backgroundColor: colors.primary[400],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StatBox
              title={NotloggedIn}
              subtitle="Not Logged In"
              progress="0.50"
              increase="+21%"
              icon={
                <EmailIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              gridColumn: "span 3",
              backgroundColor: colors.primary[400],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StatBox
              title={approved}
              subtitle="Approved"
              progress="0.75"
              increase="+14%"
              icon={
                <EmailIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="stretch" sx={{ pt: 2 }}>
        <Grid item xs={12} sm={8}>
          <Box
            sx={{
              backgroundColor: colors.primary[400],
            }}
          >
            <Box
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box p={3}>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Total Files
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color={colors.greenAccent[500]}
                >
                  {allData.length}
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <DownloadOutlinedIcon
                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box height="250px" m="-20px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              gridColumn: "span 4",
              gridRow: "span 2",
              backgroundColor: colors.primary[400],
              overflow: "auto",
              height: 350,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: `4px solid ${colors.primary[500]}`,
                colors: colors.grey[100],
                p: "15px",
              }}
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                Recent Applications
              </Typography>
            </Box>
            {recentFiles.map((transaction, i) => (
              <Box
                key={`${transaction.id}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.file_number}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.customername}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.product}</Box>
                <Box
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    p: "5px 10px",
                    borderRadius: "4px",
                  }}
                >
                  {transaction.filetype}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="stretch" sx={{ pt: 2 }}>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              backgroundColor: colors.primary[400],
              p: "25px",
            }}
          >
            <Typography variant="h5" fontWeight="600" color="white">
              File Type A
            </Typography>
            <Box
              display={A}
              flexDirection="column"
              alignItems="center"
              mt="30px"
            >
              <ProgressCircle size="125" />
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                sx={{ mt: "15px" }}
              >
                Clear {A} files within a Week
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              backgroundColor: colors.primary[400],
              p: "25px",
            }}
          >
            <Typography variant="h5" fontWeight="600" color="white">
              File Type B
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="30px"
            >
              <ProgressCircle size="125" />
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                sx={{ mt: "15px" }}
              >
                Clear {B} files within a 15 Days
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              backgroundColor: colors.primary[400],
              p: "25px",
            }}
          >
            <Typography variant="h5" fontWeight="600" color="white">
              File Type C
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="30px"
            >
              <ProgressCircle size="125" />
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                sx={{ mt: "15px" }}
              >
                Clear {C} files within a 30 Days
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
