import React from 'react';
import { shallow } from 'enzyme';
import ModelsContainer from './ModelsContainer';

describe('ModelsContainer', () => {
  it('should match snapshot with models', () => {
    const mockModels = [{ name: 'garry' }, { name: 'billy' }];
    const wrapper = shallow(
      <ModelsContainer
        models={mockModels}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
