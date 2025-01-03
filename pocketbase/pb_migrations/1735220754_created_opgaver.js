/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xkex1pwgbypk6bh",
    "created": "2024-12-26 13:45:54.675Z",
    "updated": "2024-12-26 13:45:54.675Z",
    "name": "opgaver",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qgnma4ts",
        "name": "title",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "r8qc5uvb",
        "name": "status",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("xkex1pwgbypk6bh");

  return dao.deleteCollection(collection);
})
