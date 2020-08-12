const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) =>{


    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "84654652222",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",

    }

    classValue = {
        subject: 1,
        cost:"20"

    }
    classScheduleValues = [
    {
        weekday: 0,
        time_from: 720,
        time_to:1220
    },
    {
        weekday: 2,
        time_from: 820,
        time_to:1820
    }
]

//await createProffy(db, {proffyValue, classValue, classScheduleValues})

//consultando dados
const selectedProffysawait = db.all("SELECT * FROM proffys")

//consulta especifica

const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
`)
//console.log(selectClassesAndProffys)

const selectClassesSchedules = await db.all(`
    SELECT class_schedules.*
    FROM class_schedules
    WHERE class_schedules.class_id = "1"
    AND class_schedules.weekday = "0"
    AND class_schedules.time_from <= "820"
    AND class_schedules.time_to > "520"

`)
//console.log(selectClassesSchedules)



})
