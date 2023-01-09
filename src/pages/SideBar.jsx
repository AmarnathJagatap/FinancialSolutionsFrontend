import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ArticleIcon from '@mui/icons-material/Article';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TableChartIcon from '@mui/icons-material/TableChart';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Dashboard from '../components/MainDasboard/Dashboard/Dashboard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack'
import Collapse from '@mui/material/Collapse';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LoggedIn from '../components/MainDasboard/BankDetails/LoggedIn';
import Approved from '../components/MainDasboard/BankDetails/Approved';
import Pending from '../components/MainDasboard/BankDetails/Pending';
import Rejected from '../components/MainDasboard/BankDetails/Rejected';
import Disbursed from '../components/MainDasboard/BankDetails/Disbursed';
import NotLoggedIn from '../components/MainDasboard/AllFiles/NotLoggedIn';
import AllFiles from '../components/MainDasboard/AllFiles/AllFiles';
import CreateFile from '../components/MainDasboard/CreateFile/CreateFile';
import TerminalIcon from '@mui/icons-material/Terminal';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { useContext } from 'react';
import AllFiles1 from '../components/MainDasboard/AllFiles/AllFiles1';
import { SetPageContext } from '../Context/SetPageContext';


const drawerWidth = 240;



export default function SideBar(props) {
 
  const navigate = useNavigate();   
  const { window } = props;
  const [bankopen, setBankOpen] = React.useState(false);
  const [allfilesopen, setAllFilesOpen] = React.useState(false);
  const context = useContext(SetPageContext)
  const { menuItem, setMenuItem } = context;
  const handleBankOpen = () => {
    setBankOpen(!bankopen);
  };

  const handleAllFilesOpen = () => {
    setAllFilesOpen(!allfilesopen);
  };

  const Logout = () =>{
    localStorage.removeItem('accesstoken');
    localStorage.removeItem('refreshtoken');
    navigate("/login")
  }

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='cursor-pointer'>
       <Toolbar sx={{ marginBottom: "20px" }}>
        <div onClick={()=>{navigate("/dashboard")}}> 
        <Stack
                      sx={{ width: "100%" }}
                      direction="row"
                      justifyContent="center"
                    > 
                    <Typography variant="h6" noWrap component="div">Financial Solutions</Typography>
                    </Stack>
        </div>
     </Toolbar>
      <Divider />
      <List>
          <ListItem disablePadding sx={{borderRadius: '30px',borderColor: '#eeeeee',border: 3,m:2,width:drawerWidth-30,height:drawerWidth-900}}>
            <ListItemButton onClick={()=>setMenuItem("CreateFile")}>
              <ListItemIcon sx={{color:"#eeeeee"}}>
                <AddCircleIcon />
              </ListItemIcon>
              <ListItemText primary={"Create File"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>setMenuItem("Dashboard")}>
              <ListItemIcon sx={{color:"#eeeeee"}}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItemButton>
          </ListItem>
           <ListItem disablePadding>
           <ListItemButton onClick={handleAllFilesOpen}>
                <ListItemIcon sx={{color:"#eeeeee"}}>
                <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary="All Files" />
                {allfilesopen ? <ExpandLess /> : <ExpandMore />}
           </ListItemButton>
          </ListItem>
          <Collapse in={allfilesopen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>setMenuItem("MasterData")}>
                    <ListItemIcon sx={{color:"#eeeeee"}}>
                       <TableChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Master Data" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>setMenuItem("AllFiles")}>
                    <ListItemIcon sx={{color:"#eeeeee"}}>
                       <TableChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="All Files" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>setMenuItem("NotLoggedIn")}>
                    <ListItemIcon sx={{color:"#eeeeee"}}>
                       <TableChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="NotLogged Files" />
                </ListItemButton>
                </List>
           </Collapse>
           <ListItem disablePadding>
            <ListItemButton onClick={handleBankOpen}>
                <ListItemIcon sx={{color:"#eeeeee"}}>
                <AccountBalanceIcon />
                </ListItemIcon>
                <ListItemText primary="Bank Details" />
                {bankopen ? <ExpandLess /> : <ExpandMore />}
           </ListItemButton>
          </ListItem>
          <Collapse in={bankopen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>setMenuItem("LoggedIn")}>
                    <ListItemIcon sx={{color:"#eeeeee"}}>
                       <TableChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logged In" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>setMenuItem("Approved")}>
                    <ListItemIcon sx={{color:"#eeeeee"}} >
                       <TableChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Approved" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>setMenuItem("Pending")}>
                    <ListItemIcon sx={{color:"#eeeeee"}} >
                       <TableChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pending" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>setMenuItem("Rejected")}>
                    <ListItemIcon sx={{color:"#eeeeee"}} >
                       <TableChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Rejected" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>setMenuItem("Disbursed")}>
                    <ListItemIcon sx={{color:"#eeeeee"}} >
                       <TableChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Disbursed" />
                </ListItemButton>
                </List>
           </Collapse>
           <ListItem disablePadding>
            <ListItemButton onClick={()=>setMenuItem("Dashboard")}>
              <ListItemIcon sx={{color:"#eeeeee"}}>
                <TerminalIcon />
              </ListItemIcon>
              <ListItemText primary={"Softwate Details"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{Logout()}}>
              <ListItemIcon sx={{color:"#eeeeee"}}>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItemButton>
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#233044",
          color: "#eeeeee"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="p" noWrap component="div">
            {menuItem}
          </Typography>
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,
            backgroundColor: "#233044",
            color: "#eeeeee" },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,
            backgroundColor: "#233044",
            color: "#eeeeee" },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Container>
        <Box sx={{
          pt:10
        }}>
        {menuItem === "Dashboard" && <Dashboard/>}
        {menuItem === "LoggedIn" && <LoggedIn/>}
        {menuItem === "Approved" && <Approved/>}
        {menuItem === "Disbursed" && <Disbursed/>}
        {menuItem === "Pending" && <Pending/>}
        {menuItem === "Rejected" && <Rejected/>}
        {menuItem === "NotLoggedIn" && <NotLoggedIn/>}
        {menuItem === "MasterData" && <AllFiles1/>}
        {menuItem === "AllFiles" && <AllFiles/>}
        {menuItem === "CreateFile" && <CreateFile/>}
        <Toolbar />
       
        </Box>
      </Container>
    </Box>
  );
}
