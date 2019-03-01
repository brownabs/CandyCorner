import Settings from "./Settings"

export default {
  getSpecificCandy(id) {
    return fetch(`${Settings.remoteURL}/candyArray/${id}`).then(e => e.json())
  },
  getAllCandies() {
    return fetch(`${Settings.remoteURL}/candyArray`).then(e => e.json())
  },
  removeAndListCandy(id) {
    return fetch(`http://localhost:5002/candyArray/${id}`, {
        method: "DELETE"
    })
  }
}