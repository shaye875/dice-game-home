import { logAttempt,getFailedAttempts,countAttemptsForUser } from "./crud/create.js"

// await logAttempt("avi",false)
// const result = await getFailedAttempts()
// console.log(result);
const count = await countAttemptsForUser("avi")
console.log(count);

