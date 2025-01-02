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
  