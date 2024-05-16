# REACT BASE PROJECT FOR JS

> JS 기반의 REACT BASE PROJECT 입니다. <br/>
> 기본적인 구조만 작성 되어 있습니다.

<br/>

## 추천 extention

-   auto complete tag : 자동으로 닫는 태그 생성 , 설치 시 관련 패키지 전체 설치 <br/>
-   better comments : todo, fixme 등 comments 하이라이팅 <br/>
-   git graph : git commit 기록 GUI 로 조회 <br/>
-   gitLense : code 상에서 commit 기록 조회 (작성자 확인 가능) <br/>
-   indent-rainbow : 들여쓰기 하이라이팅 <br/>
-   js quick console : console.log 단축키 사용 <br/>
-   prettier - Code formatter : code 규칙 적용 (tab, space 등) <br/>
-   Rainbow Brackets : bracket 하이라이팅 (짝이 되는 bracket 수월하게 확인 가능) <br/>
-   Reactjs code snippets : react.js code 작성 시 안내 및 단축어 지원  <br/>

<br/>
<br/>
## 개발 환경

### SKILL

![REACT Badge][react-badge]
![YARN Badge][yarn-badge]
![TS Badge][ts-badge]
![Styled Badge][styled-badge]

### IDE

![VSCODE Badge][vscode-badge]

<br/>

## 사용방법

### 개발 env 설정 (파일 생성)

`.env.development`

```env
REACT_APP_ENV=development # 개발 환경 세팅
REACT_APP_API_URL=URL # 사용할 개발 API URL
REACT_APP_TITLE = "PILOT" # 브라우저 타이틀 명
```

### 실행

```sh
# 패키지 설치
$ yarn install
# 개발환경 실행
$ yarn start
```

### 빌드

```sh
$ yarn build
```

<br/>

## 프로젝트 구조

```shell
|-- build // build 된 내용
|   |-- images
|   `-- static
|-- public // public resources
|   `-- images
`-- src // 실제 작업 파일
    |-- apis // axios
    |-- common // 공용 파일
    |-- components // 공용 컴포넌트
    |-- pages // 각 페이지들
    |-- routes // 라우터 설정
    |-- styles // 공용 css or styled component
|-- README.md // readme
|-- craco.config.js // carco 설정
|-- package.json // package 관리
|-- jsconfig.json // js 설정
|-- .env // react 전역 변수 설정
|-- .env.production  // react 전역 변수 설정 - 운영 버전
|-- .git // git
|-- .gitignore // git 에 올리지 않을 내용
|-- .npmrc // p-ui install 을 위한 자체 라이브러리 설정
|-- .prettierrc // 포매팅 설정

```

<br/>

<!-- Markdown link & img dfn's -->

[version-badge]: https://img.shields.io/badge/version-2.4.0-critical.svg
[react-badge]: https://img.shields.io/badge/react-skyblue.svg?logo=react&logoColor=black
[yarn-badge]: https://img.shields.io/badge/yarn-2C8EBB.svg?logo=yarn&logoColor=white
[ts-badge]: https://img.shields.io/badge/typescript-2C8EBB.svg?logo=typescript&logoColor=white
[styled-badge]: https://img.shields.io/badge/styledcomponents-DB7093.svg?logo=styledcomponents&logoColor=white
[vscode-badge]: https://img.shields.io/badge/vscode-007ACC.svg?logo=visualstudiocode&logoColor=white
