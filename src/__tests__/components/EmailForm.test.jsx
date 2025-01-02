import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import EmailForm from './EmailForm';
import { isValidEmail } from '../util/util';

// isValidEmail 함수를 Mock 처리
// 테스트에서 유틸리티 함수의 실제 동작 대신 반환값을 제어하기 위해 사용
jest.mock('../util/util', () => ({
  isValidEmail: jest.fn(),
}));

describe('EmailForm Component', () => {
  // 각 테스트 전에 Mock 함수 초기화
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // 컴포넌트가 제대로 렌더링 되는지 확인
  test('renders input and button', () => {
    // render: 컴포넌트를 가상 DOM에 렌더링
    render(<EmailForm />);
    
    // getByRole: 특정 역할(여기서는 textbox와 button)을 가진 요소를 검색
    expect(screen.getByRole('textbox')).toBeInTheDocument(); // input 필드가 렌더링되었는지 확인
    expect(screen.getByRole('button', { name: /check/i })).toBeInTheDocument(); // 버튼이 렌더링되었는지 확인
  });

  // 올바른 이메일을 입력했을 때 성공 메시지가 표시되는지 확인
  test('valid email triggers success message', () => {
    isValidEmail.mockReturnValue(true); // Mock 함수가 true를 반환하도록 설정

    render(<EmailForm />);

    const input = screen.getByRole('textbox'); // 입력 필드 검색
    const button = screen.getByRole('button', { name: /check/i }); // 버튼 검색

    fireEvent.change(input, { target: { value: 'test@example.com' } }); // fireEvent.change: 입력 값 변경 시뮬레이션
    fireEvent.click(button); // fireEvent.click: 버튼 클릭 이벤트 시뮬레이션

    // isValidEmail 함수가 올바른 매개변수로 호출되었는지 확인
    expect(isValidEmail).toHaveBeenCalledWith('test@example.com');

    // 성공 메시지가 화면에 표시되었는지 확인
    expect(screen.getByText(/Email is Vaild!/i)).toBeInTheDocument();
  });

  // 잘못된 이메일을 입력했을 때 경고 메시지가 표시되는지 확인
  test('invalid email shows alert message', () => {
    isValidEmail.mockReturnValue(false); // Mock 함수가 false를 반환하도록 설정

    // window.alert 함수를 Mock 처리하여 호출 여부 확인
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    render(<EmailForm />);

    const input = screen.getByRole('textbox'); // 입력 필드 검색
    const button = screen.getByRole('button', { name: /check/i }); // 버튼 검색

    fireEvent.change(input, { target: { value: 'invalid-email' } }); // 잘못된 이메일 입력 시뮬레이션
    fireEvent.click(button); // 버튼 클릭 이벤트 시뮬레이션

    // isValidEmail 함수가 올바른 매개변수로 호출되었는지 확인
    expect(isValidEmail).toHaveBeenCalledWith('invalid-email');

    // alert 메시지가 호출되었는지 확인
    expect(alertMock).toHaveBeenCalledWith('이메일이 틀렸씁니다.');

    // 성공 메시지가 표시되지 않았는지 확인
    expect(screen.queryByText(/Email is Vaild!/i)).not.toBeInTheDocument();
  });
});
