import {tbl_professor} from "../models/tbl_professor.js"
import { deleteByStatus, processData } from "./utils.js";

try 
{
    const form_professor = document.getElementById("form-professor");
    const data = await processData(`http://localhost:8080/api/professor/read/`, tbl_professor)

    for (let i = 0; i < data.length; i++) 
    {
        if (data[i].Status != 0) 
        {
            form_professor.innerHTML += `
                <!--Card Disciplina-->
                    <div class="item-disciplina" >
                        
                        <p>${data[i].Nome}</p>
                        <span>${data[i].RM}</span>
                    
                        <!--Botões de Ação-->
                            <div class="btns-disciplina">
                                <a class="btn-editar" href="/views/updateProfessor.html">&nbsp; Editar &nbsp;</a>

                                <form action="" class="form-delete-disciplina">
                            
                                    <button type="button" class="btn btn-excluir rounded-0" data-bs-toggle="modal" data-bs-target="#modalDelete" id="delete-${data[i].ID_Prof}">
                                        Excluir                                
                                    </button>

                                    <!-- Modal -->
                                        <div class="modal fade" id="modalDelete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Permissão para Exclusão</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>

                                                    <div class="p-4 modal-body">
                                                        <p class="text-center mb-4">Deseja excluir o Usuário {nomeUsuario}?</p>
                                                        <p class="text-center fw-bold">Ao excluir este usuário, o acesso será permanentemente removido e não poderá ser recuperado.</p>
                                                    </div>

                                                    <div class="d-flex justify-content-center modal-footer">
                                                        <button class="btn btn-black" data-bs-dismiss="modal">Não</button>
                                                        <button class="btn btn-black">Sim</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <!-- (fim) Modal -->
                                </form>                          
                            </div>
                        <!--Fim dos Botões de Ação-->
                    </div>
                <!--Fim do Card Disciplina-->
            `

        document
        .getElementById(`delete-${data[i].ID_Prof}`)
        .addEventListener("click", 
        async () => 
        {
            await deleteByStatus(
                `http://localhost:8080/api/professor/status/${data[i].ID_Prof}`, 
                'http://127.0.0.1:8081/views/readProfessor.html'
            )
        })
    }
    }
        
}
catch (error) {console.error('Erro ao receber dados:', error);}