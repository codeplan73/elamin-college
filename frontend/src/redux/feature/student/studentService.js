import axios from 'axios'

 const API_URL = 'http://localhost:5000/api/v1/admin/'

 const getStudents = async () => {
    const response = await axios.get(API_URL)

    return response.data
 }

 const studentService = {
   getStudents
 } 

 export default studentService