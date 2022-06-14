import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ServiceCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ 
      width: {
        xs: '10%', // theme.breakpoints.up('xs')
        sm: '20%', // theme.breakpoints.up('sm')
        md: '30%', // theme.breakpoints.up('md')
      },
      margin: '1.6%',
      float:'left',    
     }}
     >
      
      <CardMedia
        component="img"
        height="350"
        image="https://engagemassive.com/wp-content/uploads/2020/09/Brand-Identity-Services-900x602.jpg"
        alt="Service"
      />
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="BRAND IDENTITY + POSITIONING"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <p>Today’s customers expect the brands they interact with to have an opinion. To take a stance. To give a sh*t.
          We design brands that connect to audiences through shared culture and values, and that explore the cultural tensions that determine loyalties and behaviours.</p>
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>APPROACH:</Typography>
          <Typography paragraph>
              <h2>Clear, provocative, visually striking + culturally electric.</h2>
          </Typography>
          <Typography paragraph>
              <p>From strategy and naming to visual identity and messaging, our branding approach is finely honed and ever-evolving.
               We test our assumptions, prioritize data over opinions, and operate on the principle that a brand can’t be stronger in the market than it is within the organization.</p>
          </Typography>
          <Typography paragraph>
              <p> A brand’s identity must engage the whole organization—it lives at the core of all processes, behaviours, and communications.</p>
          </Typography>
          
        </CardContent>
      </Collapse>

      

    </Card>
  );
}