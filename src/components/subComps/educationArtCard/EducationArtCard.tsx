import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { EducationArtCardProps } from '../../../utils/interfaces';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

const EducationArtCard: React.FC<EducationArtCardProps> = ({
  title,
  tagline,
  id,
  handleClick,
  handleSaves,
  savedArticles,
  isSaved,
}) => {
  return (
    <Grid item>
      <Card
        variant="outlined"
        sx={{
          width: 320,
          height: 215,
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'space-between',
          overflow: 'auto',
          resize: 'horizontal',
        }}
        id={id}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6">{title}</Typography>
          <Typography>{tagline}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <IconButton onClick={() => handleSaves(id)}>
            {isSaved ? <BookmarkAddedIcon /> : <BookmarkBorderIcon />}
          </IconButton>
          <Button color="primary" onClick={() => handleClick(id)}>
            Read more
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default EducationArtCard;
