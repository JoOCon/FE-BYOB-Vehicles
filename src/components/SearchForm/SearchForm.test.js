import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
