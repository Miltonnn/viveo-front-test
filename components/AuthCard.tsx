import { Box, Paper, Typography } from '@mui/material'
import { ReactNode } from 'react'

type AuthCardProps = {
  title: string
  subtitle: string
  children: ReactNode
}

export default function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: '100%',
          maxWidth: 420,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 1,
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: 'text.secondary',
            mb: 3,
            textAlign: 'center',
          }}
        >
          {subtitle}
        </Typography>

        {children}
      </Paper>
    </Box>
  )
}