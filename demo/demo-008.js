module.exports = function (migration) {
    migration.deriveLinkedEntries({
      // Start from blog post's category field
      contentType: '1kUEViTN4EmGiEaaeC6ouY',
      from: ['profilePhoto', 'firstName', 'lastName'],
      // This is the field we created above, which will hold the link to the derived category entries.
      toReferenceField: 'profilePhoto_new',
      // The new entries to create are of type 'tag'.
      derivedContentType: 'media',
      // We'll only create a tag using a name and a slug for now.
      derivedFields: ['name', 'photo'],
      identityKey: async (from) => {
        // The name will be used as an identity key.
        return `${from.firstName['en-US']}-${from.lastName['en-US']}`
      },
      deriveEntryForLocale: async (from, locale) => {
        // The structure represents the resulting category entry with the 2 fields mentioned in the `derivedFields` property.
        return {
          name: `${from.firstName[locale]} ${from.lastName[locale]}`,
          photo: from.profilePhoto[locale]
        }
      }
    })
}
