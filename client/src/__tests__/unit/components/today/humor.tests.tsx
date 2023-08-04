import {render, screen} from "@testing-library/react";
import {Humor} from "@components/today/humor/Humor";

describe('/ Page Unit Test', () => {
  test('유머 게시글이 불러와지는지', async () => {

    const mockData = {
      title: '개발자들이 다크 모드를 쓰는 이유는???',
      description: '밝으면 버그(bug)가 꼬여서... :)',
    }

    render(<Humor/>);

    const findTitle = await screen.findAllByText(mockData.title);
    screen.debug(findTitle)
    expect(findTitle).toHaveLength(1);
  });
})
