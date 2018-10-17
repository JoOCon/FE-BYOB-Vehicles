import React from 'react';
import { shallow } from 'enzyme';
import AddModel from './AddModel';

describe('AddModel', () => {
  it('should match snapshot with models', () => {
    const wrapper = shallow(<AddModel />);

    expect(wrapper).toMatchSnapshot();
  });
});
