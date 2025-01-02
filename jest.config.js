module.exports = {
    testEnvironment: "jsdom",
    collectCoverage: true, // 커버리지 리포트 활성화
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}", // 소스 코드 파일만 커버리지 대상으로 지정
        "!src/**/*.test.{js,jsx,ts,tsx}", // 테스트 파일 제외
        "!src/index.js", // 진입 파일 제외
        "!src/setupTests.js", // Jest 설정 파일 제외
        "!src/App.js", // Jest 설정 파일 제외
      ],
        
    coverageDirectory: "coverage", // 커버리지 리포트 출력 디렉토리
    coverageReporters: ["json", "lcov", "text", "clover"], // 출력 포맷 설정
    coverageThreshold: { // 최소 커버리지 기준 설정
        // 글로벌은 전체 평균커버리지에 해당함
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
      // 특정 폴더의 커버리지 범위 설정
    //   "./src/util/": {
    //     branches: 80,
    //     functions: 80,
    //     lines: 80,
    //     statements: 80,
    //   },
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Jest 설정 파일 경로
};
  