/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yt5gmi5i8hunxaw")

  // remove
  collection.schema.removeField("ibcbzdvg")

  // remove
  collection.schema.removeField("pf9emkqi")

  // remove
  collection.schema.removeField("oc9en6zm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zvj40kqy",
    "name": "name",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": 50,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t8v609gh",
    "name": "icon",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yt5gmi5i8hunxaw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ibcbzdvg",
    "name": "stor",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": 50,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pf9emkqi",
    "name": "Mellem",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": 50,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oc9en6zm",
    "name": "lille",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": 50,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("zvj40kqy")

  // remove
  collection.schema.removeField("t8v609gh")

  return dao.saveCollection(collection)
})
