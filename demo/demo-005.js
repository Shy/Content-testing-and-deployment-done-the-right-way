module.exports = function (migration) {
  const author = migration
  .editContentType('1kUEViTN4EmGiEaaeC6ouY');

  author.createField('firstName')
  .name('First name')
  .type('Symbol');

  author.createField('lastName')
  .name('Last name')
  .type('Symbol');

  author.displayField('lastName');
}
