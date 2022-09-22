import { render, screen } from '@testing-library/react';
import App, { add } from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('add function', () => {
  describe('when given to integers', () => {
    it('should return a add result', () => {
      // 준비(Arrange)
      // 예상되는 덧셈 결과와 함수 인수 준비
      const [a, b, expected] = [5, 8, 13];

      // 실행(Act)
      // 함수 결과를 얻기 위해 add 함수 사용
      const result = add(a, b);

      // 검증(Assert)
      // 함수의 출력과 예상 결과 비교
      expect(result).toEqual(expected);
    });
  });
});
