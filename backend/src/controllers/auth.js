const User = require ("../database/schemas/user");
const jwt = require("../utils/jwt")
const bcrypt = require("bcryptjs");


async function register(req,res){
    const {username,password,email} = req.body

    if (!username) res.status(400).send({msg:"El username es obligatorio"})
    if (!password) res.status(400).send({msg:"El password es obligatorio"})
    if (!email) res.status(400).send({msg:"El email es obligatorio"})

    //Si las validaciones anteriores están OK, crearemos el nuevo usuario
    const user = new User(
        {
            username,
            email:email.toLowerCase(),
            password
        }
    )

    //Necesitamos hashear en este punto la contraseña con bcrypt
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password,salt)
    user.password = hashPassword

    //Guardamos el usuario en DB
    user.save((error, userStorage)=>{
        if(!error){
            res.status(200).send(userStorage)
        }else{
            res.status(400).send({msg:"Error al crear el usuario"})
        }
    })
}

function login(req,res){
    const {email,password} = req.body;

    if (!password) res.status(400).send({msg:"El password es obligatorio"})
    if (!email) res.status(400).send({msg:"El email es obligatorio"})

    const emailLowerCase = email.toLowerCase()

    User.findOne({email:emailLowerCase}, (error,userStore)=>{
        if (error){
            res.status(500).send({msg:"Error del servidor"})
        } else {
            bcrypt.compare(password, userStore.password, (bcryptError,check)=>{
                if(bcryptError){
                    res.status(500).send({msg:"Error del servidor"})
                } else if(!check){
                    res.status(500).send({msg:"Contraseña Incorrecta"})
                } else {
                    res.status(200).send({msg:jwt.createAccesToken(userStore)})
                }
            } )

        }
    })
}

function refreshAccessToken(req,res){
    const {token} = req.body;
    
    if(!token) res.status(400).send({msg:"token requerido"})
    
    const { _id } = jwt.decoded(token);
    console.log(_id)
    
    User.findOne({ id : _id}, (error, userStorage)=>{
       
        if(error){
            res.status(500).send({msg:"error del servidor"})
        }else{
             res.status(200).send({
                accessToken: jwt.createAccessToken(userStorage)
                
            });
            
        }
    })
    
    
    }
    
    
    
    
    

module.exports = {
    register,
    login,
    refreshAccessToken
}