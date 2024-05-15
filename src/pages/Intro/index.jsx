import React, { useState } from "react"
import TEST from "src/apis/api/test"

const IntroPage = () => {
    const [nowVal, setNowVal] = useState(0)

    const callApi = async () => {
        try {
            const res = await TEST.getList()
            if (res.status === "SUCCESS") {
                // 성공적으로 데이터를 받아온 경우 처리
                console.log("Success:", res.data)
            } else {
                // API 호출은 성공했지만 서버에서 실패 응답을 받은 경우 처리
                console.error("Error:", res.message || "An error occurred")
                alert("Error: " + (res.message || "An error occurred"))
            }
        } catch (err) {
            // 요청 자체가 실패한 경우 (네트워크 오류 등)
            console.error("Request failed:", err.message)
            alert("Request failed: " + err.message)
        }
    }

    return (
        <div>
            <h2>intro page</h2>
            <div>
                <h2>{nowVal}</h2>
                <button onClick={() => setNowVal(nowVal + 1)}>up</button>
                <button onClick={() => setNowVal(nowVal - 1)}>down</button>
            </div>
        </div>
    )
}

export default IntroPage
