import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { isValidEmail } from '../../util/util';
import EmailForm from '../../components/EmailForm';
import { beforeEach, describe, test } from '@jest/globals';

// isValidEmail 함수 Mock 처리
jest.mock('../../util/util', () => ({
  isValidEmail: jest.fn(),
}));

describe('EmailForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders input and button', () => {
    render(<EmailForm />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /check/i })).toBeInTheDocument();
  });

  test('valid email triggers success message', () => {
    isValidEmail.mockReturnValue(true); // Mock 함수가 true 반환

    render(<EmailForm />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /check/i });

    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.click(button);

    expect(isValidEmail).toHaveBeenCalledWith('test@example.com');
    expect(
        screen.getByText((content, element) => content.includes("Email is Vaild!"))
      ).toBeInTheDocument();
  });

//   test('invalid email shows alert message', () => {
//     isValidEmail.mockReturnValue(false); // Mock 함수가 false 반환

//     const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

//     render(<EmailForm />);

//     const input = screen.getByRole('textbox');
//     const button = screen.getByRole('button', { name: /check/i });

//     fireEvent.change(input, { target: { value: 'invalid-email' } });
//     fireEvent.click(button);

//     expect(isValidEmail).toHaveBeenCalledWith('invalid-email');
//     expect(alertMock).toHaveBeenCalledWith('이메일이 틀렸습니다.');
//     expect(screen.queryByText(/Email is Valid!/i)).not.toBeInTheDocument();

//     alertMock.mockRestore(); // Mock 복원
//   });
});
