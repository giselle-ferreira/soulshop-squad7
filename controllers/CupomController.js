const Cupom = require('../models/Cupom');

class CupomController {
    static async paginaCupons(req, res) {
        // Busca
        let query = {}
        const { codigoCupom } = req.query

        if(codigoCupom) {
            query = { code: { $regex: `${codigoCupom}`, $options: "i" }}; //
        }

        const cupons = await Cupom.find(query).lean()
        res.render('cupons', { cupons, codigoCupom })
    }

    // Adição
    static async paginaAdicionarCupom(req, res) {
        res.render('add_cupom')
    }

    static async addCupom(req, res) {
        const { code, discount, validity, cashback, description } = req.body 

        const cupom = Cupom({ code, discount, validity, cashback, description }); 
        
        await cupom.save()
        res.redirect('/cupons');
    }

    // Edição
    static async paginaEditCupom(req, res){
        const { id } = req.params;
        const cupom  = await Cupom.findById(id).lean();
        res.render('editar_cupom', { cupom })        
    } 

    static async editCupom(req, res) {
        const { id, code, discount, cashback, validity, description } = req.body

        await Cupom.findByIdAndUpdate(id, { code, discount, cashback, validity, description })

        res.redirect('/cupons');
    }

    // Exclusão
    static async deleteCupom(req, res) {
        const { id } = req.body;
        await Cupom.findByIdAndDelete(id);
        res.redirect('/cupons');
    }

}

module.exports = CupomController;