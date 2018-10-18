import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should match snapshot with makes', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper).toMatchSnapshot();
  });
});
