import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Header from './components/Header/Header';
// import UsernameForm from './components/UsernameForm/UsernameForm';
// import ModalError from './components/ModalError/ModalError';

configure({ adapter: new Adapter() });

describe('<App />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('Should render <Header /> component', () => {
        exprect(wrapper.contains(<Header />)).toEqual(true);
        debugger;
    });
});
