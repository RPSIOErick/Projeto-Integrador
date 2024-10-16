import { tbl_disciplinas } from "../models/tbl_disciplina.js";
import { processData, deleteById } from "./utils.js";

try 
{
    const form_disciplina = document.getElementById("form-disciplina");
    const data = await processData(`http://localhost:8080/api/disciplinas/read/`, tbl_disciplinas)

    for (let i = 0; i < data.length; i++) 
    {
         form_disciplina.innerHTML += `
          <!--Card Disciplina-->
                        <div class="item-disciplina">
                            
                            <span>${data[i].ID_Disc}</span>
                            <p>${data[i].Nome_Disc}</p>

                            <!--Botões de Ação-->
                                <div class="btns-disciplina">
                                    <a href="">Ver Mais</a>
                                    <form action="" class="form-delete-disciplina">
                                        <button type="submit" id="delete-${data[i].ID_Disc}">Excluir</button>
                                    </form>
                                </div>
                            <!--Fim dos Botões de Ação-->

                        </div>
                    <!--Fim do Card Disciplina-->`

                    document
                    .getElementById(`delete-${data[i].ID_Disc}`)
                    .addEventListener("click", 
                    async () => 
                    {
                        await deleteById(
                            `http://localhost:8080/api/disciplinas/delete/${data[i].ID_Disc}`, 
                            'http://127.0.0.1:8081/views/readDisciplina.html'
                        )
                    })
        
    }
}
catch (error) {console.error('Erro ao receber dados:', error);}