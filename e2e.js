'use strict'

import test from 'ava'
import generateMockBackend from './mock-backend'
import clickOnDoubling from './click-on-doubling'

test('working backend', async t => {
  const {server, SITE_URL} = generateMockBackend({
    inputAnswer: res => res.json({received: 5, result: 10}),
    noInputAnswer: res => res.status(400).json({error: 'Please provide an input!'})
  })
  const siteAsserionText = await clickOnDoubling({server, SITE_URL})
  const DESIRED_TEXT = 'OK - without data\nOK - with input=5'
  t.is(siteAsserionText, DESIRED_TEXT)
})

test('wrong answer backend', async t => {
  const {server, SITE_URL} = generateMockBackend({
    inputAnswer: res => res.json({received: 8, result: 15}),
    noInputAnswer: res => res.json({})
  })
  const siteAsserionText = await clickOnDoubling({server, SITE_URL})
  const DESIRED_TEXT = 'not ok - without data - check the console for the response\nnot ok - with input=5 - check the console for the response'
  t.is(siteAsserionText, DESIRED_TEXT)
})

test('no answer backend', async t => {
  const {server, SITE_URL} = generateMockBackend({
    inputAnswer: res => res.status(404).json({}),
    noInputAnswer: res => res.status(404).json({})
  })
  const siteAsserionText = await clickOnDoubling({server, SITE_URL})
  const DESIRED_TEXT = 'OK - without data - check the console for the response\nnot ok - with input=5 - check the console for the response'
  t.is(siteAsserionText, DESIRED_TEXT)
})


