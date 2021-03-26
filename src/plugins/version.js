import { get } from 'lodash-es'
import { setStorage } from '../units/storage.js'
class Version {
  constructor (version, updateFn = () => {}) {
    this.version = version
    this.update = updateFn
    this.diff()
  }

  diff () {
    const oldVersion = get(localStorage, '_version', null)
    window._version = this.version
    if (oldVersion !== this.version) {
      this.update()
      setStorage('_version', this.version)
    }
  }
}
export default Version
