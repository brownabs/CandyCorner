import Settings from "./Settings"

export default {
  getSpecificStore(id) {
    return fetch(`${Settings.remoteURL}/storeArray/${id}`).then(e => e.json())
  },
  getAllStores() {
    return fetch(`${Settings.remoteURL}/storeArray`).then(e => e.json())
  }
}