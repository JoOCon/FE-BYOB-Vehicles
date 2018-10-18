import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('should match snapshot with makes', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should invoke deleteModel on button click', () => {
    const mockDeleteModel = jest.fn();
    const wrapper = shallow(<Card deleteModel={mockDeleteModel} />);
    const deleteX = wrapper.find('img');

    deleteX.simulate('click');

    expect(mockDeleteModel).toHaveBeenCalled();
  });
});
