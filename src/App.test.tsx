import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App, { add, Login } from './App';

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

describe('Login component tests', () => {
  let container: HTMLDivElement;

  // beforeEach : 이 파일의 각 테스트가 실행되기 전에 해당 함수 실행
  // 함수가 promise를 반환하거나 생성자인 경우, jest는 테스트를 실행하기 전에 해당 promise가 해결될 때까지 대기
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    // eslint-disable-next-line testing-library/no-render-in-setup
    ReactDOM.render(<Login />, container);
  });

  // afterEach : 테스트가 서로 방해되지 않도록 각 테스트가 마무리 되었을 때 초기화
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  // 각 입력 필드 렌더링 테스트
  it('Renders all input fields correctly', () => {
    // 입력 필드 선택
    // eslint-disable-next-line testing-library/no-node-access
    const inputs = container.querySelectorAll('input');
    // 입력 필드 올바르게 렌더링 되었는지 확인
    expect(inputs).toHaveLength(2);

    // 첫 번째, 두 번째 입력 필드 이름이 각각 '이메일', '비밀번호' 인지 확인
    expect(inputs[0].name).toBe('email');
    expect(inputs[1].name).toBe('password');
  });

  // 각 버튼 렌더링 테스트
  it('Renders all buttons correctly', () => {
    // eslint-disable-next-line testing-library/no-node-access
    const buttons = container.querySelectorAll('button');
    expect(buttons).toHaveLength(2);

    expect(buttons[0].type).toBe('button');
    expect(buttons[1].type).toBe('button');
  });
});
