/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "82y091cj5jzdk8a",
    "created": "2024-11-19 12:37:52.555Z",
    "updated": "2024-11-19 12:37:52.555Z",
    "name": "catergories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xbronlap",
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
        "id": "pqrwse2s",
        "name": "field",
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
          "maxSize": 5000,
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
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("82y091cj5jzdk8a");

  return dao.deleteCollection(collection);
})
