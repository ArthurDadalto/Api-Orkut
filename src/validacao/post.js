const Joi = require("joi");

const postSchema = Joi.object({
  titulo: Joi.string().min(3).required().messages({
    "string,empty": "O Título é obrigatório",
    "string.min": "O Título deve ter pelo menos três caracteres",
    "any.required": "O título é obrigatório",
  }),
  conteudo: Joi.string().min(5).required().messages({
    "string,empty": "O conteudo é obrigatorio",
    "string.min": "O conteudo deve ter pelo menos 5 caracteres",
    "any.required": "O conteúdo é obrigatório",
  }),
  // usuario_id: Joi.number().interger().required().messages({
  //   "number.base": "O usuário_id deve ser um número",
  //   "number.interger": "O usuario_id deve ser número inteiro",
  //   "any.required": "O usuario_id é obrigatório",
  // }),
});

function validarPost(req, res, next) {
  const { erro } = postSchema.validate(req.body, { abortEarly: false });
  if (error) {
    console.log(error);
    return res.stauts(400).json({
      erro: error.details.map((e) => e.messages),
    });
  }
  next();
}
