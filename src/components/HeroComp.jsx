import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Individual Card Styling
const ItemCard = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: theme.spacing(2),
  textAlign: 'center',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  width: '100%',
  boxSizing: 'border-box',
  border: '1px solid #f0f0f0',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 12px 30px rgba(211, 47, 47, 0.15)',
  },
}));

// Image Styling Box
const ImageContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '180px',
  borderRadius: '12px',
  overflow: 'hidden',
  marginBottom: '12px',
  flexShrink: 0,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const productsData = [
  { name: 'BBQ Platter', price: 'Rs. 2,500', img: 'bbq.avif', tag: 'Bestseller', category: 'Desi Food' },
  { name: 'Chapli Kabab', price: 'Rs. 990', img: 'chapli kabab.jpg', tag: 'Popular', category: 'Desi Food' },
  { name: 'Ch Biryani', price: 'Rs. 500', img: 'Biryani.avif', tag: 'Hot', category: 'Desi Food' },
  { name: 'Ch Karahi', price: 'Rs. 500', img: 'ChKarahi.avif', category: 'Desi Food' },
  { name: 'Ch Tikka', price: 'Rs. 520', img: 'Chtikka.avif', category: 'Desi Food' },
  { name: 'DrumSticks', price: 'Rs. 600', img: 'drumstick.jpg', category: 'Fast Food' },
  { name: 'Chowmein', price: 'Rs. 450', img: 'Chinnese.webp', category: 'Fast Food' },
  { name: 'Egg Fried Rice', price: 'Rs. 450', img: 'egg.webp', category: 'Fast Food' },
  { name: 'Malai Boti', price: 'Rs. 350', img: 'malai boti.jpg', tag: 'Special', category: 'Desi Food' },
  { name: 'Mandhi', price: 'Rs. 890', img: 'mandhi.jpg', category: 'Desi Food' },
  { name: 'Seekh Kabab', price: 'Rs. 500', img: 'seekh kabab.jpg', category: 'Desi Food' },
  { name: 'Burger', price: 'Rs. 490', img: 'Burgur.jpg', tag: 'Hot', category: 'Fast Food' },
  { name: 'Gulab Jamun', price: 'Rs. 300', img: 'gulabjamun.jpeg', category: 'Sweets' },
  { name: 'Kheer', price: 'Rs. 350', img: 'kheer.jpg', category: 'Sweets' },
];

export default function RowAndColumnSpacing() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleTabChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const filteredProducts = selectedCategory === 'All' 
    ? productsData 
    : productsData.filter(item => item.category === selectedCategory);

  return (
    <Box 
      sx={{ 
        width: '100%', 
        py: { xs: 3, md: 5 }, 
        px: { xs: 2, sm: 3, md: 6 }, 
        backgroundColor: '#fafafa',
        minHeight: '100vh',
        boxSizing: 'border-box'
      }}
    >
      {/* Title */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 800, 
            color: '#1a1a1a', 
            fontSize: { xs: '1.8rem', sm: '2.2rem' }
          }}
        >
          BBQ Maze Menu
        </Typography>
      </Box>

      {/* Category Sub-Menu Tabs */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        {/* Category Sub-Menu Tabs */}
<Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, width: '100%' }}>
  <Tabs 
    value={selectedCategory} 
    onChange={handleTabChange}
    variant="scrollable"
    scrollButtons="auto"
    allowScrollButtonsMobile
    sx={{
      backgroundColor: '#ffffff',
      borderRadius: '50px',
      padding: { xs: '2px 4px', sm: '4px 8px' }, // Mobile par padding kam ki
      maxWidth: '100%',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      '& .MuiTabs-indicator': { display: 'none' },
      '& .MuiTab-root': {
        textTransform: 'none',
        fontWeight: 700,
        fontSize: { xs: '0.75rem', sm: '0.9rem' }, // Mobile par font size chota kiya
        borderRadius: '30px',
        px: { xs: 1.5, sm: 3 },                    // Mobile par side padding choti ki
        py: 0.8,
        minWidth: 'auto',
        minHeight: 'auto',
        color: '#555',
        '&.Mui-selected': {
          backgroundColor: '#d32f2f',
          color: '#ffffff',
        },
      },
    }}
  >
    <Tab label="All" value="All" />
    <Tab label="Desi Food" value="Desi Food" />
    <Tab label="Fast Food" value="Fast Food" />
    <Tab label="Sweets" value="Sweets" />
  </Tabs>
</Box>
      </Box>

      {/* Reliable Pure Flexbox Grid Layout */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 3, 
          justifyContent: 'center' 
        }}
      >
        {filteredProducts.map((item, index) => (
          <Box 
            key={index} 
            sx={{ 
              width: {
                xs: '100%',             // Mobile: 1 item
                sm: 'calc(50% - 24px)',  // Tablet: 2 items
                md: 'calc(33.333% - 24px)', // Laptop: 3 items
                lg: 'calc(25% - 24px)'   // Large Screen: 4 items
              },
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <ItemCard elevation={0}>
              <ImageContainer>
                <img src={item.img} alt={item.name} />
                {item.tag && (
                  <Chip 
                    label={item.tag} 
                    color="error" 
                    size="small" 
                    sx={{ 
                      position: 'absolute', 
                      top: 10, 
                      left: 10, 
                      fontWeight: 'bold',
                      fontSize: '0.7rem'
                    }} 
                  />
                )}
              </ImageContainer>
              
              <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box sx={{ mb: 1.5 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700, 
                      color: '#2d3748', 
                      fontSize: '1rem',
                      mb: 0.5 
                    }}
                  >
                    {item.name}
                  </Typography>
                  
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      color: '#d32f2f', 
                      fontWeight: 800, 
                      fontSize: '1rem' 
                    }}
                  >
                    {item.price}
                  </Typography>
                </Box>

                <Button 
                  variant="contained" 
                  disableElevation
                  startIcon={<ShoppingCartIcon />}
                  sx={{ 
                    backgroundColor: '#d32f2f',
                    '&:hover': { backgroundColor: '#b71c1c' },
                    borderRadius: '8px', 
                    py: 1, 
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textTransform: 'none',
                    width: '100%'
                  }}
                >
                  Order Now
                </Button>
              </Box>
            </ItemCard>
          </Box>
        ))}
      </Box>
    </Box>
  );
}