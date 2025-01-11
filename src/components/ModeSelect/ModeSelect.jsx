import { useColorScheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    setMode(event.target.value)
  }
  return (
    <FormControl sx={{ maxWidth: '150px', justifySelf: 'end' }} size='medium'>
      <InputLabel
        id="system-mode-label"
        sx={{
          color: { color: (theme) => theme.palette.mode == 'dark' ? 'white' : '#05c46b' }
        }}
      >
        Mode
      </InputLabel>
      <Select
        defaultValue={mode}
        labelId="system-mode-label"
        id="system-mode"
        value={mode}
        label="SystemMode"
        onChange={handleChange}
        sx={{
          '& label': { color: (theme) => theme.palette.mode == 'dark' ? 'white' : '#05c46b' },
          '& input': { color: (theme) => theme.palette.mode == 'dark' ? 'white' : '#05c46b' },
          '& label.Mui-focused': { color: (theme) => theme.palette.mode == 'dark' ? 'white' : '#05c46b' },
        }}
      >
        <MenuItem value='light'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
            <LightModeIcon fontSize='small' />
            Light
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
            <DarkModeOutlinedIcon fontSize='small' />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
            <SettingsBrightnessIcon fontSize='small' />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect