Feature('test');

Scenario('test something', ({ I }) => {
    I.amOnPage(`file://${process.cwd()}/test.html`);
});


Scenario('test something 2', ({ I }) => {
    I.amOnPage('https://example.com');
});