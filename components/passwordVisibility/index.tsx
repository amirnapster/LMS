import { useEffect, useMemo, useState } from 'react'
import  Visibility from '@mui/icons-material/Visibility'
import  VisibilityOff  from '@mui/icons-material/VisibilityOff'
import { IconButton } from '@mui/material'

const PasswordVisibility = ({ id }: { id?: string }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!id) return
    const el = document.getElementById(id)
    if (visible) el?.setAttribute('type', 'text')
    else el?.setAttribute('type', 'password')
  }, [visible, id])

  const toggleVisibility = () => setVisible(!visible)

  const visibilityMemorized = useMemo(
    () => (
      <IconButton className='p-0' onClick={toggleVisibility}>
        {visible ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    ),
    [visible]
  )

  return visibilityMemorized
}

export default PasswordVisibility
