import { loginAttempts,sequelize } from "../data/loginAttempts.js"

async function start(){
    await sequelize.authenticate()
    await sequelize.sync()
}

await start()

export async function logAttempt(username,success){
   
    if(typeof username === 'string' && username !== "" && typeof success === 'boolean'){
        try{
            const date = new Date()
        const result = await loginAttempts.create({username,success})
          return result
        }catch(err){
            console.log("errrrror",err);
        }
        
      
    }
    return false
}

export async function getFailedAttempts(){
    const result = await loginAttempts.findAll({
        where:{
            success:false
        }
    })
    return result
}

export async function countAttemptsForUser(username){
    const amount = await loginAttempts.count({
        where:{
            username:username
        }
    })
    return amount
}
