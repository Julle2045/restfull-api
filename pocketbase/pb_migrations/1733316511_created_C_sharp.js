/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "m4bt8lbsv3yebfo",
    "created": "2024-12-04 12:48:31.722Z",
    "updated": "2024-12-04 12:48:31.722Z",
    "name": "C_sharp",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2s0krazo",
        "name": "Titel",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
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
  const collection = dao.findCollectionByNameOrId("m4bt8lbsv3yebfo");

  return dao.deleteCollection(collection);
})
