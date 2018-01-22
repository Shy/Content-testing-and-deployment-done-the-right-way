module.exports = function (migration) {
  const page = migration.editContentType('page');

  page.moveField('slug').beforeField('title');
}
