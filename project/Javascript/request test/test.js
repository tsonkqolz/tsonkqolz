const fetch = require('node-fetch')
const queryList = []
const url = 'https://jsonplaceholder.typicode.com/todos'

const getData = async () => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const jsonResponse = await response.json()
        printForEach(jsonResponse)
      }
    } catch (error) {
      console.log(error)
    }

}
const printForEach = req => {
  req.forEach(json => queryList.push(json))
  console.log(queryList.length)
  console.log(typeof queryList[1])
}
getData()