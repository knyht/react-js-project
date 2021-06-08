// не понятно, почему в projectsById сохраняется поле tasks
// начало лекции про нормализацию

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
    name: '',
    description: '',
    project_name: '',
    theme: DEFAULT_THEME
  }

  return normalizedState
}
