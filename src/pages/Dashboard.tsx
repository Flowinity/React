import React, { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../store/hooks.ts"
import { setUser } from "../features/user/index.ts"
import axios from "../lib/axios.ts"
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  LinearProgress,
  Paper,
  Typography
} from "@mui/material"

export default function Dashboard() {
  const user = useAppSelector((state) => state.user)

  const [state, setState] = React.useState({
    stats: {}
  })

  function getData() {
    axios.get("/core", {}).then((res) => {
      console.log("ee2")
      console.log(res.data)
      setState(res.data)
      console.log("ee")
      console.log(state)
    })
  }

  useEffect(() => {
    console.count("hmm")
    getData()
  }, [])

  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper
            sx={{
              pt: 4,
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              pb: 4
            }}
          >
            {user.avatar ? (
              <Avatar
                sx={{ width: 92, height: 92 }}
                src={`https://i.troplo.com/i/${user.avatar}`}
              />
            ) : (
              <Avatar sx={{ width: 92, height: 92 }}>
                {user.username.charAt(0)}
              </Avatar>
            )}
            <Typography variant="h4" sx={{ mt: 1 }}>
              {user.username}
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              {user.description}
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              <strong>Created At:</strong> {user.createdAt}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          {/* grid of 4 boxes */}
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper
                sx={{
                  pt: 4,
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  pb: 4
                }}
              >
                <Typography variant="h4" sx={{ mt: 1 }}>
                  {state.stats.collections}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  Collections
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                sx={{
                  pt: 4,
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  pb: 4
                }}
              >
                <Typography variant="h4" sx={{ mt: 1 }}>
                  {state.stats.collectionItems}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  Collectivized Items
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                sx={{
                  pt: 4,
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  pb: 4
                }}
              >
                <Typography variant="h4" sx={{ mt: 1 }}>
                  {state.stats.pulse}h
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  Global time spent on TPU
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                sx={{
                  pt: 4,
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  pb: 4
                }}
              >
                <Typography variant="h4" sx={{ mt: 1 }}>
                  {state.stats.users}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  Users
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                sx={{
                  pt: 4,
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  pb: 4
                }}
              >
                <Typography variant="h4" sx={{ mt: 1 }}>
                  {state.stats.uploads}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  Uploads
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                sx={{
                  pt: 4,
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  pb: 4
                }}
              >
                <Typography variant="h4" sx={{ mt: 1 }}>
                  {user.stats.pulse}h
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  Site Usage
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                sx={{
                  pt: 4,
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  pb: 4
                }}
              >
                <Typography variant="h4" sx={{ mt: 1 }}>
                  {(
                    Math.round((state.stats.usage / 1073741824) * 100) / 100
                  ).toFixed(2)}
                  GB
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  Data Usage
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                sx={{
                  pt: 4,
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  pb: 4
                }}
              >
                <Typography variant="h4" sx={{ mt: 1 }}>
                  {state.stats.pulses}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  Pulses
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                sx={{
                  pt: 4,
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  pb: 4
                }}
              >
                <Typography variant="h4" sx={{ mt: 1 }}>
                  {state.stats.invites}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  Invited Users
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
