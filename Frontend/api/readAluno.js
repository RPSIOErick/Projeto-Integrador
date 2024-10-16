import { processData } from "./utils.js";
import { tbl_aluno } from "../models/tbl_aluno.js";


try 
{
    const form_profile = document.getElementById("form-profile")
    const data = await processData(`http://localhost:8080/api/aluno/read/${"21"}`, tbl_aluno)

    form_profile.innerHTML = `
                <!--Div Formulario-->
                    <div class="div-dataAluno" id>

                        <!--Imagem de perfil-->
                            <div class="profile-picture-myaccount">
                                <img src="${"../public/img/profile-pic.png"}" alt="Foto de Perfil do Usuario" class="profile-picture-myaccount">
                                <a href="" class="profile-picture-myaccount-btnUpdatePic"><box-icon name='edit-alt' class="profile-picture-myaccount-btnUpdatePicIcon"></box-icon></a>
                            </div>

                        <!--Nome expositivo-->
                            <p class="name_aluno_p">${data.Nome}</p>

                        <!--RA-->
                            <div class="input-dataAluno">
                                <input type="text" id="ra_aluno" placeholder="RA" value=${data.RA}>
                            </div>

                        <!--Nome Completo-->   
                            <div class="input-dataAluno">
                                <input type="name" id="nome_aluno" placeholder="Nome Completo" value="${data.Nome}">
                            </div>

                        <!--Senha-->
                            <div class="input-dataAluno">
                                <input type="password" id="senha_aluno" placeholder="Senha" value=${data.Senha}>
                            </div>
                    </div>
                <!--Fim da Div formulario-->

                <!--Botão Cadastrar-->
                    <div class="btn-final">
                        <a href="" class="btn-black">Editar</a>
                    </div>
    `
} 
catch (error) {console.error('Erro ao receber dados:', error);}
