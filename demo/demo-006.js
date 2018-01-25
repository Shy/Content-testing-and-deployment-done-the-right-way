module.exports = function (migration) {
  migration.transformEntries({
    contentType: '1kUEViTN4EmGiEaaeC6ouY',
    from: ['name'],
    to: ['firstName', 'lastName'],
    shouldPublish: true,
    transformEntryForLocale: function (fields, locale) {
      const {name} = fields;
      const parts = name[locale].split(' ');

      return {
        firstName: parts[0],
        lastName: parts[1]
      }
    }
  });
}
