//1 practic-1 
// db.tasks.find({age: {$gt: 30}}, {name:1,email:1, _id:0})

// 2 practic-2
// db.tasks.find({favoutiteColor: {$in: ["Maroon","Blue"]}}).project({favoutiteColor:1})

// 3 practic-3
// db.tasks.find({skills: {$size: 0}}).project({skills:1})

// 4 practic-4
// db.tasks.find(
//     {
//         $and: [
//             {"skills.name": "JAVASCRIPT"},
//             {"skills.name": "PYTHON"}

//         ]
//     }
// ).project({skills:1})

// 5 practic-5
// db.createCollection("NewSkill")

// db.NewSkill.insertOne({
//     email:"amccurry3@cnet.com",
//     skills:[]
// })

// db.NewSkill.updateOne({ email: "amccurry3@cnet.com" },
//     {
//         $push: {
//             skills:{
//                 name:"PYTHON",
//                 level:"Beginner",
//                 isLearning:true
//             }
//         }

//     }
// )

// 6 practic-6
// db.NewSkill.updateOne({email:"amccurry3@cnet.com"},{$push: {
//     languages:"Spanish"
// }})

// 7 practic-7
// db.tasks.find({"skills.name":"KOTLIN"})
// db.tasks.updateOne({"_id" : ObjectId("6406ad63fc13ae5a40000066")},
// {$pull: {skills:{name:"KOTLIN"}}}
// )

// db.tasks.find({"_id" : ObjectId("6406ad63fc13ae5a40000066")})

