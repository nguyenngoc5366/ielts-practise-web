import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function TagCard() {
  return (
    <Box sx={{
      position: 'absolute',
      top: { xs: '12px', xl: '8px' },
      left: { xs: '12px', xl: '8px' },
      display: 'flex',
      alignItems: 'center',
      padding: { xs: '8px 16px', xl: '4px 12px' },
      bgcolor: 'rgba(255,255,255,.8)',
      borderRadius: '10px',
      gap: '2px'
    }}>
      <Typography variant='body1' color={'green'} sx={{ fontWeight: 500 }}>10</Typography>
      <Typography variant='body1' sx={{ fontWeight: 500 }}>/</Typography>
      <Typography variant='body1' sx={{ fontWeight: 500 }}>15</Typography>
    </Box>
  )
}

export default TagCard