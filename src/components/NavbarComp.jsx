import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = ['Home', 'Menu', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: '#1a1a1a', height: '100%', color: 'white' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
        BBQ MAZE
      </Typography>
      <Divider sx={{ bgcolor: '#333' }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline /> 
      
      <AppBar 
        component="nav" 
        elevation={0} // Removes the shadow that causes a "white line" feel
        sx={{ bgcolor: '#1a1a1a', borderBottom: '1px solid #333' }}
      >
        <Toolbar>
          <IconButton
            color="inherit" // Fixed from "danger"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: 1, display: { xs: 'block', sm: 'block' } }}
          >
            BBQ MAZE
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff', ml: 2, '&:hover': { color: '#ff4d4d' } }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {/* Main Content Area */}
      <Box component="main" sx={{ width: '100%' }}>
        <Toolbar /> {/* This acts as a spacer so content isn't hidden under the navbar */}
        
        {/* Banner Section */}
        <Box sx={{ 
          width: '100%', 
          height: '70vh', 
          position: 'relative',
          overflow: 'hidden' 
        }}>
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000" 
            alt="BBQ Banner" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <Box sx={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            bgcolor: 'rgba(0,0,0,0.4)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
          }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold' }}>THE ART OF SMOKE</Typography>
            <Typography variant="h5">Premium BBQ & MUCH MORE</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;