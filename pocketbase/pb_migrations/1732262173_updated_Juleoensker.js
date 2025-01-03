/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sw6lye6k8zdl642")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5oimmmtp",
    "name": "category_o",
    "type": "relation",
    "required": false,
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gqvxfwvy",
    "name": "img",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/webp"
      ],
      "thumbs": [
        "50x50"
      ],
      "maxSelect": 1,
      "maxSize": 1000000,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sw6lye6k8zdl642")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  // update
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

  // update
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
        "image/svg+xml",
        "image/webp"
      ],
      "thumbs": [
        "50x50"
      ],
      "maxSelect": 1,
      "maxSize": 1000000,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
