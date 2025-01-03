/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6qzwtyr6k0nfhnu",
    "created": "2024-11-19 12:32:56.622Z",
    "updated": "2024-11-19 12:32:56.622Z",
    "name": "todos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "trsxuw1x",
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
        "id": "irba1tih",
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
        "id": "4t8vkbba",
        "name": "done",
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
  const collection = dao.findCollectionByNameOrId("6qzwtyr6k0nfhnu");

  return dao.deleteCollection(collection);
})
