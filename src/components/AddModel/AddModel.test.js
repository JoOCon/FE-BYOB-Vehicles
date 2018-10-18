import React from 'react';
import { shallow } from 'enzyme';
import AddModel from './AddModel';

describe('AddModel', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddModel />);
  });
  it('should match snapshot with models', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should set state when invoked', () => {
      const mockEvent = { target: { name: 'modelName', value: 'FF' } };
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state().modelName).toBe('FF');
    });
    it('should invoke handleChange when modelName is changed', () => {
      const spy = spyOn(wrapper.instance(), 'handleChange');
      const mockEvent = { target: { value: 'yes' } };
      wrapper.instance().forceUpdate();
      wrapper.find('.model-name-input').simulate('change', mockEvent);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('handleSubmit', () => {
    it('should invoke handleSubmit onSubmit of form', () => {
      const spy = spyOn(wrapper.instance(), 'handleSubmit');
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.instance().forceUpdate();

      wrapper.find('form').simulate('submit', mockEvent);

      expect(spy).toHaveBeenCalled();
    });

  });
});
