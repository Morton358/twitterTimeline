import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Header from './components/Header/Header';
import UsernameForm from './components/UsernameForm/UsernameForm';
import ModalError from './components/ModalError/ModalError';

configure({ adapter: new Adapter() });

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should always render Header and UsernameForm', () => {
        expect(
            wrapper.containsAnyMatchingElements([
                <Header />,
                <UsernameForm
                    disableBtn={true}
                    error={false}
                    inputHandler={() => {}}
                    submitHandler={() => {}}
                />
            ])
        ).toEqual(true);
    });

    it('should render ModalError when error occured', () => {
        wrapper.setState({ errorOccured: true, error: {message: 'error'} });
        expect(wrapper.find(ModalError)).toHaveLength(1);
    });
});
