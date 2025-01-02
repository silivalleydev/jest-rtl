## 테스팅 라이브러리

### 프로젝트 구조화
- 테스트 폴더를 따로 빼서 프로젝트 구조와 똑같이 관리
```
src 
|- components
|- util
|- __tests__
    |- components
    |- util
```

### React Testing Library(https://testing-library.com/docs/react-testing-library/intro/)
- 설명: React Testing Library는 React 컴포넌트를 테스트하기 위해 설계된 도구로, "사용자 관점에서 테스트를 작성"하는 것을 지향합니다.

```
npm install --save-dev @testing-library/react @testing-library/dom
```

### Jest(https://jestjs.io/docs/getting-started)
- 설명: Jest는 JavaScript 테스팅 프레임워크로, React 환경에 최적화되어 있습니다.

```
npm install --save-dev jest @jest/globals
npm install --save-dev @babel/preset-env babel-jest
```

- 설정

1. `.babelrc`
```
{
  "presets": ["@babel/preset-env"]
}
```

2. `jest.config.js` 최소 커버리지 설정
```js
module.exports = {
    collectCoverage: true, // 커버리지 리포트 활성화
    collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}", // 커버리지 계산 대상 파일 패턴
      "!src/**/*.test.js",       // 테스트 파일 제외
      "!src/index.js",           // 진입 파일 제외
      "!src/setupTests.js",      // Jest 설정 파일 제외
    ],
    coverageDirectory: "coverage", // 커버리지 리포트 출력 디렉토리
    coverageReporters: ["json", "lcov", "text", "clover"], // 출력 포맷 설정
    coverageThreshold: { // 최소 커버리지 기준 설정
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
  };
```

ex 커버리지 실패시
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |    87.5 |       75 |     100 |    87.5 |                   
 util.js  |    87.5 |       75 |     100 |    87.5 | 12                
----------|---------|----------|---------|---------|-------------------
Jest: "global" coverage threshold for branches (80%) not met: 75%

1. % Stmts (Statements)
의미: 코드에서 실행 가능한 전체 명령문(Statement) 중 테스트된 명령문의 비율.
예: if, for, while, 변수 선언 등 실행 가능한 모든 코드 조각.
목적: 코드 전체에서 실행 가능한 모든 명령문이 테스트되었는지 확인.

```js
const add = (a, b) => a + b; // 1개의 Statement
console.log(add(2, 3));      // 1개의 Statement
```

2. % Branch (Branches)
의미: 조건문(Conditional Statement)의 모든 분기(Branch) 중 테스트된 분기의 비율.
예: if, else, switch, 삼항 연산자 등에서 발생하는 분기.
목적: 조건문 내의 모든 분기가 테스트되었는지 확인
```js
function checkValue(val) {
  if (val > 10) {      // Branch 1
    return "big";
  } else {             // Branch 2
    return "small";
  }
}
```

3. % Funcs (Functions)
의미: 코드에서 정의된 전체 함수 중 테스트된 함수의 비율.
예: 선언된 모든 함수(일반 함수, 클래스 메서드, 화살표 함수 등).
목적: 함수의 동작이 제대로 테스트되었는지 확인.
```js
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}
```

4. % Lines
의미: 코드에서 실행된 **전체 코드 라인(Line)**의 비율.
목적: 모든 코드 라인이 실행되었는지 확인.

```js
function add(a, b) {
  return a + b; // Line 2
}

console.log(add(2, 3)); // Line 4
```

### CI/CD Github Action 설정
- `.github/workflows/ci.yml`
```yml
name: CI

on:
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: npm install
      - run: npm test

```

### Jest와 RTL의 조합이 강력한 이유

Jest의 빠른 실행, Mocking, Snapshot Testing 기능이 RTL과 결합하면 테스트의 생산성이 극대화됩니다.

Jest는 테스트 프레임워크로, 테스트 실행과 환경 설정을 담당하고, RTL은 DOM 기반 테스트 유틸리티로 사용자 관점의 테스트를 돕습니다.

Jest를 기반으로 RTL의 기능을 사용할 때, 두 도구가 자연스럽게 통합되어 React 환경 테스트를 위한 최적의 도구 세트가 됩니다.

Jest는 테스트 실행과 환경 설정, Mocking, 비동기 테스트, 스냅샷 등을 빠르고 간단하게 지원합니다.

React Testing Library는 React 컴포넌트를 실제 사용자 관점에서 테스트할 수 있도록 돕습니다.

두 도구를 함께 사용하면 React 및 React Native 애플리케이션에서 신뢰성 높은 테스트를 작성할 수 있습니다.

