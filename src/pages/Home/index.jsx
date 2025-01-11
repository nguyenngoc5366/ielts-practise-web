import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const bgHeroUrl = 'https://marvelish.edu.vn/wp-content/uploads/2023/10/luyen-thi-ielts-lo-trinh-thoi-gian-phuong-phap-chi-phi-2.png'

function Home() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', lg: 'row' },
      bgcolor: (theme) => theme.palette.mode == 'dark' ? '#11120fed' : '#FFDCCC',
      alignItems: 'center',
      padding: { xs: '2rem 1rem', lg: '2rem', xl: '4rem' },
      gap: 12,
      flex: 'auto'
    }}>
      <Box sx={{
        width: { xs: '100%', lg: '50%' },
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        alignItems: { xs: 'center', lg: 'flex-start' },
        pt: { xs: 8, lg: 0 }
      }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: 28, lg: 32, xl: 48 },
            fontWeight: 700,
            textTransform: 'uppercase',
            lineHeight: '1.5',
            letterSpacing: '0.03em',
            textAlign: { xs: 'center', lg: 'left' },
            textWrap: 'nowrap'
          }}>
          BẠN MUỐN TỰ HỌC IELTS?
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: 18,
            lineHeight: '1.5',
            fontWeight: 500,
            letterSpacing: '0.05em',
            maxWidth: { xs: 3/4, lg: 1 },
            textAlign: { xs: 'center', lg: 'left' }
          }}>
          IELTS FOR EVERYONE, nền tảng hỗ trợ tự học IELTS 4 kỹ năng cho mọi lứa tuổi, mọi trình độ MIỄN PHÍ.
        </Typography>
        <Button
          variant="contained"
          color='primary'
          href='#'
          sx={{
            mt: 1,
            width: 'fit-content'
          }}
        >
          ĐĂNG KÝ MIỄN PHÍ NGAY
        </Button>
      </Box>
      <Box sx={{
        width: { xs: '100%', lg: '50%' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 9/16,
        aspectRatio: 16/9
      }}>
        <Box component="img"
          sx={{
            width: '100%',
            position: 'absolute',
            left: 0,
            top: 0
          }}
          alt="Background-home"
          src={bgHeroUrl}
        />
      </Box>
    </Box>
  )
}

export default Home