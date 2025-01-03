/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sw6lye6k8zdl642")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gqvxfwvy",
    "name": "img",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml"
      ],
      "thumbs": [
        "50x50"
      ],
      "maxSelect": 1,
      "maxSize": 50000,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sw6lye6k8zdl642")

  // remove
  collection.schema.removeField("gqvxfwvy")

  return dao.saveCollection(collection)
})
