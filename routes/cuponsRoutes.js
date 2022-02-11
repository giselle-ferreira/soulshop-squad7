const { Router } = require('express');
const router = Router();
const CupomController = require('../controllers/CupomController');

router.get('/cupons', CupomController.paginaCupons);
router.get('/cupons/adicionar', CupomController.paginaAdicionarCupom);
router.post('/cupons/enviar', CupomController.addCupom);
router.get('/cupons/editar/:id', CupomController.paginaEditCupom)
router.post('/cupons/edit', CupomController.editCupom)
router.post('/cupons/delete', CupomController.deleteCupom)

module.exports = router;