
db.createCollection( 'Venta', {validator: {$jsonSchema: {bsonType: 'object',title:'Venta',required: [         '_idVenta',          'Gafas_id',          'Cliente_id'],properties: {_idVenta: {bsonType: 'objectId'},Gafas_id: {bsonType: 'int'},Cliente_id: {bsonType: 'int'}}         }      }});  