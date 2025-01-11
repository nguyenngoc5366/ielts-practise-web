import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Profiles from './Menus/Profiles'
import CloseIcon from '@mui/icons-material/Close'
import { blueGrey } from '@mui/material/colors'

function Header() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box sx={{
      width: '100%',
      position: 'sticky',
      top: 0,
      left: 0,
      zIndex: 50
    }}>
      <AppBar
        component="nav"
        position='sticky'
        sx={{
          bgcolor: (theme) => theme.palette.mode == 'dark' ? '#070d08f7' : '#F1FFEF',
          paddingLeft: { xs: '1rem', lg: '2rem', xl: '2rem' },
          paddingRight: { xs: '1rem', lg: '2rem', xl: '2rem' }
        }}
      >
        <Toolbar sx={{
          justifyContent: 'space-between',
          gap: 2,
          paddingLeft: '0 !important',
          paddingRight: '0 !important'
        }}>
          <Box sx={{
            display: 'flex',
            width: { xs: 1/2, lg: 7/12, xl: 5/12 }
          }}>
            <TextField
              id="search-basic"
              label="Search..."
              size='small'
              type='text'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value) }
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <CloseIcon
                    fontSize='small'
                    sx={{
                      opacity: !searchValue ? 0 : 100,
                      color: (theme) => theme.palette.mode == 'dark' ? 'white' : '#2C333A',
                      cursor: 'pointer',
                      transition: 'opacity .2s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onClick={() => setSearchValue('')}
                  />
                </InputAdornment>
              }}
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  '& .MuiOutlinedInput-notchedOutline':{
                    top: '-4px'
                  },
                  '& fieldset':{
                    borderRadius: '6px 0 0 6px',
                    borderWidth: '1px !important',
                    borderRight: '0px !important',
                    borderColor: (theme) => theme.palette.mode == 'dark' ? 'white' : '#A1ACB8'
                  },
                  '&:hover fieldset':{
                    borderColor: (theme) => theme.palette.mode == 'dark' ? 'white' : '#164C7E'
                  },
                  '&.Mui-focused fieldset':{
                    borderColor: (theme) => theme.palette.mode == 'dark' ? 'white' : '#164C7E'
                  },
                },
                '& label': {
                  color: (theme) => theme.palette.mode == 'dark' ? 'white' : '#164C7E',
                  top: '1px'
                },
                '& input': {
                  color: (theme) => theme.palette.mode == 'dark' ? 'white' : '#2C333A',
                },
                '& label.Mui-focused': { color: (theme) => theme.palette.mode == 'dark' ? 'white' : '#164C7E' },
              }}
            />
            <Button
              variant="contained"
              color='primary'
              aria-label="search icon"
              sx={{
                borderRadius: '0 6px 6px 0',
                padding: 1,
                minWidth: '40px'
              }}
            >
              <SearchIcon />
            </Button>
          </Box>
          <Box sx={{
            display: 'flex',
            width: { xs: 1/2, lg: 1/3, xl: 5/12 },
            justifyContent: 'flex-end'
          }}>
            <Box sx={{
              gap: 2,
              display: 'flex',
              width: 'fit-content'
            }}>
              <Button variant="contained" color='secondary' href='login'>LogIn</Button>
              <Button variant="contained" color='primary' href='signup'>Sign up</Button>
            </Box>
            {/* <Profiles /> */}
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header