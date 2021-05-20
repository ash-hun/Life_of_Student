___  

<div align="center">
    <h1>★ Project Convention ★</h1>
</div>

___

## 🟦 프로젝트 구성
1. 프로젝트에 참여하는 4명은 모두가 동등한 입장에서 프로젝트에 임한다.
2. README.md와 프로젝트 진행에 필요한 몇몇 작업은 공동으로 하되, 필수참여는 아니다.
3. 프로젝트 일정조절은 팀원 모두가 동의하에 변경한다.
4. 프로젝트 기한엄수를 무엇보다 중요히 생각한다.
5. 본인이 맡은 파트는 본인이 책임질 것.

___ 
## 🟥 페이지 별 구성
1. 해당 프로젝트는 총 `5페이지`로 구성된다.
2. `5페이지`는 각각 아래와 같이 명칭하며 담당자를 분배한다.
    - **Main Page** : JH9892
    - **Coffee Page** : Syh1999
    - **Tool Page** : RottenTofu
    - **Study Page** : sinbak
    - **Github Page** : JH9892
3. 공통 스타일 가이드 소개
    1. 프로젝트에 사용되는 각각의 `파일은 모두 따로 구분하여 link시키는것을 원칙`으로 한다.
    2. `모든 표기는 camelCase를 원칙`으로 한다.
    3. 표기되는 id와 class 명의 (위치)는 필요에 의해 넣으며 넣을땐 `_(위치)`의 표기방식을 준수한다.
    4. `id표기는 I_(기능/역할)의 형태`를 가지게 표기한다.
        - ex 01) ```<div id="I_leftSideBar_Main">```  
        -> Main Page의 좌측 사이드 바를 나타내는 div태그이다.
        - ex 02) ```<header id="I_header_Tool></header>"```  
        -> Tool Page의 header 영역을 나타낸다.
    5. `class표기는 C_(기능/역할)의 형태`를 가지게 표기한다.
        - ex 01) ``` <section class="C_mainContents_Coffee"></section>```  
        -> Coffee Page의 주요 컨텐츠를 나타내는 section 태그이다.
        - ex 02) ```<footer class="C_footer" id="I_footer_Github"></footer> ```  
        -> 해당 태그는 Github Page의 footer 영역을 의미하지만 design상 모든 페이지의 footer에 적용되는 내용이 존재한다는 가정하에 id와 class를 같이 적용한 모습이다.
    6. `id`는 요소가 가지는 고유한 속성을 넣을때 사용하고, `class`는 다수의 요소가 가지는 공통된 속성을 넣을때 사용하므로 프로젝트 내부에서 최대한 분별하도록 한다.

___ 
## 🟨 파일 구성
1. 각 페이지는 아래와 같이 구성한다.
    - Main Page : **index.html**
    - Coffee Page : **Coffee.html**
    - Tool Page : **Tool.html**
    - Study Page : **Study.html**
    - Github Page : **Github.html**
2. 각 페이지에 해당하는 js와 css파일은 파일명을 그대로 사용한다.
    - ex) Main Page에 사용되는 css파일은 main.css, main.js
3. `./static/`은 프로젝트에 필요한 파일들을 담아두는 directory이다.
4. `./src/`은 프로젝트를 소개한 파일들을 담아두는 directory이다.
5. `./reference/`는 프로젝트에 필요한 참고자료들을 담아두는 directory이다.
6. css파일과 js파일은 프로젝트 디렉토리의 `./static/css/`와 `./static/js/`를 기본경로로 한다.
7. Main Page만 파일명을 `index.html`로 하고 루트경로에 배치하며 그외 html파일들은 `./static/html/`에 넣는다.