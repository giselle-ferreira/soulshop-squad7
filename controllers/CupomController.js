const Cupom = require('../models/Cupom');

class CupomController {
    static async paginaCupons(req, res) {
        // Busca
        let query = {}
        const { descontoCupom } = req.query

        if(descontoCupom) {
            query = { discout: { $regex: `${descontoCupom}` }}; ///////////
        }

        const cupons = await Cupom.find(query).lean()
        res.render('cupons', { cupons, descontoCupom })
    }

    static async paginaAdicionarCupom(req, res) {
        res.render('add_cupom')
    }

    static async addCupom(req, res) {
        const { code, discount, cashback, validity, description } = req.body
        const cupom = Cupom({ code, discount, cashback, validity, description });
        await cupom.save()

        res.redirect('/cupons');
    }

    static async paginaEditCupom(req, res){
        const { id } = req.params;
        const cupom  = await Cupom.findById(id).lean();

        res.render('editar_cupom', { cupom })        
    } 
}