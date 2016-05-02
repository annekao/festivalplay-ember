import { test } from 'qunit';
import moduleForAcceptance from 'client/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance', {
  beforeEach: function() {
    window.localStorage.removeItem('access-token-expires');
  },
  afterEach: function() {
    window.localStorage.removeItem('acceptance-test');
  }
});

test('form modal', function(assert) {
  visit('/');

  click('.btn-floating');

  window.alert = function(text) {
    andThen(() => assert.equal(text, "Your Spotify session has expired."));
  };
});

test('form modal open', function(assert) {
  visit('/');
  window.localStorage.setItem("acceptance-test", true);

  click('.btn-floating');
  andThen(() => assert.equal(find('.modal .modal-title').text(), 'Step 1: Search for an event by title'));

  fillIn('.search', 'Outside Lands');
  click('.btn-flat');

  andThen(() => assert.equal(find('.modal .modal-title').text(), 'Step 2: Select an event'));
});

test('form modal no results', function(assert) {
  visit('/');
  window.localStorage.setItem("acceptance-test", true);

  click('.btn-floating');
  fillIn('.search', 'gajwldjsf');
  click('.btn-flat');

  andThen(() => assert.equal(find('.modal .modal-body').text().trim(), 'No results.'));
});

test('form modal results', function(assert) {
  visit('/');
  window.localStorage.setItem("acceptance-test", true);

  click('.btn-floating');
  fillIn('.search', 'music');
  click('.btn-flat');

  /* This test my fail if there are no events with the keyword music in them */
  andThen(() => assert.equal(find('.collection .collection-item').length > 0, true));
});

test('admin', function(assert) {
  visit('/admin');

  fillIn('.username', 'a');
  fillIn('.password', 'b');
  click('.btn-flat');

  window.alert = function(text) {
    andThen(() => assert.equal(text, "Invalid credentials."));
  };
});

