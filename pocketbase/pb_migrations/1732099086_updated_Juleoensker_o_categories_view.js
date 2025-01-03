/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vog6k6hjzm3u250")

  collection.listRule = ""
  collection.viewRule = ""

  // remove
  collection.schema.removeField("d712t0oi")

  // remove
  collection.schema.removeField("ryxyhpmn")

  // remove
  collection.schema.removeField("mnuiaquk")

  // remove
  collection.schema.removeField("ht6aqbd6")

  // remove
  collection.schema.removeField("ncjt4p2q")

  // remove
  collection.schema.removeField("jsamensq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "phbj1yrq",
    "name": "oenske",
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
    "id": "uizw3nxo",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": 100,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "atvoxll6",
    "name": "link",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ezj6ywbg",
    "name": "OcategoryID",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0btwhjlo",
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
    "id": "9p1mhojw",
    "name": "icon",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/png",
        "image/jpeg",
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
  const collection = dao.findCollectionByNameOrId("vog6k6hjzm3u250")

  collection.listRule = null
  collection.viewRule = null

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d712t0oi",
    "name": "oenske",
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
    "id": "ryxyhpmn",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": 100,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mnuiaquk",
    "name": "link",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ht6aqbd6",
    "name": "OcategoryID",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ncjt4p2q",
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
    "id": "jsamensq",
    "name": "icon",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/png",
        "image/jpeg",
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

  // remove
  collection.schema.removeField("phbj1yrq")

  // remove
  collection.schema.removeField("uizw3nxo")

  // remove
  collection.schema.removeField("atvoxll6")

  // remove
  collection.schema.removeField("ezj6ywbg")

  // remove
  collection.schema.removeField("0btwhjlo")

  // remove
  collection.schema.removeField("9p1mhojw")

  return dao.saveCollection(collection)
})
