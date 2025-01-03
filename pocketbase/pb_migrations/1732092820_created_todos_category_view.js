/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xqwkqf1jqx6y1ik",
    "created": "2024-11-20 08:53:40.762Z",
    "updated": "2024-11-20 08:53:40.762Z",
    "name": "todos_category_view",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uf6wy4bu",
        "name": "title",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "g3x6gdij",
        "name": "description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "4yd3x3lk",
        "name": "done",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "owog3uut",
        "name": "categoryID",
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
      },
      {
        "system": false,
        "id": "2wzvcy5g",
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
      },
      {
        "system": false,
        "id": "npu29kuj",
        "name": "icon",
        "type": "file",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [
            "image/jpeg",
            "image/gif",
            "image/png"
          ],
          "thumbs": [
            "50x50"
          ],
          "maxSelect": 1,
          "maxSize": 50000,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\ntodos.id, todos.title, todos.description, todos.done, catergories.id AS categoryID, catergories.name, catergories.icon\nFROM \ntodos LEFT JOIN catergories ON todos.category = catergories.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xqwkqf1jqx6y1ik");

  return dao.deleteCollection(collection);
})
