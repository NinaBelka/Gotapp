import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
require('jest-extended');


Enzyme.configure({ adapter: new Adapter() });

configure({ adapter: new Adapter() });

const config = {
  "jest": {
    "setupFilesAfterEnv": ["jest-extended"]
  }
};

export default config;