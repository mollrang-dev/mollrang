import userEvent from "@testing-library/user-event";
import {render, screen, act} from "@testing-library/react";
import {Input} from "@components/common/input/Input";

describe('Input component E2E test', () => {
  const user = userEvent.setup();

  test('input[type=text] value 값이 입력한 값으로 변하는지 확인', async () => {
    const type = 'text';
    const expectedValue = 'input typing action';
    let initialValue = '';

    render(
      <Input
        type={type}
        value={initialValue}
        onChange={e => (initialValue = e.target.value)}
      />
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    await act(async () => {
      await user.clear(input);
      await user.type(input, expectedValue);
      expect(input.value).toBe(expectedValue);
    })
  })
})