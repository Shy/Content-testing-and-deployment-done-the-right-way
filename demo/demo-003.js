module.exports = function (migration) {
  const category = migration.editContentType('6XwpTaSiiI2Ak2Ww0oi6qa');

  category.changeFieldId('title', 'name');
}
