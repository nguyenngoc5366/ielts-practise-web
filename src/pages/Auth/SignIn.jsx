import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { callApi, baseUrl } from '~/api/index'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import FormControl from '@mui/material/FormControl'

const bgHeroUrl = 'https://vietaumy.edu.vn/wp-content/uploads/2024/08/HIHIH.jpg'
const homeUrl = 'http://localhost:5173/'

export default function SignIn() {
  const validateSchema = yup.object({
    username: yup.string().required('User name is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be longer than or equal to 6 characters'),
  })
  const form = useForm({
    resolver: yupResolver(validateSchema),
    defaltValues: {
      username: '',
      password: ''
    },
    mode: 'all'
  })

  const { register, handleSubmit, formState, control } = form
  const { errors } = formState
  const onSubmit = async (values) => {
    let data = {
      password: values.password,
      username: values.username
    }
    let reponse = await callApi('/auth/login', 'POST', data).then((res) => { 
      window.location = homeUrl
    }).catch((err) => {console.log(err)})
  }
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', lg: 'row' },
      alignItems: 'center',
      height: 'calc(100vh - 64px)',
      padding: { xs: '1rem', md: '2rem', xl: '4rem' },
      gap: { xs: 4, lg: 12 }
    }}>
      <Box sx={{
        width: { xs: '100%', lg: '50%' },
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: (theme) => theme.palette.mode == 'dark' ? '#57637526' : '#fff',
        gap: 6,
        borderRadius: 5,
        // alignItems: { xs: 'center', lg: 'flex-start' },
        paddingY: { xs: 6, md: 8, xl: 10 },
        paddingX: { xs: 8, md: 12, lg: 10, xl: 12 }
      }}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontSize: { xs: '48px', lg: '36px', xl: '48px' },
            fontWeight: 600,
            textAlign: 'center',
            fontFamily: '"Segoe UI"'
          }}>
          Sign in
        </Typography>
        <Box
          component="form"
          control={control}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}
        >
          <FormControl
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}
          >
            <Typography
              variant='body2'
              sx={{
                color: (theme) => theme.palette.mode == 'dark' ? '#fff' : '#5A6271',
                fontWeight: '500'
              }}
            >
              User name:
            </Typography>
            <TextField
              hiddenLabel
              id="username"
              placeholder="Enter your username"
              variant="outlined"
              size='small'
              {...register('username')}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          </FormControl>
          <FormControl
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}
          >
            <Typography
              variant='body2'
              sx={{
                color: (theme) => theme.palette.mode == 'dark' ? '#fff' : '#5A6271',
                fontWeight: '500'
              }}
            >
              Password:
            </Typography>
            <TextField
              hiddenLabel
              id="pwd"
              type='password'
              placeholder="Enter your password"
              variant="outlined"
              size='small'
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </FormControl>
          <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 6
          }}>
            <FormControl>
              <FormControlLabel
                value="end"
                control={
                  <Checkbox size='small'/>
                }
                label="Remember password"
                labelPlacement="end"
                sx={{
                  ml: '-4px',
                  '& .MuiCheckbox-root': {
                    padding: 1
                  },
                  '& .MuiTypography-root': {
                    fontSize: '16px',
                    color: '#858F9B',
                    fontWeight: 500
                  }
                }}
              />
            </FormControl>
            <Button
              size='small'
              href="#"
              sx={{
                fontSize: '14px',
                color: '#858F9B',
                fontWeight: 500,
                '&:hover': {
                  bgcolor: 'transparent',
                  color: '#5A6271'
                }
              }}
            >
              Forgot password?
            </Button>
          </Box>
          <FormControl>
            <Button
              variant="contained"
              color='primary'
              type='submit'
              sx={{
                width: '100%' ,
                mt: 1,
                mb: 2,
                alignSelf: 'end',
                paddingX: 8,
                textTransform: 'uppercase'
              }}
            >
              Sign in
            </Button>
          </FormControl>
          {/* <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            width: '100%'
          }}>
            <Typography variant='body2' sx={{ fontWeight: 600, textAlign: 'center' }}>
              or Sign in with:
            </Typography>
            <Box sx={{
              width: '100%',
              display: 'flex',
              gap: { xs: 4, md: 6 }
            }}>
              <Button
                variant="contained"
                color='error'
                href='#'
                startIcon={<GoogleIcon size='small' />}
                sx={{
                  width: { xs: '100%', md: '50%' },
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  letterSpacing: '0.03cm'
                }}
              >
                Google
              </Button>
              <Button
                variant="contained"
                color='success'
                href='#'
                startIcon={<FacebookIcon size='small' />}
                sx={{
                  width: { xs: '100%', md: '50%' },
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  letterSpacing: '0.03cm'
                }}
              >
                Facebook
              </Button>
            </Box>
          </Box> */}
        </Box>
      </Box>
      <Box sx={{
        width: { xs: '100%', lg: '50%' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 2/3,
        aspectRatio: 3/2,
      }}>
        <Box component="img"
          sx={{
            width: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            objectFit: 'cover',
            borderRadius: 5,
          }}
          alt="Background-home"
          src={bgHeroUrl}
        />
      </Box>
    </Box>
  )
}
