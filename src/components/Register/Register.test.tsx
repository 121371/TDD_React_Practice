import React from 'react';
import { shallow } from 'enzyme';

import Register from './Register';

describe('register component', () => {
    let wrapper: any;
   beforeEach(() => {
    wrapper = shallow<React.FC>(<Register />);
   });

   it('a class named register should be present', () => {
       expect(wrapper.find('.register').exists()).toBeTruthy();
   });

   describe('First Name', () => {
       let firstNameElement: any;
       beforeEach(() => {
        firstNameElement = wrapper.find('input[name="firstName"]');
       });
       
     it('first name should be present in the dom', () => {
        expect(firstNameElement).toBeTruthy();
     });

     it('first name contains a class', () => {
        expect(firstNameElement.props().className).toBe('first-name');
     });

     it('the default value of the first name should be undefined', () => {
         expect(firstNameElement.props().value).toBe(undefined);
     });

     it('on change the value should be the target text', () => {
         const targetText: string = 'amit';
         wrapper.find('input[name="firstName"]').simulate('change', {target: {value: targetText}});
         expect(wrapper.find('input[name="firstName"]').props().value).toBe(targetText);
     });
   })
})