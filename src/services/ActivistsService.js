import http from '../utils/http'

class ActivistsService {

  fetchActivists = async () => {
    try {
      const response = await http.get('?_limit=10');
      if (response.status === 200) {
        return response.data
      }
    } catch(error) {
      return error
    }
  }

  addActivist = (credentials) => {
    return new Promise((resolve, reject) => {
      try {
        http.post('/', credentials)
        .then(({ data }) => {
          if (data) {
            resolve(data)
            return data
          } else {
            reject('Error occured')
          }
        })
      } catch (error) {
        reject('An unexpected error has occured')
        return error
      }
    })
  }

  // addActivist = async (dataValues) => {
  //   try {
  //     const response = await http.post('/', dataValues)
  //     if (response.status === 201) {
  //       console.log('dat', response.data)
  //       return response.data
  //     }
  //   } catch (error) {
  //     return error
  //   }
  // }

}

export default ActivistsService
