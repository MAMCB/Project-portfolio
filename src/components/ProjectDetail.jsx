import React from 'react'
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
      const id = useParams();
  return (
    <div>ProjectDetail
        {id.id}
    </div>
  )
}

export default ProjectDetail