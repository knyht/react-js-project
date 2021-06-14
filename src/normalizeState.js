const normalizeState = (projects) => {
  const normalizedTasks = projects.map(project => project.tasks).flat().reduce((tasks, project_task) => {
    const { id } = project_task
    tasks[id] = {
      id: project_task.id,
      name: project_task.name,
      description: project_task.description,
      completed: project_task.completed
    }
    return tasks
  }, {})

  const normalizedProjects = projects.map(project => ({
    id: project.id,
    name: project.name,
    tasksIds: project.tasks.map(task => task.id)
  })).reduce((projects, project) => {
    const { id } = project
    projects[id] = {...project}
    return projects
  }, {})

  const normalizedState = {
    projectsById: normalizedProjects,
    tasksById: normalizedTasks,
    task_name: '',
    task_description: '',
    project_name: '',
  }
  return normalizedState
}

export default normalizeState;
