import normalizeState from './normalizeState'

const BASE_URL = 'http://valerystatinov.com/api' 

const request = (url, method, body) => {
    if (method === 'GET') {
        return fetch(`${BASE_URL}${url}`, {
            method,
            headers: {
                Token: 'Valera',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
    } else {
        return fetch(`${BASE_URL}${url}`, {
            method,
            headers: {
                Token: 'nyht',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
    }
}

const get = (url) => {
    return request(url, 'GET')
}

const post = (url, body) => {
    return request(url, 'POST', body)
}

const loadTasks = (project_id) => {
    return get(`/projects/${project_id}/tasks/`).then((response) => {
        return response
    })
}

export const loadProjects = () => {    
    return get('/projects/').then((response) => {
        const projects = []

        for (const i in response) {
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

        for (const id in projects_ids) {
            loadTasks(projects_ids[id]).then((tasks) => {
                projects[id].tasks = tasks
            })
        }

        console.log(normalizeState(projects))
        return normalizeState(projects)
    }).catch((error) => {
        console.log(error)
    })
}
