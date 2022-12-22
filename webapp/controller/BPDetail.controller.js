sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("z00.parceiros.controller.BPDetail", {
            onInit: function () {

                //Inicializa modelos locais
                this.inicializarModelosLocais();                

                //acessa o Roteador
                let oRouter = this.getOwnerComponent().getRouter();

                //anexa uma função de popular detalhes quando a rota RouteBPDetail for processada
                oRouter.getRoute("RouteBPDetail").attachPatternMatched(this.populaDadosDetalhe, this);


            },

            inicializarModelosLocais(){

                //vincula modelo na view
                let oView = this.getView();
                
                //inicializar o modelo que controla a propriedade editable dos Inputs através da propriedade /editavel
                let oModeloInputs = new JSONModel();
                oModeloInputs.setProperty("/editavel", false);
                oView.setModel(oModeloInputs, "inputs");

                //inicializar o modelo que controla a propriedade editable dos Inputs através da propriedade /editavel
                let oModeloBotoes = new JSONModel();
                oModeloBotoes.setProperty("/edicao", false);
                oModeloBotoes.setProperty("/visualizacao", true);
                oView.setModel(oModeloBotoes, "botoes");

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
            },

            aoEditar: function(oEvent){

                //resgata modelo inputs para alterar a propriedade /editavel
                let oView = this.getView();

                let oModeloInputs = oView.getModel("inputs");
                oModeloInputs.setProperty("/editavel", true);

                let oModeloBotoes = oView.getModel("botoes");
                oModeloBotoes.setProperty("/edicao", true);
                oModeloBotoes.setProperty("/visualizacao", false);

            },

            aoCancelar: function(oEvent){

                //resgata modelo inputs para alterar a propriedade /editavel
                let oView = this.getView();

                let oModeloInputs = oView.getModel("inputs");
                oModeloInputs.setProperty("/editavel", false);

                let oModeloBotoes = oView.getModel("botoes");
                oModeloBotoes.setProperty("/edicao", false);
                oModeloBotoes.setProperty("/visualizacao", true);
            }

        });
    });
