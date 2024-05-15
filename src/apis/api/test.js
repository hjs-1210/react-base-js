import axios from "axios"
import { TEST } from "../config/urls"

export default {
    async getList() {
        try {
            return await axios.host.get(TEST.GET_LIST)
        } catch (e) {
            return e.message
        }
    },
    async getOne(id) {
        try {
            return await axios.host.get(TEST.GET_ONE + id)
        } catch (e) {
            return e.message
        }
    },
    async post(params) {
        try {
            return await axios.host.post(TEST.INSERT, params)
        } catch (e) {
            return e.message
        }
    },
}
