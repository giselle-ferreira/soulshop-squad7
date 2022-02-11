const { Router } = require('express');
const router = Router();
const CupomController = require('../controllers/CupomController');

router.get('/cupons', CupomController.paginaCupons);
router.get('/cupons/adicionar', CupomController.paginaAdicionarCupom)

