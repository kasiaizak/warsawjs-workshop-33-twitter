// @ts-check

import { assert } from 'chai';

import App from "@/components/app";
import TweetList from "@/components/tweet-list";
// import nock from "nock";

import { mount } from '@vue/test-utils';

suite('App', () => {
    it('should render single TweetList item', () => {
        const wrapper = mount(App, {
            stubs: {
                "b-card": '<p>Lorem ipsum</p>',
                "b-card-text": true
            }
        });
        assert.ok(wrapper.contains(TweetList));
    });

    it.skip('should fetch tweets via HTTP request', async () => { //.skip mówi MOCHA by pominąć
        const wrapper = mount(App, {
            stubs: {
                Tweet: true
            }
        });

        // @ts-ignore
        assert.isFunction(wrapper.vm.fetchTweets);
        
        // @ts-ignore
        const ft = wrapper.vm.fetchTweets;

        nock("http://localhost:3000")
            .get('/tweets')
            .reply(200, [
                { id: 'id', body: 'body' }
            ]);

        const response = await ft();
        console.log(response); // JSON
        assert.lengthOf(response, 1);
    });
});