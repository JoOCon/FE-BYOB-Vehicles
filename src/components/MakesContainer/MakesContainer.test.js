import React from 'react';
import { shallow } from 'enzyme';
import MakesContainer from './MakesContainer';

describe('MakesContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<MakesContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
