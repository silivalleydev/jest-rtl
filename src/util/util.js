export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
export function isPositiveNumber(num) {
    if (num > 0) {
      return true; // 테스트됨
    } else if (num === 0) {
      return false; // 테스트 안 됨
    } else {
      return false; // 테스트됨
    }
  }
  