/* ========== EXTERNAL MODULES ========== */
import React, {useContext, useState } from 'react';


/* ========== CONTEXTS ========== */
const PointsContext = React.createContext();


/* ========== EXPORTS ========== */
export function usePoints() {
  return useContext(PointsContext)
}

export function PointsProvider({ children }) {

/* --- STATE HOOKS --- */
const [points, setPoints] = useState({});
const [totalPoints, setTotalPoints] = useState(0);

/* --- LIFECYCLE METHODS --- */
/* --- EVENT HANDLERS --- */
/* --- RENDER METHODS --- */

const updatePoints = (month, points) => {
  setPoints(prev => ({
    ...prev,
    [month]: points,
  }))
}

const updateTotalPoints = () => {
  let totalPoints = 0;

  for (let month in points) {
    totalPoints = totalPoints + points[month]
  }

  setTotalPoints(totalPoints);
}

const resetTotalPoints = () => {
  setTotalPoints(0);
}


/* --- RENDERER --- */
  return (
    <PointsContext.Provider
      value={{
        points,
        totalPoints,
        updatePoints,
        resetTotalPoints,
        updateTotalPoints,
      }}
    >
{children}
    </PointsContext.Provider>
  )
}