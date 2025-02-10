# react-pokemon-dex README

### 🎯 React 숙련 개인 과제 \_ 포켓몬 도감 사이트

- 배포 링크 : [https://react-pokemon-dex-seven.vercel.app/](https://react-pokemon-dex-seven.vercel.app/)  
  <br />

## 🖥 프로젝트 소개

- DEX 페이지
  ![Image](https://github.com/user-attachments/assets/f0b46980-c14b-45c4-a4bc-ec7b02bdd2c6)
- Detail 페이지
  ![Image](https://github.com/user-attachments/assets/6f6ba77a-6cff-4ce7-9637-263250b3a411)
- 포켓몬의 정보를 확인하고 나만의 포켓몬을 추가할 수 있는 페이지입니다.
- React의 **prop-drilling**과 **Context API, RTK**를 통해 페이지를 구현하였습니다.
- React-router-dom을 활용한 **SPA** 구현 방식으로 페이지를 이동합니다.
- React의 상태 관리와 이벤트 핸들링을 활용하여 데이터 정보를 다루었습니다.
  <br />

## 📥 설치방법

```
- 리포지토리 클론
   # git clone https://github.com/Taejin7088/react-pokemon-dex
- 의존성 설치
   # yarn install
- 개발 서버 실행
   # yarn dev
```

## ⏳ 개발 기간

📅 **2025 / 02 / 03 ~ 2025 / 02 / 10**  
<br />

## ⚙️ 개발 환경

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  
<br />

## 📂 Pokemon Dex 폴더 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📜Dashboard.jsx
 ┃ ┣ 📜PokemonCard.jsx
 ┃ ┣ 📜PokemonCardActionBtn.jsx
 ┃ ┣ 📜PokemonList.jsx
 ┃ ┗ 📜ToastMessage.jsx
 ┣ 📂data
 ┃ ┗ 📜pokemonList.js
 ┣ 📂pages
 ┃ ┣ 📜Detail.jsx
 ┃ ┣ 📜Dex.jsx
 ┃ ┗ 📜Home.jsx
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂slices
 ┃ ┃ ┗ 📜myPokemonListSlice.js
 ┣ 📂shared
 ┃ ┗ 📜Router.jsx
 ┣ 📜App.jsx
 ┗ 📜main.jsx
```

<br />

## 📌 주요 기능

✅ **Home 페이지에서 버튼을 클릭하여 Dex 페이지로 이동할 수 있습니다.**  
✅ **포켓몬의 리스트를 카드 형태로 확인할 수 있습니다.**  
✅ **원하는 포켓몬을 선택하여 Dashboard에 추가할 수 있습니다.**  
✅ **포켓몬 추가, 삭제 시에는 toast 알림이 나타납니다.**  
✅ **중복되는 포켓몬을 추가할 경우 toast 알림이 나타납니다.**  
✅ **Dashboard에는 최대 6개의 카드만 추가할 수 있으며, 7개 이상일 경우 toast 알림이 나타납니다.**  
✅ **Dashboard에 추가된 포켓몬을 삭제할 수 있습니다.**  
✅ **포켓몬 카드를 클릭하면 해당 포켓몬의 상세 정보를 확인할 수 있는 Detail 페이지로 이동합니다.**  
✅ **Detail 페이지에서 버튼을 통해 포켓몬을 추가 / 삭제할 수 있습니다.**  
✅ **Detail 페이지에서 버튼을 통해 리스트 페이지로 이동할 수 있습니다.**  
✅ **Detail 페이지에서 내 포켓몬 리스트를 확인하고 추가/삭제 할 수 있습니다.**
