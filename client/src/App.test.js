// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Header from './components/Header/Header';
import UsernameForm from './components/UsernameForm/UsernameForm';

configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('Should render <Header /> component', () => {
        const wrapper = shallow(<App />);
        exprect(wrapper.find(Header, UsernameForm)).toHaveLength(1);
    });

    it('Should render <UsernameForm /> components', () => {
        const wrapper = shallow(<App />);
        exprect(wrapper.find(Header, UsernameForm)).toHaveLength(1);
    });


});
