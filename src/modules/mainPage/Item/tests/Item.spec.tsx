import Item, { ItemProps } from "../Item";
import { ToastProvider } from "react-toast-notifications";
import Enzyme, { mount } from "enzyme";
import EnzymeToJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import * as S from "../styles";

Enzyme.configure({ adapter: new Adapter() });

const addToast = jest.fn();

const useToasts = () => ({ addToast });

jest.mock('react-toast-notifications', () => ({
  ...jest.requireActual('react-toast-notifications'),
  useToasts
}));

const defaultProps: ItemProps = {
  id: "1",
  name: "item1Name",
  venue: "item1Venue",
  website: "item1Website",
};

describe("Item", () => {
  test("with full filled props", () => {
    const component = mount(
      <ToastProvider>
        <Item {...defaultProps} />
      </ToastProvider>
    );
    expect(EnzymeToJson(component)).toMatchSnapshot();
  });

  test("with only required props", () => {
    const props = {
      id: "1",
      name: "item1Name",
    };

    const component = mount(
      <ToastProvider>
        <Item {...props} />
      </ToastProvider>
    );
    expect(EnzymeToJson(component)).toMatchSnapshot();
  });

  test("with click on Item", () => {
    const component = mount(
      <ToastProvider>
        <Item {...defaultProps} />
      </ToastProvider>
    );

    component.find(S.Item).simulate("click");

    expect(addToast).toBeCalledTimes(1);
  });
});
