sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("z00.parceiros.controller.BPDetail", {
            onInit: function () {

                //acessa o Roteador
                let oRouter = this.getOwnerComponent().getRouter();

                //anexa uma função de popular detalhes quando a rota RouteBPDetail for processada
                oRouter.getRoute("RouteBPDetail").attachPatternMatched(this.populaDadosDetalhe, this);


            },

            populaDadosDetalhe: function(oEvent){

                //acessa o modelo
                let oModelo = this.getOwnerComponent().getModel();

                //acessa o parâmetro arguments do evento
                let oArgumentos = oEvent.getParameter("arguments");

                let partnerId = oArgumentos.PartnerId;

                let sCaminho = oModelo.createKey("/Parceiros", {
                    PartnerId: partnerId
                });

                //acessa a view para fazer o element binding
                let oView = this.getView();
                oView.bindElement(sCaminho);
            },

            formataRuaNumero: function(sRua, sNumero){
                debugger;
                if (sRua && sNumero){
                    return sRua.concat(", " + sNumero);
                }else{
                    return "";

                    //nova alteração
                }
            }


        });
    });
