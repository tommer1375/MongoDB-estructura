
db.createCollection( 'Glasses', {validator: {$jsonSchema: {bsonType: 'object',title:'Glasses',required: [         'Brand',          'Frame',          'Price',          'Distributor',          'Bought'],properties: {Brand: {bsonType: 'string'},Frame: {bsonType: 'string'},Price: {bsonType: 'double'},Distributor: {bsonType: 'object',
title:'object',required: [         'Name',          'Address',          'Phone',          'Fax',          'NIF'],properties: {Name: {bsonType: 'string'},Address: {bsonType: 'object',
title:'object',required: [         'Street',          'Number',          'Floor',          'Door',          'Postal_Code',          'City',          'Country'],properties: {Street: {bsonType: 'string'},Number: {bsonType: 'int'},Floor: {bsonType: 'int'},Door: {bsonType: 'int'},Postal_Code: {bsonType: 'int'},City: {bsonType: 'string'},Country: {bsonType: 'string'}}},Phone: {bsonType: 'int'},Fax: {bsonType: 'int'},NIF: {bsonType: 'string'}}},Bought: {bsonType: 'object',
title:'object',properties: {Customer: {bsonType: 'object',
title:'object',required: [         'Name',          'Address',          'Phone_Number',          'Email',          'Registratio_Date'],properties: {Name: {bsonType: 'string'},Address: {bsonType: 'object',
title:'object',required: [         'Street',          'Number',          'Floor',          'Door',          'Postal_Code',          'City',          'Country'],properties: {Street: {bsonType: 'string'},Number: {bsonType: 'int'},Floor: {bsonType: 'int'},Door: {bsonType: 'int'},Postal_Code: {bsonType: 'int'},City: {bsonType: 'string'},Country: {bsonType: 'string'}}},Phone_Number: {bsonType: 'int'},Email: {bsonType: 'string'},Registratio_Date: {bsonType: 'date'}}}}}}         }      }});  