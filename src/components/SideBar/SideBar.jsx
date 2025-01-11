import { useState } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Drawer from '@mui/material/Drawer'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined'
import ScoreOutlinedIcon from '@mui/icons-material/ScoreOutlined'
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined'
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import LogoIcon from '~/assets/HCMUT.png'
import ModeSelect from '../ModeSelect/ModeSelect'

const LISTITEMBUTTON_STYLE = {
  textTransform: 'uppercase',
  padding: { xs: 1, lg: 3 },
  transition: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '.3s',
  borderRadius: 1,
  '& .MuiTypography-root': {
    fontWeight: 500,
    color: (theme) => theme.palette.mode == 'dark' ? '#DDE2E9' : '#2C333A'
  },
  '& .MuiListItemIcon-root': {
    color: (theme) => theme.palette.mode == 'dark' ? '#DDE2E9' : '#2C333A'
  },
  '&:hover': {
    backgroundColor: (theme) => theme.palette.mode == 'dark' ? '#1e272e' : '#E3FDDF',
  }
}

function SideBar() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open)
  };
  return (
    <Drawer open={open} variant='permanent' sx={{
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      width: { xs: '176px', lg: '280px' },
      height: '100vh',
      '& .MuiDrawer-paper' : {
        backgroundColor: (theme) => theme.palette.mode == 'dark' ? '#070f0cf2' : 'white',
        width: { xs: '180px', lg: '280px' },
        boxSizing: 'border-box',
        borderRight: '1px',
        overflow: 'unset',
        padding: '0 4px',
      },
    }}>
      <Box sx={{
        backgroundColor: 'inherit',
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: { xs: 3, lg: 5 },
        pb: { xs: 10, lg: 10 },
        gap: 14,
      }}>
        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Box component="img"
            sx={{
              height: 96,
              width: 96
            }}
            alt="Logo."
            src={`${LogoIcon}`}
          />
        </Box>
        <Box
          sx={{
            width: '100%',
            flex: '1 1 auto'
          }}
        >
          <List component="nav"
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 2, lg: 0 },
              flex: '1 1 auto'
            }}
          >
            <ListItemButton sx={ LISTITEMBUTTON_STYLE }>
              <ListItemIcon>
                <HomeOutlinedIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton sx={ LISTITEMBUTTON_STYLE }>
              <ListItemIcon >
                <GradingOutlinedIcon fontSize="large"/>
              </ListItemIcon>
              <ListItemText primary="Exam" />
            </ListItemButton>
            <ListItemButton sx={ LISTITEMBUTTON_STYLE }>
              <ListItemIcon >
                <EventRepeatOutlinedIcon fontSize="large"/>
              </ListItemIcon>
              <ListItemText primary="Practise" />
            </ListItemButton>
            <ListItemButton sx={ LISTITEMBUTTON_STYLE }>
              <ListItemIcon >
                <SchoolOutlinedIcon fontSize="large"/>
              </ListItemIcon>
              <ListItemText primary="Learn" />
            </ListItemButton>
            <ListItemButton sx={ LISTITEMBUTTON_STYLE }>
              <ListItemIcon >
                <HistoryEduOutlinedIcon fontSize="large"/>
              </ListItemIcon>
              <ListItemText primary="Store" />
            </ListItemButton>
            <ListItemButton sx={ LISTITEMBUTTON_STYLE }>
              <ListItemIcon >
                <ScoreOutlinedIcon fontSize="large"/>
              </ListItemIcon>
              <ListItemText primary="Report" />
            </ListItemButton>
          </List>
        </Box>

        <ModeSelect />
      </Box>
    </Drawer>
  )
}

export default SideBar