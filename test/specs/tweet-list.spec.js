// @ts-check

import { assert } from 'chai';

import TweetList from "@/components/tweet-list";
import Tweet from "@/components/tweet";

import { mount } from '@vue/test-utils';

suite('TweetList', () => {
    it('should render single Tweet item in TweetList', () => {
        const wrapper = mount(TweetList, {
            propsData: {
                tweets: [
                    { id: 'sfsfsf', body: 'oooo' },
                    { id: 'grerge', body: 'kkkk'}
                ]
            },
            stubs: {
                "b-card": true,
                "b-card-text": true
            }
        });
        assert.ok(wrapper.contains(Tweet));
    });
});