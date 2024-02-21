import { Card } from "flowbite-react";

const ProjectsCard = ({project}) => {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={project.fields.thumbnail.fields.file.url}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {project.fields.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       {project.fields.description}
      </p>
    </Card>
  );
};

export default ProjectsCard;
