import "@testing-library/jest-dom";
jest.spyOn(window, 'alert').mockImplementation(() => {});
