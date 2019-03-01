import Settings from "./Settings"

export default {
    getSpecificEmployee(id) {
        return fetch(`${Settings.remoteURL}/employeeArray/${id}`).then(e => e.json())
    },
    getAllEmployees() {
        return fetch(`${Settings.remoteURL}/employeeArray`).then(e => e.json())
    },
    removeAndList(id) {
        return fetch(`http://localhost:5002/employeeArray/${id}`, {
            method: "DELETE"
        })
    }
}