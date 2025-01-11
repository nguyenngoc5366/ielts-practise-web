import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActionArea from '@mui/material/CardActionArea'
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions'
import TagCard from './TagCard/TagCard'
import { Hidden } from '@mui/material'

const RADIUS_CARD = '12px'

function CardItem() {
  return (
    <Card sx={{
      boxShadow: 'rgba(0, 0, 0, 0.11) 1px 2px 3px 1px',
      borderRadius: RADIUS_CARD,
      '&:hover img': {
        transform: 'scale(1.25)'
      }
    }}>
      <CardActionArea>
        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          paddingTop: 9/16,
          aspectRatio: 16/9,
          borderTopLeftRadius: RADIUS_CARD,
          borderTopRightRadius: RADIUS_CARD,
          overflow: 'hidden'
        }}>
          <CardMedia
            sx={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              left: 0,
              top: 0,
              borderTopLeftRadius: RADIUS_CARD,
              borderTopRightRadius: RADIUS_CARD,
              objectFit: 'cover',
              transition: 'transform .3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            component="img"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0O1n9WgnyeS_dH5zy4LGzd-dKlddl0lfIVw&s"
            alt="card-item-1"
          />
          <TagCard />
        </Box>
        <CardContent sx={{
          paddingY: 3,
          paddingX: { xl: 2 }
        }}>
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: { xl: '18px' },
              overflow: 'hidden',
              display: '-webkit-box',
              '-webkit-box-orient': 'vertical',
              '-webkit-line-clamp': '2'
            }}>
            Tiêu đề bài học Tiêu đề bài học Tiêu đề bài học Tiêu đề bài học Tiêu đề bài học
          </Typography>
          {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions sx={{
        justifyContent: 'flex-end',
        paddingX: { xs: 4, xl: 2 },
        paddingBottom: 3,
        '& .MuiButton-root': {
          borderWidth: '2px !important'
        }
      }}>
        <Button
          size="medium"
          variant='outlined'
          color="primary"
        >
          Xem lại
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardItem