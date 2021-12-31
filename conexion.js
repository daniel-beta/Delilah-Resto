const Sequelize = require('sequelize')
const path = 'mysql://root:@192.168.64.2:3306/delilah'

const sequelize = new Sequelize(path, {
  dialect: 'mysql',
  operatorsAliases: 0,
  logging: false,
});

sequelize.authenticate()
  .then(() => {
    console.log('✅ Conectado. Bienvenido a Delilah Restó');
  }).catch(err => {
    console.error('❌ Error de conexión:', err);
  })

module.exports = sequelize;