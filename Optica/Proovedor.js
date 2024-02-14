
db.createCollection( 'Proovedor', {validator: {$jsonSchema: {bsonType: 'object',title:'Proovedor',required: [         '_idProovedor',          'Nombre',          'Dirección_Calle',          'Número',          'Piso',          'Puerta',          'Ciudad',          'Código_Postal',          'País',          'Teléfono',          'NIF'],properties: {_idProovedor: {bsonType: 'objectId'},Nombre: {bsonType: 'string'},Dirección_Calle: {bsonType: 'string'},Número: {bsonType: 'int'},Piso: {bsonType: 'int'},Puerta: {bsonType: 'string'},Ciudad: {bsonType: 'string'},Código_Postal: {bsonType: 'int'},País: {bsonType: 'string'},Teléfono: {bsonType: 'string'},FAX: {bsonType: 'int'},NIF: {bsonType: 'string'}}         }      }});  