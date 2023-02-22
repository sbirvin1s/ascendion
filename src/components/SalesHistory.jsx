/* ========== EXTERNAL MODULES ========== */
import {
  Skeleton,
  List,
  Stack,
  Box,
  Chip,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  } from '@mui/material';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  import styled from 'styled-components';

/* ========== INTERNAL MODULES ========== */
import SalesMonth from './SalesMonth.jsx';
import { usePoints } from '../context/PointsContext.js';

/* ========== EXPORTS ========== */
export default function SalesHistory({ setTotalPoints, salesData }) {

  /*--- STATE HOOKS --- */
  const { points } = usePoints();

  /* --- RENDER METHODS --- */
  const renderHistory = () => {
    if (salesData) {
      return salesData.map(month => {
        return (
          <Accordion key={month.month}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${month.month}-content`}
              id={`${month.month}-header`}
            >
              <Row>
                {/* <Chip color='primary' size='medium' label={month.month} /> */}
                <p>{month.month}</p>
                {/* <p>Points: {points}</p> */}
                {/* <Chip color='primary' size='medium' label={`Points: ${points}`} /> */}
                <Chip color='primary' size='medium' label={points[month.month]} />
              </Row>
            </AccordionSummary>
            <AccordionDetails>
              <SalesMonth
                month={month.month}
                sales={month.sales}
              />
            </AccordionDetails>
          </Accordion>
        )
      })
    } else {
      return (
        <Stack spacing={2}>
          <Skeleton variant='rounded' animation='wave' sx={{width: '75vw'}} height={100} />
          <Skeleton variant='rounded' animation='wave' sx={{width: '75vw'}} height={100} />
          <Skeleton variant='rounded' animation='wave' sx={{width: '75vw'}} height={100} />
          <Skeleton variant='rounded' animation='wave' sx={{width: '75vw'}} height={100} />
        </Stack>
      )
    }
  }

  /* --- RENDERER --- */
  return (
    <List>
      {renderHistory()}
    </List>
  );
}

/*========== STYLES ========== */

const Row = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 10px;
`