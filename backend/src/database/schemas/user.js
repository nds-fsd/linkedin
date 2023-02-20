const { Schema, model } = require("mongoose");

const userSchema = new Schema({

  nombre: { type: String },
  apellido: { type: String },
  avatar:{type:String},
  email: { type: String},
  password: { type: String},
  username: { type: String},

  role:{
    type:String,
    enum: ['user','admin'],
    default:'user'
  },


   puesto: { type: String }, //1..n tabla de puestos
   empresa_actual: { type: String },
   sector: { type: String }, //1..n  tabla de sectores

   ubicacion_pais: { type: String }, //1..n tabla de paises
   ubicacion_Codigo_postal: { type: String },
   ubicacion_Ciudad: { type: String }, //1..n  tabla de ciudades

   educacion_institucion: { type: String }, //universidad,...
   educacion_titulacion: { type: String },
   educacion_disciplina: { type: String }, //empresariales,..

   telefono: { type: String },
   tipo_telefono: { type: String }, //Inicio / Trabajo / Movil
   fecha_nacimiento: { type: Date },
   web: { type: String },

  relationCompany: { type: [Schema.ObjectId], ref: "company" },
  relationJob: { type: [Schema.ObjectId], ref: "job" },
  relationPost: { type: [Schema.ObjectId], ref: "post" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  followers: [{
    type: Schema.ObjectId,
    ref: 'user'
  }],
  following: [{
    type: Schema.ObjectId,
    ref: 'user'
  }]
 
});

const User = model("user", userSchema);

module.exports = User;
