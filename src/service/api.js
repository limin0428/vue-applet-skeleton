import * as home from './modules/home.js'
import * as todo from './modules/todo.js'
console.log(home)
export default {
  ...home,
  ...todo
}
