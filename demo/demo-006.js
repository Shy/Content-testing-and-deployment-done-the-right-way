module.exports = function (migration) {
  migration.transformEntries({
    contentType: '1kUEViTN4EmGiEaaeC6ouY',
    from: ['name'],
    to: ['firstName', 'lastName'],
    shouldPublish: true,
    transformEntryForLocale: function ({name}, locale) {
      const [firstName, lastName] = name[locale].split(' ');

      return { firstName, lastName }
    }
  });
}
