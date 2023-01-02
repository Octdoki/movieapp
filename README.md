  ## DoFLEX

   영화정보 api를 활용하여 장르별로 영화 정보를 소개하는 웹페이지입니다.
   
   -------

## Description


   Demo Link : https://www.notion.so/DoFLEX-6a3c1fef99384115af6b3e6a9dc3d915#82bc134b95a046b39402c49ab46a94d4

   <img width="1728" alt="Screenshot 2022-12-27 at 4 56 49 PM" src="https://user-images.githubusercontent.com/76845650/210194666-de133068-0937-48e1-a742-8bdf492037cb.png">


   #### 디렉터리 구조

         ┣📦src
         ┣ 📂Atom
         ┃ ┗ 📜NavList.js
         ┣ 📂components
         ┃ ┣ 📜Loading.js
         ┃ ┣ 📜Loading.module.css
         ┃ ┣ 📜MovieDetail.js
         ┃ ┣ 📜MovieDetail.module.css
         ┃ ┣ 📜Navbar.js
         ┃ ┣ 📜Navbar.module.css
         ┃ ┣ 📜Slide.js
         ┃ ┗ 📜Slide.module.css
         ┣ 📂render
         ┃ ┣ 📜MovieGroup.js
         ┃ ┣ 📜MovieGroup.module.css
         ┃ ┣ 📜MovieSearch.js
         ┃ ┣ 📜MovieSearch.module.css
         ┃ ┣ 📜MovieSlide.js
         ┃ ┗ 📜MovieSlide.module.css
         ┣ 📂routes
         ┃ ┣ 📜Detail.js
         ┃ ┣ 📜Detail.module.css
         ┃ ┣ 📜Group.js
         ┃ ┣ 📜Group.module.css
         ┃ ┣ 📜Home.js
         ┃ ┣ 📜Home.module.css
         ┃ ┣ 📜Search.js
         ┃ ┗ 📜Search.module.css
         ┣ 📜App.js
         ┣ 📜index.js
         ┗ 📜styles.css
         ┣ 📜.gitignore
         ┣ 📜README.md
         ┣ 📜package-lock.json
         ┗ 📜package.json

  #### Enviorment
  * 1.Git
  * 2.NodeJS / NPM

  #### Technologies

  * react
  * react-dom
  * react-router-dom
  * react-scripts
  
  React를 학습하면서 api를 활용하여 만들어본 영화정보 웹페이지입니다.
  
  메인 화면은 Netflix와 비슷하게 구현하고자 하였습니다.
  
  해당 영화 포스터를 클릭하면 평점/런타임/장르/줄거리 등 해당 영화의 상세 정보를 확인할 수 있습니다.
