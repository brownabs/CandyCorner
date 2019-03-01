import Settings from "./Settings"

export default {
  getSpecificCandyType(id) {
    return fetch(`${Settings.remoteURL}/candyTypeArray/${id}`).then(e => e.json())
  },
  getAllCandyTypes() {
    return fetch(`${Settings.remoteURL}/candyTypeArray`).then(e => e.json())
  }
}