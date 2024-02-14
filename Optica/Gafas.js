
db.createCollection( 'Gafas', {validator: {$jsonSchema: {bsonType: 'object',title:'Gafas',required: [         '_idGafas',          'Marca',          'Graduación Ojo Izq',          'Graduación Ojo Dcho',          'Color Montura',          'Color Cristal',          'Precio',          'Proveedor_id'],properties: {_idGafas: {bsonType: 'objectId'},Marca: {bsonType: 'string'},Graduación Ojo Izq: {bsonType: 'double'},Graduación Ojo Dcho: {bsonType: 'double'},Color Montura: {bsonType: 'string'},Color Cristal: {bsonType: 'string'},Precio: {bsonType: 'double'},Proveedor_id: {bsonType: 'int'}}         }      }});  