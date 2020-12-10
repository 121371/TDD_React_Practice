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

  it("username must have the default valaue", () => {
    expect(wrapper.find('input[name="username"]').props().value).toBe('');
  });

  it("should render a password input tag", () => {
    expect(wrapper.find('input[name="password"]').exists()).toBe(true);
  });

  it("password must have the default valaue", () => {
    expect(wrapper.find('input[name="password"]').props().value).toBe('');
  });

  it("should render a submit button", () => {
    expect(wrapper.find('button[name="login-button"]').exists()).toBe(true);
  });

  
});
