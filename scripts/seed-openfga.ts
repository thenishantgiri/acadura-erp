import { OpenFgaClient } from '@openfga/sdk';

const fga = new OpenFgaClient({ apiUrl: 'http://localhost:8082' });

async function main() {
  const store = await fga.createStore({ name: 'acadura' });
  fga.storeId = store.id;

  const { authorization_model_id } = await fga.writeAuthorizationModel({
    schema_version: '1.1',
    type_definitions: [
      {
        type: 'tenant',
        relations: {
          admin: {
            this: {},
          },
        },
        metadata: {
          relations: {
            admin: {
              directly_related_user_types: [{ type: 'user' }],
            },
          },
        },
      },
      { type: 'user', relations: {} },
    ],
  });

  await fga.write({
    writes: [{ user: 'user:admin', relation: 'admin', object: 'tenant:demo' }],
  });

  console.log('Model id:', authorization_model_id);
  console.log('Store id:', store.id);
}

main();
