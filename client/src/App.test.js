import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Header from './components/Header/Header';
import UsernameForm from './components/UsernameForm/UsernameForm';

configure({ adapter: new Adapter() });

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('Initially, Header and UsernameForm must be always rendered', () => {
        expect(
            wrapper.containsAnyMatchingElements([
                <Header />,
                <UsernameForm
                    disableBtn={true}
                    error={false}
                    inputHandler={() => {}}
                    submitHandler={() => {}}
                />
            ])).toEqual(true);
    });
});
