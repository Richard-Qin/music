import React from 'react'
import { renderRoutes } from "react-router-config";

function Rank(porps) {
  const { route } = porps
  return (
    <div>
      <div>Rank</div>
      {renderRoutes(route.routes)}
    </div>
  )
}
export default React.memo(Rank)