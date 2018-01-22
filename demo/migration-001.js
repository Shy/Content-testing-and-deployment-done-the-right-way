module.exports = function (migration) {
  const foo = migration.createContentType('foo')
    .name('Foo')
    .description('A new content type');

  foo.createField('bar')
    .name('Bar')
    .type('Symbol');
};
