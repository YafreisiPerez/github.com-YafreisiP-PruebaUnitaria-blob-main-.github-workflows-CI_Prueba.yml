const hello = require('./hello');
test('Debe devolver Hola Mundo', () => {
  expect(hello()).toBe('Hola Mundo');
});
