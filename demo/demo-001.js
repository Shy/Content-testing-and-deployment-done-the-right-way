module.exports = function (migration) {
  const page = migration.createContentType('page')
  .name('Page')
  .description('A page on our site')
  .displayField('title');

  page.createField('title')
  .name('Title')
  .type('Symbol');

  page.createField('slug')
  .name('Slug')
  .type('Symbol')
  .required(true);
}
