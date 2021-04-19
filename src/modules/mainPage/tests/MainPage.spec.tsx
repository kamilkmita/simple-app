import renderer from "react-test-renderer";
import MainPage from "../MainPage";

describe("Mainpage", () => {
  test("proper render", () => {
    const component = renderer.create(<MainPage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
