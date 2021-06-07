import { Project } from '../Project/project'

const ProjectsList = ({ projectsById }) => {
    console.log(projectsById)
    const projects = Object.values(projectsById)
    console.log(projects)
    return (
        <div>
            {
                projects.map(project => <Project id={project.id} name={project.name} key={project.id} />)
            }
        </div>
    )
}

export default ProjectsList;
