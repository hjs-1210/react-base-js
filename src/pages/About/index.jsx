import React from "react"
import PageTitle from "@components/widget/PageHeader/pageTitle"
import Table from "@components/widget/table"

const tempTitle = {
    mainTitle: "Main",
    subTitle: "About",
    thirdTitle: "Third"
}

const columnList = [
    {index: 1, title : "title1"},
    {index: 2, title : "title2"},
    {index: 3, title : "title3"},
    {index: 4, title : "title4"},
    {index: 5, title : "title5"},
]

const dataList = [
    {title1: "a", title2: "b", title3: "c", title4: "d", title5: "e"},
    {title1: "a", title2: "b", title3: "c", title4: "d", title5: "e"},
    {title1: "a", title2: "b", title3: "c", title4: "d", title5: "e"},
    {title1: "a", title2: "b", title3: "c", title4: "d", title5: "e"},
    {title1: "a", title2: "b", title3: "c", title4: "d", title5: "e"},
    {title1: "a", title2: "b", title3: "c", title4: "d", title5: "e"},
    {title1: "a", title2: "b", title3: "c", title4: "d", title5: "e"},
]

const AboutPage = () => {
    
    return <>
        <h1>About</h1>
        <PageTitle tempTitle={tempTitle}/>
        <Table columnList={columnList} dataList={dataList}/>
    </>
}

export default AboutPage

