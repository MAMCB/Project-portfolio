import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Button } from "flowbite-react";

const ProjectsCard = ({project}) => {

  const checkScreenSize = () => {
    console.log(window.innerWidth);

    console.log(project.fields.fullyResponsive);
    if(window.innerWidth < 1536 && !project.fields.fullyResponsive){
      alert("This project is not fully responsive, it may not look good on your device")
    }
  }


  return (
    <Card
      style={{
        marginLeft: "auto",
        marginRight: "auto",
      }}
      className=" w-full md:w-2/3  md:max-w-2xl"
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
          onClick={checkScreenSize}
        >
          <Button >Live version</Button>
        </Link>
      )}
      <div className="flex justify-between">
        <Link
          className="text-lg font-bold tracking-tight text-gray-900 dark:text-white"
          to={project.fields.githubRepoLink}
          target="_blank"
        >
          <Button>Github link</Button>
        </Link>

        <Link to={`/projects/${project.sys.id}`}>
          <Button>See details</Button>
        </Link>
      </div>
        {documentToReactComponents(project.fields.richDescription, {
          renderNode: {
            text: (text) => text,
            paragraph: (node, children) => (
              <p className="mb-2 text-black dark:text-white">{children}</p>
            ),
            "embedded-entry-inline": (node) => {
              const { data } = node;
              const { target, title } = data.target.fields;
              return (
                <div>
                  <a
                    href={target}
                    title={title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </a>
                </div>
              );
            },
            // Add the 'a' tag renderer to handle links
            hyperlink: (node, children) => {
              const { data } = node;
              const { uri } = data;
              return (
                <a href={uri} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              );
            },
          },
        })} 
        
    
      {project.fields.contributors && (
        <div>
          <h5 className="mb-2 text-black dark:text-white">Contributors: </h5>
          {documentToReactComponents(project.fields.contributors, {
            renderNode: {
              text: (text) => text,
              paragraph: (node, children) => (
                <p className="mb-2 text-black dark:text-white">{children}</p>
              ),
              "embedded-entry-inline": (node) => {
                const { data } = node;
                const { target, title } = data.target.fields;
                return (
                  <div>
                    <a
                      href={target}
                      title={title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {title}
                    </a>
                  </div>
                );
              },
              // Add the 'a' tag renderer to handle links
              hyperlink: (node, children) => {
                const { data } = node;
                const { uri } = data;
                return (
                  <a href={uri} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                );
              },
            },
          })}
        </div>
      )}
    </Card>
  );
};

export default ProjectsCard;
