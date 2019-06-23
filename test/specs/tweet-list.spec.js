// @ts-check

import { assert } from 'chai';

import TweetList from "@/components/tweet-list";
import Tweet from "@/components/tweet";

import { mount } from '@vue/test-utils';

suite('TweetList', () => {
    it('should render single Tweet item', () => {
        const wrapper = mount(TweetList);
        assert.ok(wrapper.contains(Tweet));
    });
});