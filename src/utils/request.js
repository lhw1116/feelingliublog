import axios from 'axios'


// create an axios instance
const service = axios.create({
    baseURL: "/api",
    timeout: 5000
})

service.interceptors.response.use(
    response => {
        const res = response.data

        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== 200) {
            this.$message.error('This is an error message');
            return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            return res
        }
    },
    error => {
        if (!error.response) {
            this.$message.error(error.message);
        }
        return Promise.reject(error)
    }
)

export default service