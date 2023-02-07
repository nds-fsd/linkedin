const { Schema, model } = require("mongoose");

const userSchema = new Schema({
// <<<<<<< HEAD:backend/database/schemas/user.js
  // username:{type: String },
  // email: { type: String  },
  // password:{type: String },
  // surname: { type: String },
// =======
  email: { type: String},
  password: { type: String},
  username: { type: String},
  role:{
    type:String,
    enum: ['user','admin'],
    default:'user'
  },
// >>>>>>> SPRINT1:backend/src/database/schemas/user.js
  // nombre: { type: String, required: true },
  // apellido2: { type: String },
// <<<<<<< HEAD:backend/database/schemas/user.js
  
// =======

// >>>>>>> SPRINT1:backend/src/database/schemas/user.js
  // puesto: { type: String }, //1..n tabla de puestos
  // motrar_empresa_actual: { type: Boolean },
  // sector: { type: String }, //1..n  tabla de sectores

  // ubicacion_pais: { type: String }, //1..n tabla de paises
  // ubicacion_Codigo_postal: { type: String },
  // ubicacion_Ciudad: { type: String }, //1..n  tabla de ciudades

  // educacion_institucion: { type: String }, //universidad,...
  // educacion_titulacion: { type: String },
  // educacion_disciplina: { type: String }, //empresariales,..

  // telefono: { type: String },
  // tipo_telefono: { type: String }, //Inicio / Trabajo / Movil
  // fecha_nacimiento: { type: Date },
  // web: { type: String },

  relationJob: { type: [Schema.ObjectId], ref: "job" },
  relationPost: { type: [Schema.ObjectId], ref: "post" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

const User = model("user", userSchema);

module.exports = User;
