// @ts-check

import { assert } from 'chai';

import App from "@/components/app";
import TweetList from "@/components/tweet-list";

import { mount } from '@vue/test-utils';

suite('App', () => {
    it.skip('should plus 2 and 2', () => { //.skip mówi MOCHA by pominąć
        const input = 2 + 2;
        const output = 4;
        assert.equal(input, output);
    });

    it('should render single TweetList item', () => {
        const wrapper = mount(App, {
            stubs: {
                "b-card": true,
                "b-card-text": true
            }
        });
        assert.ok(wrapper.contains(TweetList));
    });
});