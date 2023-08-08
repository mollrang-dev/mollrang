import { render, screen, within } from "@testing-library/react";
import { Humor, HumorList } from "@components/today/humor/Humor";
import { useQueryTodayHumorLists } from "@hooks/queries/todayHooks";
import { wrapper } from "@utils/test/testUtils";

const mockHumorQuery = useQueryTodayHumorLists;
jest.mock("../../../../hooks/queries/todayHooks.ts");

describe("/ Page Unit Test", () => {
  test("유머 게시글이 불러와지는지", async () => {
    let expectedMockData: HumorList = {
      title: "개발자들이 다크 모드를 쓰는 이유는???",
      description: "밝으면 버그(bug)가 꼬여서... :)",
    };

    mockHumorQuery.mockImplementation(() => ({
      status: "success",
      data: {
        title: "개발자들이 다크 모드를 쓰는 이유는???",
        description: "밝으면 버그(bug)가 꼬여서... :)",
      },
    }));
    render(<Humor />, { wrapper });

    const findTitleByTestId = await screen.findByTestId("humor-title");
    const findDescriptionByTestId = await screen.findByTestId(
      "humor-description",
    );

    const expectedTitle = within(findTitleByTestId).getByText(
      expectedMockData.title,
    );
    const expectedDescription = within(findDescriptionByTestId).getByText(
      expectedMockData.description,
    );

    expect(expectedTitle).toBeInTheDocument();
    expect(expectedDescription).toBeInTheDocument();
  });
});
