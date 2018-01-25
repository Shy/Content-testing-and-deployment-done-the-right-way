module.exports = function (migration) {
  const tag = migration.createContentType('media')
    .name('Media')
    .displayField('name');

  tag.createField('name')
  .type('Symbol')
  .required(true)
  .name('Name');

  tag.createField('photo')
  .name('Photo')
  .type('Link')
  .linkType('Asset')
  .required(true);

  tag.createField('license')
  .type('Symbol')
  .name('License');

  const author = migration.editContentType('1kUEViTN4EmGiEaaeC6ouY')
  author.createField('profilePhoto_new')  // Using a temporary id to be able to transform entries.
    .name('Profile photo')
    .type('Link')
    .linkType('Entry')
    .validations([
      {
        "linkContentType": ['media']
      }
    ]);

  author.editField('profilePhoto').disabled(true)
}
