import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { registerMulationFn } from '~/api/index'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'

const bgHeroUrl = 'https://vietaumy.edu.vn/wp-content/uploads/2024/08/HIHIH.jpg'

export default function Register() {
  const [isSubmited, setIsSubmited] = useState(false)
  const validateSchema = yup.object({
    name: yup.string().required('Full name is required'),
    username: yup.string().required('User name is required'),
    email: yup.string().email('Email is not valid').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be longer than or equal to 6 characters'),
    confirmPassword: yup.string().required('Confirm Password is required').test('password-should-match', 'Passwords must match', function(value) {return this.parent.password === value})
  })
  const form = useForm({
    resolver: yupResolver(validateSchema),
    defaltValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      username: ''
    },
    mode: 'all'
  })

  const { register, handleSubmit, formState, control } = form
  const { errors } = formState
  const onSubmit = (values) => {
    let data = {
      'name': values.name,
      'email': values.email,
      'password': values.password,
      'username': values.username,
      'address': 'default',
      'phone': '0111111111'
    }
    registerMulationFn(data)
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
            fontSize: { xs: '42px', lg: '36px', xl: '42px' },
            fontWeight: 600,
            textAlign: 'center',
            fontFamily: '"Segoe UI"'
          }}>
          Create an account
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
            gap: 4
          }}
        >
          {/* Full name */}
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
              Full Name:
            </Typography>
            <TextField
              hiddenLabel
              id="name"
              placeholder="Enter your full name"
              variant="outlined"
              size='small'
              {...register('name')}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </FormControl>
          {/* User name */}
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
              User Name:
            </Typography>
            <TextField
              hiddenLabel
              id="username"
              placeholder="Enter your full name"
              variant="outlined"
              size='small'
              {...register('username')}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          </FormControl>
          {/* Email */}
          <FormControl sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1
          }}>
            <Typography
              variant='body2'
              sx={{
                color: (theme) => theme.palette.mode == 'dark' ? '#fff' : '#5A6271',
                fontWeight: '500'
              }}
            >
              Email:
            </Typography>
            <TextField
              hiddenLabel
              id="email"
              type='email'
              placeholder="Enter your email"
              variant="outlined"
              size='small'
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </FormControl>
          {/* Password */}
          <FormControl sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1
          }}>
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
          {/* Confirm Password */}
          <FormControl sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1
          }}>
            <Typography
              variant='body2'
              sx={{
                color: (theme) => theme.palette.mode == 'dark' ? '#fff' : '#5A6271',
                fontWeight: '500'
              }}
            >
              Confirm Password:
            </Typography>
            <TextField
              hiddenLabel
              id="confirm-pwd"
              type='password'
              placeholder="Re-enter your password"
              variant="outlined"
              size='small'
              {...register('confirmPassword')}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          </FormControl>
          {/* Button submit */}
          <FormControl>
            <Button
              variant="contained"
              color='primary'
              type='submit'
              sx={{
                width: '100%',
                mt: 3,
                alignSelf: 'end',
                paddingX: 8
              }}
            >
              Register
            </Button>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{
        width: { xs: '100%', lg: '50%' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 2/3,
        aspectRatio: 3/2
      }}>
        <Box component="img"
          sx={{
            width: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            objectFit: 'cover',
            borderRadius: 5
          }}
          alt="Background-home"
          src={bgHeroUrl}
        />
      </Box>
    </Box>
  )
}
