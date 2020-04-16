const Sequelize = require('sequelize')

const db = new Sequelize('taskdb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    
})
const note=db.define('notes',{
     
    notetxt:{
        type:Sequelize.STRING,
        allowNull:false
}
})

 

const task = db.define('tasks', {
   
    title: {
        type: Sequelize.STRING,
        allowNull:false
    },
    description: {
        type: Sequelize.STRING,
         
    },
    dueDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
  },
    priority: {
        type:Sequelize.STRING

    }
    
})
task.hasMany(note);
note.belongsTo(task)


db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    task,note
}