sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("z00.parceiros.controller.BPList", {
            onInit: function () {

            },

            aoSelecionarBP: function(oEvent){
                //resgata o id do Parceiro selecionado
                let oItemSelecionado = oEvent.getParameter("listItem");
                let oObjetoSelecionado = oItemSelecionado.getBindingContext().getObject();
                let partnerId = oObjetoSelecionado.PartnerId;

                //resgata o roteador
                let oRouter = this.getOwnerComponent().getRouter();

                //navega para a rota de Detalhe
                oRouter.navTo("RouteBPDetail", {
                    PartnerId: partnerId
                });

            }

        });
    });
