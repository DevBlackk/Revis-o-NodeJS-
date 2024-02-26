import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('Criem uma conta no nion e coloquem o db aqui.')

export async function testConnection() {
  try {
    await sequelize.authenticate()
    console.log('Conectado!')
  } catch (error) {
    console.log(`Conexão mal sucedida! ${error}`)
  }
}
