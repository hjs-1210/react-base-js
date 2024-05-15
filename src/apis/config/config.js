import axios, { AxiosHeaders } from "axios"
import { HOST_URL } from "./urls"
import apis from "@apis"

const success = function (response) {
    // TODO CHECK :: BASE API 에 맞게 Response Data 및 Error 설정
    return response.data
}
const fail = async error => {
    const originalRequest = error.config
    const errorResult = {
        resultCode: "",
        resultData: null,
        resultMessage: "Access Denied",
        status: "FAIL",
    }
    if (error.response.status == 403) {
        // Session Storage에서 Token 가져오기
        const accessToken = sessionStorage.getItem("TOKEN")
        const refreshToken = sessionStorage.getItem("REFRESHTOKEN")
        return await apis.Auth.refreshToken({ accessToken: accessToken, refreshToken: refreshToken })
            .then(async res => {
                if (res?.status == "SUCCESS") {
                    sessionStorage.setItem("TOKEN", res.resultData)
                    hostInstance.defaults.headers.common["X-AUTH-TOKEN"] = res.resultData
                    const requestHeader = originalRequest.headers
                    requestHeader.set("X-AUTH-TOKEN", accessToken)
                } else {
                    // Token이 비정상 적일 경우 Login 화면으로
                    sessionStorage.clear()
                    // window.location.href = "/login?session=expire"
                    return Promise.resolve(errorResult)
                }
            })
            .catch(() => {
                // Token 재발급 API 실패 시 Login 화면으로
                sessionStorage.clear()
                window.location.href = "/login?session=expire"
                return Promise.resolve(errorResult)
            })
    }
    return error.response.data
}

const hostInstance = axios.create({
    baseURL: HOST_URL,
})

/**
 * 응답 전 처리
 */
hostInstance.interceptors.response.use(success, fail)

hostInstance.interceptors.request.use(config => {
    config.headers = Object.assign({}, config.headers, { "X-AUTH-TOKEN": sessionStorage.getItem("TOKEN") })
    return config
})

axios.defaults.withCredentials = true

/**
 * 로그아웃 이후 Request Header에 Token 설정
 */
export const axiosClearAuthHeader = () => {
    delete hostInstance.defaults.headers.common["X-AUTH-TOKEN"]
}

/**
 * 인증 이후 Request Header에 Token 설정
 * @param token : JWT TOKEN
 */
export const axiosApplyConfig = token => {
    if (!token) throw "Token is required"
    hostInstance.defaults.headers.common["X-AUTH-TOKEN"] = token
}

// TODO CHECK :: STATUS 별 Error 처리
export function handleNetworkError(status) {
    switch (status) {
        case 0:
            console.log("네트워크 연결 유실")
            break
        case 401:
            console.log("401 인증 필요")
            break
        case 403:
            console.log("403 권한 없음")
            break
        case 404:
            console.log("404 잘못된 요청.")
            break
        case 500:
            console.log("500 서버 에러")
            break
        default: {
            if (status >= 500) {
                console.log("잘못된 요청입니다")
            }
        }
    }
}
export default { host: hostInstance }
