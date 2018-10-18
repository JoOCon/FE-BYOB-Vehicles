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
  });
});
