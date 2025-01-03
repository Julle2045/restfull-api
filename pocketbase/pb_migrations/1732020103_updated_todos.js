/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6qzwtyr6k0nfhnu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0ddmkcf4",
    "name": "category",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "82y091cj5jzdk8a",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6qzwtyr6k0nfhnu")

  // remove
  collection.schema.removeField("0ddmkcf4")

  return dao.saveCollection(collection)
})
