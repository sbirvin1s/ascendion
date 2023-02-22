/* ========== EXTERNAL MODULES ========== */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, ButtonGroup, Container } from '@mui/material';
import { createGlobalStyle } from 'styled-components';

/* ========== INTERNAL MODULES ========== */
import SalesHistory from '../components/SalesHistory.jsx';
import { usePoints } from '../context/PointsContext.js';

/* ========== EXPORTS ========== */
export default function Home() {

  /* --- STATE HOOKS --- */
  const [salesHistory, setSalesHistory] = useState();
  const { totalPoints, resetTotalPoints, updateTotalPoints } = usePoints();

  /*--- LIFECYCLE METHODS --- */
  useEffect(() =>  {
    if (!salesHistory) {
      resetTotalPoints(0);
    } else {
      updateTotalPoints()
    }
  }, [salesHistory, updateTotalPoints, resetTotalPoints])

  /* --- EVENT HANDLERS --- */
  const handleImport = () => {
    axios.get('/data')
    .then(salesData => setSalesHistory(salesData.data))
    .catch(err => console.error(err))
  }

  const handleReset = () => {
    setSalesHistory(null);
  }

  /* --- RENDERER --- */
  return (
    <>
      <GlobalStyle/>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Customer Rewards Program</h1>
        <ButtonGroup
          variant='contained'
          aria-label='data management button group'
        >
          <Button
            color='primary'
            disabled={salesHistory && true}
            onClick={handleImport}
          >
            Import Records
          </Button>
          <Button
            color='error'
            disabled={!salesHistory}
            onClick={handleReset}
          >
            Reset Records
          </Button>
        </ButtonGroup>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>Purchase History - YTD</h3>
          <p>Total Points: <strong>{totalPoints}</strong></p>
          <SalesHistory salesData={salesHistory} />
        </Container>
      </Container>
    </>
  )
}

/* ========== STYLES ========== */
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    color: #171816;
  }
`;