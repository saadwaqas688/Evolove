import { Grid } from '@mui/material'
import React from 'react'
import HomeCoachcom from '../HomeCoachCom/HomeCoachCom'

export const HomeCoachesContainer = () => {
  return (
      <>
    <Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <HomeCoachcom />
    </Grid>
  </Grid>
  </>
  )
}
