import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={4}>
          <Item><img src="bbq.avif" alt="" />
          <h3>BBQ Platter</h3>
          <h4>Rs. 2,500</h4>
          <Button variant="contained" color="error">Order Now</Button>
          </Item>
                  

        </Grid>
        <Grid size={4}>
          <Item>
        <img src="chapli kabab.jpg" alt="" />
        <h3>Chapli Kabab</h3>
        <h4>Rs.990</h4>
        <Button variant="contained" color="error">Order Now</Button>


          </Item>
        </Grid>
        <Grid size={4}>
          <Item>  <img src="Biryani.avif" alt="" />
        <h3>Ch Biryani</h3>
        <h4>Rs.500</h4>
                <Button variant="contained" color="error">Order Now</Button>

        </Item>
        </Grid>
        <Grid size={4}>
          <Item>  <img src="ChKarahi.avif" alt="" />
        <h3>Ch Karahi</h3>
        <h4>Rs.500</h4>
                <Button variant="contained" color="error">Order Now</Button>

        </Item>
        </Grid>

        <Grid size={4}>
          <Item>  <img src="Chtikka.avif" alt="" />
        <h3>Ch Tikka</h3>
        <h4>Rs.520</h4>
                <Button variant="contained" color="error">Order Now</Button>

        </Item>
        </Grid>

        <Grid size={4}>
          <Item>  <img src="drumstick.jpg" alt="" />
        <h3>DrumSticks</h3>
        <h4>Rs.600</h4>
                <Button variant="contained" color="error">Order Now</Button>

        </Item>
        </Grid>

        <Grid size={4}>
          <Item>  <img src="Chinnese.webp" alt="" />
        <h3>Chowmein</h3>
        <h4>Rs.450</h4>
                <Button variant="contained" color="error">Order Now</Button>

        </Item>
        </Grid>

        <Grid size={4}>
          <Item>  <img src="egg.webp" alt="" />
        <h3>Egg Fried Rice</h3>
        <h4>Rs.450</h4>
                <Button variant="contained" color="error">Order Now</Button>

        </Item>
        </Grid>

        <Grid size={4}>
          <Item>  <img src="malai boti.jpg" alt="" />
        <h3>Malai Boti</h3>
        <h4>RS.350</h4>
                <Button variant="contained" color="error">Order Now</Button>

        </Item>
        </Grid>

        <Grid size={4}>
          <Item>  <img src="mandhi.jpg" alt="" />
        <h3>Mandhi</h3>
        <h4>Rs.890</h4>
                <Button variant="contained" color="error">Order Now</Button>

        </Item>
        </Grid>
        <Grid size={4}>
          <Item>  <img src="seekh kabab.jpg" alt="" />
        <h3>Seekh Kabab</h3>
        <h4>Rs.500  </h4>
                <Button variant="contained" color="error">Order Now</Button>

        </Item>
        </Grid>
        <Grid size={4}>
          <Item>  <img src="Burgur.jpg" alt="" />
        <h3>Burger</h3>
        <h4>Rs.490</h4>
                <Button variant="contained" color="error">Order Now</Button>

        </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
