import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Container from '@mui/material/Container'
import Home from './pages/Home/_id'
import Header from '~/components/Header/Header'
import Register from './pages/Auth/Register'
import SignIn from './pages/Auth/SignIn'
import Box from '@mui/material/Box'
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        // bgcolor: (theme) => theme.palette.mode == 'dark' ? '#11120fed' : '#F1FFEF'
        // bgcolor: (theme) => theme.palette.mode == 'dark' ? '#11120fed' : '#FFDCCC'
      }}
    >
      <Box sx={{
        width: '100%',
        display: 'flex',
        position: 'relative',
        inset: '0px'
      }}>
        <SideBar />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 auto'
        }}>
          <Header />
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<SignIn />} />
              <Route path='/signup' element={<Register />} />
            </Routes>
          </Router>
        </Box>
      </Box>
    </Container>
  )
}

export default App
