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
                    { id: '1', body: 'test tweet 1', author: {name: 'Piotr'} },
                    { id: '2', body: 'test tweet 2', author: {name: 'Json'}}
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