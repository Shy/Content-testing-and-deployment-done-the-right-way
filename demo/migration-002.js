module.exports = function (migration) {
  const foo = migration.editContentType('foo');

  foo.name('Better foo');

  foo.createField('baz')
    .name('Baz')
    .type('Number')
    .required(true)
    .localized(true);
};
