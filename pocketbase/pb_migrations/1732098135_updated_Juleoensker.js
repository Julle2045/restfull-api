/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sw6lye6k8zdl642")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5oimmmtp",
    "name": "category_o",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yt5gmi5i8hunxaw",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sw6lye6k8zdl642")

  // remove
  collection.schema.removeField("5oimmmtp")

  return dao.saveCollection(collection)
})
