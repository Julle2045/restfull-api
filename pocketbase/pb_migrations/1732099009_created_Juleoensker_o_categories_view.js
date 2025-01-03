/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vog6k6hjzm3u250",
    "created": "2024-11-20 10:36:49.200Z",
    "updated": "2024-11-20 10:36:49.200Z",
    "name": "Juleoensker_o_categories_view",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\nJuleoensker.id, Juleoensker.oenske, Juleoensker.description, Juleoensker.link, o_categories.id AS OcategoryID, o_categories.name, o_categories.icon\nFROM Juleoensker\nLEFT JOIN o_categories ON Juleoensker.category_o = o_categories.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vog6k6hjzm3u250");

  return dao.deleteCollection(collection);
})
