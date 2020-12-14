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

  it("login button should be disabled in case username or passowrd is not entered", () => {
    expect(wrapper.find('button[name="login-button"]').props().disabled).toBe(true);
  });

  it("login button should be remained disabled if username exists but password not", () => {
    const usernameElement = wrapper.find('input[name="username"]');
    usernameElement.simulate('change', {target: {value: 'apathak'}});
    expect(wrapper.find('button[name="login-button"]').props().disabled).toBe(true);
  });

  it("login button should be remained disabled if password exists but username not", () => {
    const passwordElement = wrapper.find('input[name="password"]');
    passwordElement.simulate('change', {target: {value: 'amit@123'}});
    expect(wrapper.find('button[name="login-button"]').props().disabled).toBe(true);
  });

  it("login button should be enabled if username and password exists", () => {
    const usernameElement = wrapper.find('input[name="username"]');
    const passwordElement = wrapper.find('input[name="password"]');
    usernameElement.simulate('change', {target: {value: 'apathak'}});
    passwordElement.simulate('change', {target: {value: 'amit@123'}});
    expect(wrapper.find('button[name="login-button"]').props().disabled).toBe(false);
  });
  
});
