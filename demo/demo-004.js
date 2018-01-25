module.exports = function (migration) {
  const category = migration.editContentType('5KMiN6YPvi42icqAUQMCQe');

  category.deleteField('shortDescription');
}
