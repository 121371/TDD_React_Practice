import { shallow } from "enzyme";
import { Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import App from "./App";

describe("app component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('App component renders correctly', () => {
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it("child component named Header exists", () => {
    expect(wrapper.find(Header).exists()).toBeTruthy();
  });

  describe('App routing', () => {
    let routeWrapper;
    beforeEach(() => {
      routeWrapper =  wrapper.find(Route);
    });
    it("Two routes should be available", () => {
      
      expect(routeWrapper.length).toBe(2);
     });

     it("route for login component", () => {
      expect(routeWrapper.first().props().path).toBe('/login');
     });

     it("route for register component", () => {
      expect(routeWrapper.last().props().path).toBe('/register');
     });
  });

  it('Footer should be present with same text', () => {
    expect(wrapper.find('footer')).toBeTruthy();
    expect(wrapper.find('footer').text()).toBe('This is Footer');
  });
});
