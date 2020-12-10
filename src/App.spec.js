import { shallow } from "enzyme";

import Login from "./components/Login/Login";
import App from "./App";

describe("app component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('App component renders correctly', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it("child component named Login exists", () => {
    expect(wrapper.find(Login).exists()).toBeTruthy();
  });

  it("element renders with correct header text", () => {
    expect(wrapper.find("header").text()).toEqual("This is a login page");
  });
});
