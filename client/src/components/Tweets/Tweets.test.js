import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tweets from './Tweets';
import Tweet from './Tweet/Tweet';

configure({ adapter: new Adapter() });

describe('Tweets', () => {
    it('should render Tweet components according to count of tweets received from props', () => {
        const wrapper = shallow(
            <Tweets
                tweets={[
                    { created_at: 'Sat', id: 1, text: 'some text' },
                    { created_at: 'Sat', id: 2, text: 'some text' },
                    { created_at: 'Sat', id: 3, text: 'some text' }
                ]}
                username="@username"
            />
        );
        expect(wrapper.find(Tweet)).toHaveLength(3);
    });
});
