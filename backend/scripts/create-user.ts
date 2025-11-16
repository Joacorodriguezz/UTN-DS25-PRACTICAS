import 'dotenv/config';

const API_URL = process.env.API_URL || 'http://localhost:3000';
const REGISTER_ENDPOINT = `${API_URL}/api/auth/register`;

const userData = {
  email: 'usuario@ejemplo.com',
  password: 'Password123',
  name: 'Usuario de Prueba',
};

async function createUser() {
  try {
    console.log('🚀 Creando usuario común mediante registro...');
    console.log(`📧 Email: ${userData.email}`);
    console.log(`👤 Nombre: ${userData.name || '(sin nombre)'}`);
    console.log(`🔗 Endpoint: ${REGISTER_ENDPOINT}\n`);

    const response = await fetch(REGISTER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ Error al crear usuario:');
      console.error(`   Status: ${response.status}`);
      console.error(`   Mensaje: ${data.error || data.message || JSON.stringify(data)}`);
      process.exit(1);
    }

    console.log('✅ Usuario creado exitosamente!');
    console.log('\n📋 Datos del usuario creado:');
    console.log(`   ID: ${data.user.id}`);
    console.log(`   Email: ${data.user.email}`);
    console.log(`   Nombre: ${data.user.name || '(sin nombre)'}`);
    console.log(`   Rol: ${data.user.role}`);
    console.log(`   Creado: ${data.user.createdAt}`);
    console.log(`\n💡 Mensaje: ${data.message || 'Usuario registrado exitosamente'}`);
  } catch (error: any) {
    console.error('❌ Error de conexión:');
    console.error(`   ${error.message}`);
    console.error('\n💡 Asegúrate de que el servidor esté corriendo en', API_URL);
    process.exit(1);
  }
}

createUser();

