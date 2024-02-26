import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('postgresql://davidsonwferreira8:hF72LIJDwKXY@ep-flat-dream-a515pcbg.us-east-2.aws.neon.tech/dojo?sslmode=require')

export async function testConnection() {
  try {
    await sequelize.authenticate()
    console.log('Conectado!')
  } catch (error) {
    console.log(`Conexão mal sucedida! ${error}`)
  }
}
