import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const ProjectsCard = ({project}) => {
  function getLastSubstringFromUrl(url) {
    // Split the URL by '/' character
    const parts = url.split('/');
   
    
    // Return the last substring
    return parts[4];
}
  return (
    <Card
      className="w-full  md:max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={project.fields.thumbnail.fields.file.url}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {project.fields.name}
      </h5>
      {project.fields.deployedProjectLink && (
        <Link
          className="text-lg font-bold tracking-tight text-gray-900 dark:text-white"
          to={project.fields.deployedProjectLink}
          target="_blank"
        >
          Live version
        </Link>
      )}
      <Link
        className="text-lg font-bold tracking-tight text-gray-900 dark:text-white"
        to={project.fields.githubRepoLink}
        target="_blank"
      >
        Github link
      </Link>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {project.fields.description}
      </p>
      {project.fields.contributors && (
        <div>
          <h5>Contributors: </h5>
          {project.fields.contributors.map((contributor, index) => (
            <Link className="mr-4" key={index} to={contributor} target="_blank">
              {getLastSubstringFromUrl(contributor)}
            </Link>
          ))}
        </div>
      )}
    </Card>
  );
};

export default ProjectsCard;
