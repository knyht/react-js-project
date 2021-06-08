const normalizeState = (projects) => {
  const normalizeBy = (key) => {
    return (data, item) => {
      data[item[key]] = item
      return data
    }
  }
  
  const normalizedTasks = projects.map(project => project.tasks).flat().reduce(normalizeBy('id'), {})

  const normalizedProjects = projects.map(project => ({
    ...project,
    tasksIds: project.tasks.map(task => task.id)
  })).reduce(normalizeBy('id'), {})

  const normalizedState = {
    projectsById: normalizedProjects,
    tasksById: normalizedTasks,
    task_name: '',
    task_description: '',
    project_name: ''
  }

  return normalizedState
}

export default normalizeState;
