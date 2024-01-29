import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ArticleIcon from "@mui/icons-material/Article";
import List from "@mui/material/List";
import { InputBase } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TableChartIcon from "@mui/icons-material/TableChart";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Dashboard from "../components/MainDasboard/Dashboard/Dashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoggedIn from "../components/MainDasboard/BankDetails/LoggedIn";
import Approved from "../components/MainDasboard/BankDetails/Approved";
import Pending from "../components/MainDasboard/BankDetails/Pending";
import Rejected from "../components/MainDasboard/BankDetails/Rejected";
import Disbursed from "../components/MainDasboard/BankDetails/Disbursed";
import NotLoggedIn from "../components/MainDasboard/AllFiles/NotLoggedIn";
import AllFiles from "../components/MainDasboard/AllFiles/AllFiles";
import CreateFile from "../components/MainDasboard/CreateFile/CreateFile";
import TerminalIcon from "@mui/icons-material/Terminal";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { useContext } from "react";
import AllFiles1 from "../components/MainDasboard/AllFiles/AllFiles1";
import { SetPageContext } from "../Context/SetPageContext";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Apilink } from "../Constants/Apilink";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import clsx from "clsx";

const drawerWidth = 240;

export default function SideBar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [bankopen, setBankOpen] = React.useState(false);
  const [allfilesopen, setAllFilesOpen] = React.useState(false);
  const context = useContext(SetPageContext);
  const { menuItem, setMenuItem } = context;
  const handleBankOpen = () => {
    setBankOpen(!bankopen);
  };

  const handleAllFilesOpen = () => {
    setAllFilesOpen(!allfilesopen);
  };

  const Logout = () => {
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("refreshtoken");
    navigate("/login");
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [filterValue, setFilterValue] = React.useState("");

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

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "file_number",
      headerName: "File Number",
      flex: 1,
    },
    {
      field: "filetype",
      headerName: "File Type",
      flex: 1,
      cellClassName: (params) => {
        if (params.value == null) {
          return "";
        }

        return clsx("file-type", {
          classA: params.value === "A",
          classB: params.value === "B",
          classC: params.value === "C",
        });
      },
    },
    {
      field: "customername",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      cellClassName: (params) => {
        if (params.value == null) {
          return "";
        }

        return clsx("status-type", {
          loggedIn: params.value === "Logged In",
          approved: params.value === "Approved",
          rejected: params.value === "Rejected",
          disbursed: params.value === "Disbursed",
          pending: params.value === "Pending",
        });
      },
    },
    {
      field: "mobileno",
      headerName: "Mobile No",
      flex: 1,
      hide: true,
    },
    {
      field: "product",
      headerName: "Product",
      flex: 1,
    },
    {
      field: "loanamount",
      headerName: "Loan Amount",
      flex: 1,
    },
    {
      field: "referencename",
      headerName: "Reference Name",
      flex: 1,
      hide: true,
    },
    {
      field: "place",
      headerName: "Place",
      flex: 1,
      hide: true,
    },
    {
      field: "presentbankname",
      headerName: "Bank Name",
      flex: 1,
      hide: true,
    },
    {
      field: "bankemployeename",
      headerName: "Bank Employee",
      flex: 1,
      hide: true,
    },
    {
      field: "logindate",
      headerName: "Login Date",
      flex: 1,
      hide: true,
    },
    {
      field: "approveddate",
      headerName: "Approved Date",
      flex: 1,
      hide: true,
    },
    {
      field: "santionedamount",
      headerName: "Sanctioned Amount",
      flex: 1,
      hide: true,
    },
    {
      field: "personaldiscussion",
      headerName: "PD Date",
      flex: 1,
      hide: true,
    },
    {
      field: "techincaldate",
      headerName: "Techincal Date",
      flex: 1,
      hide: true,
    },
    {
      field: "techincalvaluvation",
      headerName: "Technical Valuation",
      flex: 1,
      hide: true,
    },
    {
      field: "disburseddate",
      headerName: "Disbursed Date",
      flex: 1,
      hide: true,
    },
    {
      field: "remark",
      headerName: "Remark",
      flex: 1,
      hide: true,
    },
  ];

  const filteredData = allData?.filter((item) => {
    return (
      item.mobileno.toString().includes(filterValue.toUpperCase()) ||
      item.file_number.toString().includes(filterValue.toUpperCase()) ||
      item.customername.toString().includes(filterValue.toUpperCase())
    );
  });

  const openFileDetial = (fileDetails) => {
    navigate("/editfile", {
      state: {
        fileDetails: fileDetails,
      },
    });
  };

  const SearchedResult = () => {
    return (
      <>
        <Typography
          variant="h5"
          component="div"
          color="black"
          fontFamily='"Helvetica Neue"'
          sx={{ m: 2 }}
        >
          NotLoggedIn Files
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Sl. No.</TableCell>
                <TableCell align="center">File No.</TableCell>
                <TableCell align="center">Customer Name</TableCell>
                <TableCell align="center">Mobile No</TableCell>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Loan Amount</TableCell>
                <TableCell align="center">File Type</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">View Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <>
                {filteredData.length > 0 ? (
                  filteredData?.map((row) => (
                    <TableRow key={row?.id}>
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">{row.file_number}</TableCell>
                      <TableCell align="center">{row.customername}</TableCell>
                      <TableCell align="center">{row.mobileno}</TableCell>
                      <TableCell align="center">{row.product}</TableCell>
                      <TableCell align="center">{row.loanamount}</TableCell>
                      <TableCell align="center">{row.filetype}</TableCell>
                      <TableCell align="center">{row.status}</TableCell>
                      <TableCell align="center">
                        <Button
                          variant="outlined"
                          onClick={() => {
                            openFileDetial(row);
                          }}
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <Typography
                    variant="h5"
                    component="div"
                    color="black"
                    fontFamily='"Helvetica Neue"'
                    sx={{ m: 2 }}
                  >
                    Don't have any file to show
                  </Typography>
                )}
              </>
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };

  const drawer = (
    <div className="cursor-pointer">
      <Toolbar sx={{ marginBottom: "20px" }}>
        <div
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center">
            <Typography variant="h6" noWrap component="div">
              Financial Solutions
            </Typography>
          </Stack>
        </div>
      </Toolbar>
      <Divider />
      <List>
        <ListItem
          disablePadding
          sx={{
            borderRadius: "30px",
            borderColor: "#eeeeee",
            border: 3,
            m: 2,
            width: drawerWidth - 30,
            height: drawerWidth - 900,
          }}
        >
          <ListItemButton onClick={() => setMenuItem("CreateFile")}>
            <ListItemIcon sx={{ color: "#eeeeee" }}>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText primary={"Create File"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setMenuItem("Dashboard")}>
            <ListItemIcon sx={{ color: "#eeeeee" }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleAllFilesOpen}>
            <ListItemIcon sx={{ color: "#eeeeee" }}>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="All Files" />
            {allfilesopen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={allfilesopen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => setMenuItem("MasterData")}
            >
              <ListItemIcon sx={{ color: "#eeeeee" }}>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="Master Data" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => setMenuItem("NotLoggedIn")}
            >
              <ListItemIcon sx={{ color: "#eeeeee" }}>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="NotLogged Files" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem disablePadding>
          <ListItemButton onClick={handleBankOpen}>
            <ListItemIcon sx={{ color: "#eeeeee" }}>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Bank Details" />
            {bankopen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={bankopen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => setMenuItem("LoggedIn")}
            >
              <ListItemIcon sx={{ color: "#eeeeee" }}>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="Logged In" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => setMenuItem("Approved")}
            >
              <ListItemIcon sx={{ color: "#eeeeee" }}>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="Approved" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => setMenuItem("Pending")}
            >
              <ListItemIcon sx={{ color: "#eeeeee" }}>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="Pending" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => setMenuItem("Rejected")}
            >
              <ListItemIcon sx={{ color: "#eeeeee" }}>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="Rejected" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => setMenuItem("Disbursed")}
            >
              <ListItemIcon sx={{ color: "#eeeeee" }}>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="Disbursed" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setMenuItem("Dashboard")}>
            <ListItemIcon sx={{ color: "#eeeeee" }}>
              <TerminalIcon />
            </ListItemIcon>
            <ListItemText primary={"Softwate Details"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              Logout();
            }}
          >
            <ListItemIcon sx={{ color: "#eeeeee" }}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#233044",
          color: "#eeeeee",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="p" noWrap component="div">
              {menuItem}
            </Typography>
          </div>
          <div className="flex items-center bg-white rounded-full p-2 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-900"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 ml-2 text-black bg-transparent outline-none"
              onChange={(e) => {
                setFilterValue(e.target.value);
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#233044",
              color: "#eeeeee",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#233044",
              color: "#eeeeee",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Container>
        <Box
          sx={{
            pt: 10,
          }}
        >
          {menuItem === "Dashboard" && filterValue === "" && <Dashboard />}
          {menuItem === "LoggedIn" && filterValue === "" && <LoggedIn />}
          {menuItem === "Approved" && filterValue === "" && <Approved />}
          {menuItem === "Disbursed" && filterValue === "" && <Disbursed />}
          {menuItem === "Pending" && filterValue === "" && <Pending />}
          {menuItem === "Rejected" && filterValue === "" && <Rejected />}
          {menuItem === "NotLoggedIn" && filterValue === "" && <NotLoggedIn />}
          {menuItem === "MasterData" && filterValue === "" && <AllFiles1 />}
          {menuItem === "AllFiles" && filterValue === "" && <AllFiles />}
          {menuItem === "CreateFile" && filterValue === "" && <CreateFile />}
          {filterValue !== "" && <SearchedResult />}

          <Toolbar />
        </Box>
      </Container>
    </Box>
  );
}
