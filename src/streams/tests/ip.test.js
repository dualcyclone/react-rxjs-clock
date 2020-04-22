/* eslint-disable no-undef */
// import { TestScheduler } from 'rxjs/testing';

describe('ip$', () => {
  // let testScheduler;

  beforeEach(() => {
    console.log('*****', fetch.doMock);
    fetch.doMock();

    // testScheduler = new TestScheduler((a, b) => expect(a).toEqual(b));
  });

  it('blah', () => {
    fetch.mockResponse(JSON.stringify({ data: '12345' }));

    //assert on the response
    fetch('http://www.google.com/');

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual('https://www.google.com');
  });
});
