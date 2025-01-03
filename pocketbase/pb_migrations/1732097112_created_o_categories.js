/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yt5gmi5i8hunxaw",
    "created": "2024-11-20 10:05:12.801Z",
    "updated": "2024-11-20 10:05:12.801Z",
    "name": "o_categories",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
  const collection = dao.findCollectionByNameOrId("yt5gmi5i8hunxaw");

  return dao.deleteCollection(collection);
})
