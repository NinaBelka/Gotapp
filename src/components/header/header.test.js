import React from 'react';
import Header from './header';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing <Header/>', () => {
  it('Header have rendered correctly', () => {
    const header = shallow(<Header />);
    expect(header).toMatchSnapshot();
  })
});
