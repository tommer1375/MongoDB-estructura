
db.createCollection( 'Empleado', {validator: {$jsonSchema: {bsonType: 'object',title:'Empleado',required: [         '_idEmpleado',          'Nombre',          'NIF',          'Telefono',          'Fecha_Contrato'],properties: {_idEmpleado: {bsonType: 'objectId'},Nombre: {bsonType: 'string'},NIF: {bsonType: 'string'},Telefono: {bsonType: 'string'},Fecha_Contrato: {bsonType: 'date'}}         }      }});  