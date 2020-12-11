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

  it("username must have the default value", () => {
    expect(wrapper.find('input[name="username"]').props().value).toBe('');
  });

  it("on change of the value in the field, the state of the field username in the component shoudl be updated", () => {
    wrapper.find('input[name="username"]').simulate('change',{ target: { value: 'apathak'}});
    expect(wrapper.find('input[name="username"]').props().value).toBe('apathak');
  });

  it("should render a password input tag", () => {
    expect(wrapper.find('input[name="password"]').exists()).toBe(true);
  });

  it("password must have the default value", () => {
    expect(wrapper.find('input[name="password"]').props().value).toBe('');
  });

  it("on change of the value in the field, the state of the field password in the component shoudl be updated", () => {
    wrapper.find('input[name="password"]').simulate('change',{ target: { value: 'pass@123'}});
    expect(wrapper.find('input[name="password"]').props().value).toBe('pass@123');
  });

  it("should render a submit button", () => {
    expect(wrapper.find('button[name="login-button"]').exists()).toBe(true);
  });

  
});
