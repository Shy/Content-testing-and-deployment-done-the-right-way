module.exports = function (migration) {
  const foo = migration.editContentType('foo');

  foo.moveField('baz').beforeField('bar');

  const brand = migration.editContentType('sFzTZbSuM8coEwygeUYes');

  brand.changeFieldId('phone', 'phoneNumber')
};
