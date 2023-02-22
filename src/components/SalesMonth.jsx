/* ========== EXTERNAL MODULES ========== */
import { useEffect } from 'react';
import { Paper, Grid } from '@mui/material';


/*========== INTERNAL MODULES ========== */
import { usePoints } from '../context/PointsContext.js';

/* ========== EXPORTS ========== */
export default function SalesMonth({ month, sales }) {

  /*--- STATE HOOKS --- */
  const { updatePoints } = usePoints();

  /*--- LIFECYCLE METHODS --- */
  useEffect(() => {
    let pointsThisMonth = 0

    sales.forEach(sale => {
      if (sale >= 50 && sale <= 100) {
        pointsThisMonth = pointsThisMonth + sale - 50;
      } else if (sale >= 100) {
        pointsThisMonth = pointsThisMonth + 50 + (2 * (sale - 100));
      }
    })

    updatePoints(month, pointsThisMonth)
  }, [sales, month])


  /* --- RENDER METHODS --- */
  const renderMonthHistory = () => {
    return sales.map((sale, index) => {
      return (
        <Paper
          key={'salesData' + index}
          sx={{
            margin: '0.35rem',
            padding: '0.35rem',
            background: '#f5f5f0',
          }}
          >
          {'$' + sale + '\n'}
        </Paper>
      )
    });
  }

  /* --- RENDERER --- */
  return (
    <>
      <Grid
        container spacing={2}
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
        sx={{
          margin: '10px',
          width: '75vw',
        }}
        >
         {renderMonthHistory()}
      </Grid>
      {/* <Container sx={{width: '50vw'}}>
        <p key={month}>{month} Points: <strong>{points}</strong></p>
      </Container> */}
    </>
  );
}