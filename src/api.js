import normalizeState from './normalizeState'

const BASE_URL = 'http://valerystatinov.com/api' 

const request = (url, method, body) => {
    if (method === 'GET') {
        return fetch(`${BASE_URL}${url}`, {
            method,
            headers: {
                Token: 'nyht',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
    } else if (method === 'POST') {
        return fetch(`${BASE_URL}${url}`, {
            method,
            headers: {
                Token: 'nyht',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
    } else if (method === 'PUT') {
        return fetch(`${BASE_URL}${url}`, {
            method,
            headers: {
                Token: 'nyht',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }
}

const get = (url) => {
    return request(url, 'GET')
}

const post = (url, body) => {
    return request(url, 'POST', body)
}

const put = (url, body) => {
    return request(url, 'PUT', body)
}

const loadTasks = (project_id) => {
    return get(`/projects/${project_id}/tasks/`).then((response) => {
        return response
    })
}

export const uploadCompletedStatusTask = (project_id, task_id, task_name, task_description) => {
    const completed_task = {
        name: task_name,
        description: task_description,
        completed: true,
        priority: 1,
        projectId: Number(project_id)
    }
    return put(`/projects/${project_id}/tasks/${task_id}/`, completed_task)
}

export const uploadTask = (project_id, new_task_name, new_task_description) => {
    const new_task = {
        name: new_task_name,
        description: new_task_description,
    }
    return post(`/projects/${project_id}/tasks/`, new_task)
}

export const uploadProject = (name_new_project) => {
    const new_project = {
        name: name_new_project
    }
    return post('/projects/', new_project)
}

export const loadState = () => {    
    return get('/projects/').then((response) => {
        const projects = []

        for (let i in response) {
            projects[i] = {
                id: response[i].id,
                name: response[i].name,
                tasks: []
            }
        }

        const projects_ids = projects.reduce((accumulator, project) => {
            const { id } = project
            accumulator = [...accumulator, id]
            return accumulator
        }, [])

        let load_tasks_requests = projects_ids.map(project_id => loadTasks(project_id))

        const state = Promise.all(load_tasks_requests).then(responses => {
            for (response in responses){
                projects[response].tasks = responses[response]
            }
            return normalizeState(projects)
        })

        return state
    }).catch((error) => {
        console.log(error)
    })
}
