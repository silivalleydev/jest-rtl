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
npm install --save-dev jest
```

### Jest와 RTL의 조합이 강력한 이유

Jest의 빠른 실행, Mocking, Snapshot Testing 기능이 RTL과 결합하면 테스트의 생산성이 극대화됩니다.

Jest는 테스트 프레임워크로, 테스트 실행과 환경 설정을 담당하고, RTL은 DOM 기반 테스트 유틸리티로 사용자 관점의 테스트를 돕습니다.

Jest를 기반으로 RTL의 기능을 사용할 때, 두 도구가 자연스럽게 통합되어 React 환경 테스트를 위한 최적의 도구 세트가 됩니다.

Jest는 테스트 실행과 환경 설정, Mocking, 비동기 테스트, 스냅샷 등을 빠르고 간단하게 지원합니다.

React Testing Library는 React 컴포넌트를 실제 사용자 관점에서 테스트할 수 있도록 돕습니다.

두 도구를 함께 사용하면 React 및 React Native 애플리케이션에서 신뢰성 높은 테스트를 작성할 수 있습니다.

