import renderer from "react-test-renderer";
import App from "../App";

jest.mock("../modules/mainPage/itemList/ItemList");

describe("App", () => {
  test("proper render", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
