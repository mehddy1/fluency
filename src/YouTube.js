import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardContent from '@mui/material/CardContent';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import { colors } from '@mui/material';


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

const data = [
  {
    src: 'https://engagemassive.com/wp-content/uploads/2020/09/Brand-Identity-Services-900x602.jpg',
    title: 'Identité de marque + Positionnement',
    preTitle:'APPROCHER',
    title2:'Clair, provocateur, visuellement saisissant + culturellement électrique.',
    views: '396 k views',
    createdAt: 'a week ago',
    Text:'Votre marque vit dans l imaginaire public. Il existe en tant que perception, informée par chaque point de contact que vous avez avec votre public. C est en constante évolution.',
    services:['Stratégie de marque','Dénomination de la marque', 'Messagerie de marque','Identité visuelle'],
    Text2:'De la stratégie et de la dénomination à l identité visuelle et à la messagerie, notre approche de marque est finement affinée et en constante évolution. Nous testons nos hypothèses, donnons la priorité aux données plutôt qu aux opinions et partons du principe qu une marque ne peut pas être plus forte sur le marché qu elle ne l est au sein de lorganisation. L identité d une marque doit impliquer l ensemble de l organisation – elle est au cœur de tous les processus, comportements et communications.', 
  },

  {
    src: 'https://engagemassive.com/wp-content/uploads/2020/08/Website-design-services-Vancouver-900x599.jpg',
    title: 'Conception + développement de site Web',
    preTitle:'APPROCHE DE LA CONCEPTION WEB',
    title2:'Innover',
    views: '40 M views',
    createdAt: '2 week ago',
    Text:'Nous concevons et développons des sites Web de pointe qui définissent des catégories et positionnent nos clients pour réussir dans un monde interconnecté. WordPress, Headless CMS, eCommerce… nous couvrons toute la gamme. Nous avons beaucoup dexpérience ici, ce qui signifie que nous construisons des sites correctement. Les sites de nos clients sont évolutifs, rapides et conçus en tenant compte des besoins et des attentes des utilisateurs.',
    services:['Stratégie','Conception UX + UI','Tests d utilisation','Planification technique','Développement','Assurance qualité','Itération continue'],  
    Text2:'Dans un monde de thèmes modèles, de photographies de stock et de contenu passe-partout, un site Web qui vous sépare du troupeau nécessite quelque chose de plus. Ambition. Cœur. Âme. Curiosité. Nuancer. Délicatesse. Courage. C est là que nous vivons : à l intersection de la clarté, du but, de la pertinence culturelle et d une exécution technique sans faille. Ce n est pas un champ de bataille pour les faibles de cœur, mais il donne des résultats remarquables pour les quelques courageux assez ambitieux pour prendre la charge.',
  },
  {
    src: 'https://engagemassive.com/wp-content/uploads/2020/08/TheOvercoat_lowres-1-900x1276.jpg',
    title: 'PUBLICITÉ + CONTENU DE MARQUE',
    preTitle:'APPROCHE DE LA PUBLICITÉ',
    title2:'Un remède pour le commun',
    views: '130 M views',
    createdAt: 'a week ago',
    Text:'Nous produisons de la publicité et du marketing qui définissent les catégories et qui relient les marques à leurs clients. Nous utilisons le pouvoir de la créativité et de la narration pour résoudre des problèmes et obtenir des résultats.',
    services:['Données + intelligence', 'Recherche + Stratégie','Contenu numérique, social + de marque','Campagnes numériques + intégrées','Rapports + Optimisation'],
    Text2:'Notre approche de la publicité et du brand content se décompose en trois étapes : Notre équipe de chercheurs commence par identifier les conventions du marché, découvrant les frontières et les tensions culturelles qui définissent les comportements, les croyances et les valeurs d un public. Ensuite, nous travaillons avec nos clients pour affiner leur objectif, en le décomposant dans un langage courant facile à comprendre. À partir de là, nous développons du contenu de marque et des campagnes publicitaires qui perturbent le statu quo et positionnent les marques de nos clients pour atteindre leur objectif et aller plus vite que la vitesse de la culture.',
  },
];



function Media(props) {
  const { loading = false } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: '33%', paddingLeft: '2%', my: 5, }}>
          {item ? (
            <img
              style={{ width: '100%', height:'33%' }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={'100%'} height={'100%'} />
          )}

          {item ? (
            <Box sx={{ pr: 2, fontWeight: 'bold',}}>
              <Typography gutterBottom variant="body2" fontSize={22} fontWeight="Bold">
                {item.title}
              </Typography>
              <Typography display="block" variant="caption" color="InfoText" fontWeight={600} fontSize={15} fontFamily='revert'>
                {item.Text}
              </Typography>
             
              <List sx={{ width: '100%',fontSize:'12px' ,display:'flex',flexDirection: 'column'} }>
                {item.services.map((service)=>(
                    <ListItem sx={{backgroundColor:'red', fontFamily:'initial'  }}> 
                        {`${service}`}
                    </ListItem>
                    
                ))}
                    
                 
               
              
              </List>

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
                <CardContent >
                    <Typography paragraph fontWeight={600} fontSize={15} fontFamily='revert'>Method:</Typography>
                    <Typography paragraph fontWeight={600} fontSize={15} fontFamily='revert'>
                         {`${item.title2}`}
                    </Typography>
                    <Typography paragraph fontWeight={600} fontSize={15} fontFamily='revert'>
                         {`${item.Text2} `}    
                    </Typography>
                    <Typography paragraph fontWeight={600} fontSize={15} fontFamily='revert'>
                            
                    </Typography>
                    <Typography fontWeight={600} fontSize={15} fontFamily='revert'>
                    
                    </Typography>
                </CardContent>
            </Collapse>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="33%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media />
    </Box>
  );
}
