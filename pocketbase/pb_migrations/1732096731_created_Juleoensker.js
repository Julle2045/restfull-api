/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sw6lye6k8zdl642",
    "created": "2024-11-20 09:58:51.533Z",
    "updated": "2024-11-20 09:58:51.533Z",
    "name": "Juleoensker",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ljsm0kan",
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
      },
      {
        "system": false,
        "id": "gqibgspw",
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
      },
      {
        "system": false,
        "id": "kjzswdot",
        "name": "link",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
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
  const collection = dao.findCollectionByNameOrId("sw6lye6k8zdl642");

  return dao.deleteCollection(collection);
})
