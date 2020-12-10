import React from "react";
import { shallow } from "enzyme";

import Form from "./Login";

describe("Form component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Form />);
  });

  it("component renders correctly", () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it("should render an username input tag", () => {
    expect(wrapper.find('input[name="username"]').exists()).toBe(true);
  });
});
