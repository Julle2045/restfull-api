/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vog6k6hjzm3u250")

  collection.options = {
    "query": "SELECT\nJuleoensker.id, Juleoensker.oenske, Juleoensker.description, Juleoensker.img, Juleoensker.link, o_categories.id AS OcategoryID, o_categories.name, o_categories.icon\nFROM Juleoensker\nLEFT JOIN o_categories ON Juleoensker.category_o = o_categories.id"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "voxym4le",
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
    "id": "5ov4e9sw",
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
    "id": "bu00kk1z",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ozzhtr2n",
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
    "id": "49mj38lb",
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
    "id": "en6blbum",
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
    "id": "yxggap49",
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

  collection.options = {
    "query": "SELECT\nJuleoensker.id, Juleoensker.oenske, Juleoensker.description, Juleoensker.link, o_categories.id AS OcategoryID, o_categories.name, o_categories.icon\nFROM Juleoensker\nLEFT JOIN o_categories ON Juleoensker.category_o = o_categories.id"
  }

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

  // remove
  collection.schema.removeField("voxym4le")

  // remove
  collection.schema.removeField("5ov4e9sw")

  // remove
  collection.schema.removeField("bu00kk1z")

  // remove
  collection.schema.removeField("ozzhtr2n")

  // remove
  collection.schema.removeField("49mj38lb")

  // remove
  collection.schema.removeField("en6blbum")

  // remove
  collection.schema.removeField("yxggap49")

  return dao.saveCollection(collection)
})
