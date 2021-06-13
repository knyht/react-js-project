const normalizeState = (projects) => {
  const normalizeBy = (key) => {
    return (data, item) => {
      data[item[key]] = item
      return data
    }
  }
  
  console.log(projects)
  // const normalizedTasks = projects.map(project => project.tasks).flat().reduce(normalizeBy('id'), {})
  console.log(projects.map(project => {
    const keys = Object.keys(project)
  
    for (let k of keys) {
      console.log(k, project[k])
    }
    return project.tasks
  }))
  
  const normalizedTasks = projects.map(project => project.tasks).flat().reduce((tasks, project_task) => {
    const { id } = project_task
    tasks[id] = {...project_task}
    return tasks
  }, {})
  console.log(normalizedTasks)

  const normalizedProjects = projects.map(project => ({
    ...project,
    tasksIds: project.tasks.map(task => task.id)
  })).reduce(normalizeBy('id'), {})
  console.log(normalizedProjects)

  const normalizedState = {
    projectsById: normalizedProjects,
    tasksById: normalizedTasks,
    task_name: '',
    task_description: '',
    project_name: '',
    test: []
  }

  return normalizedState
}

export default normalizeState;
