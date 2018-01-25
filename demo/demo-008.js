module.exports = function (migration) {
    migration.deriveLinkedEntries({
      contentType: '1kUEViTN4EmGiEaaeC6ouY',
      from: ['profilePhoto', 'firstName', 'lastName'],
      toReferenceField: 'profilePhoto_new',
      derivedContentType: 'media',
      derivedFields: ['name', 'photo'],
      identityKey: async (from) => {
        return `${from.firstName['en-US']}-${from.lastName['en-US']}`
      },
      deriveEntryForLocale: async (from, locale) => {
        return {
          name: `${from.firstName[locale]} ${from.lastName[locale]}`,
          photo: from.profilePhoto[locale]
        }
      }
    })
}
