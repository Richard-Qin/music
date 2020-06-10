import React from 'react'
import { renderRoutes } from "react-router-config";

function Recommend(porps) {
  const { route } = porps
  return (
    <div>
      <div>Recommend</div>
      {renderRoutes(route.routes)}
    </div>
  )
}
export default React.memo(Recommend)