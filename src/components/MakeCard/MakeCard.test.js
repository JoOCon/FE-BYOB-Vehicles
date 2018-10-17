import React from 'react';
import { shallow } from 'enzyme';
import MakeCard from './MakeCard';

describe('MakeCard', () => {
  it('should match snapshot with makes', () => {
    const wrapper = shallow(<MakeCard />);

    expect(wrapper).toMatchSnapshot();
  });
});
