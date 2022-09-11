# 기능

1. 모듈 번들링
2. babel-loader: 바벨 연동
3. sass-loader: sass를 css로 변환
4. css-loader: css import 
5. style-loader: 런타임에 css를 `head > style` 요소로 변환
6. file-loader: file import
7. html-webpack-plugin: `body` 요소 하위에 모든 webpack bundle (이 프로젝트에서는 `bundle.js`) 을 `script` 요소로 포함하는 HTML 문서 생성

# 사용법

### 개발환경 초기화

`npm run env`

### 빌드 (배포)

`npm run build`

### 빌드 (개발)

`npm run dbuild`

### 개발 서버

`npm run server`