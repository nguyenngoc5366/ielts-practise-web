import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import CardItem from '~/components/CardItem/CardItem'
import PaginationComponent from '~/components/PaginationComponent/PaginationComponent'
import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined'


function Home() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      bgcolor: (theme) => theme.palette.mode == 'dark' ? '#11120fed' : '#F1FFEF',
      alignItems: 'center',
      padding: { xs: '2rem 1rem', lg: '4rem', xl: '6rem' },
      gap: { xs: 10, lg: 12, xl: 16 },
      flex: 'auto'
    }}>
      <Box sx={{
        display: 'flex',
        gap: { xs: 4, lg: 8 },
        width: '100%',
        justifyContent: { xs: 'center', lg: 'flex-start' },
        alignItems: 'center'
      }}>
        <Typography
          variant='h4'
          sx={{
            textAlign: 'left',
            textTransform: 'uppercase',
            fontWeight: 500
          }}
        >
          Welcome back, admin
        </Typography>
        <WavingHandOutlinedIcon
          fontSize='large'
          sx={{
            color: (theme) => theme.palette.mode == 'dark' ? 'rgb(102, 179, 255)' : '#002995'
          }}
        />
      </Box>
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', xl: 'row' },
        gap: { xs: 16, xl: 10 }
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          width: { xs: '100%', xl: '50%' },
          backgroundColor: (theme) => theme.palette.mode == 'dark' ? '#57637526' : '#fff',
          borderRadius: '8px',
          padding: { xs: '24px', xl: '24px 16px' }
        }}>
          <Typography
            variant='h5'
            sx={{
              width: '100%',
              textAlign: 'left',
              textTransform: 'uppercase',
              fontWeight: 500
            }}
          >
            Bài làm gần đây
          </Typography>
          <Grid container
            rowSpacing={{ xs: 5, xl: 0 }}
            columnSpacing={{ xs: 0, md: 5, xl: 3 }}
            sx={{ width: '100%', marginBottom: 2 }}
          >
            <Grid xs={12} md={6} xl={4}>
              <CardItem />
            </Grid>
            <Grid xs={12} md={6} xl={4}>
              <CardItem />
            </Grid>
            <Grid xs={12} md={6} xl={4}>
              <CardItem />
            </Grid>
          </Grid>
          <PaginationComponent />
        </Box>
      </Box>
    </Box>
  )
}

export default Home