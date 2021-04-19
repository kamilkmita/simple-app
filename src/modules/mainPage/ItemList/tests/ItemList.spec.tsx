import renderer from "react-test-renderer";
import ItemList from "../ItemList";
import useFetch, { Items, LoadingStatus } from "../../../../api/useFetch";

jest.mock("../../item/Item");
jest.mock("../../../../api/useFetch");

const mockData: Items[] = [
  {
    id: "1",
    name: "item1Name",
    venue: "item1Venue",
    website: "item1Website",
  },
  {
    id: "2",
    name: "item2Name",
    venue: "item2Venue",
  },
  {
    id: "3",
    name: "item3Name",
    website: "item1Website",
  },
];

describe("ItemList", () => {
  test("when data is not fetched yet", () => {
    (useFetch as jest.Mock).mockReturnValue({
      status: LoadingStatus.Fetching,
      data: [],
    });

    const component = renderer.create(<ItemList />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test("when data is empty", () => {
    (useFetch as jest.Mock).mockReturnValue({
      status: LoadingStatus.Fetched,
      data: [],
    });

    const component = renderer.create(<ItemList />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test("when data is filled", () => {
    (useFetch as jest.Mock).mockReturnValue({
      status: LoadingStatus.Fetched,
      data: mockData,
    });

    const component = renderer.create(<ItemList />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
