import {Sequelize,DataTypes} from 'sequelize'
import 'dotenv/config'

export const sequelize = new Sequelize(
  process.env.DB_NAME,  
  process.env.DB_USER,     
  process.env.DB_PASS,     
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "mysql",
  }
);

export const loginAttempts = sequelize.define("loginAttempts",{
    username:{type: DataTypes.STRING},
    success:{type:DataTypes.STRING}
})

