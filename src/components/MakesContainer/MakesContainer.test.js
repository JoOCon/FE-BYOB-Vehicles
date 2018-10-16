import React from 'react';
import { shallow } from 'enzyme';
import MakesContainer from './MakesContainer';

describe('MakesContainer', () => {
  it('should match snapshot with makes', () => {
    const mockMakes = [{ name: 'garry' }, { name: 'billy' }];
    const wrapper = shallow(
      <MakesContainer
        makes={mockMakes}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
