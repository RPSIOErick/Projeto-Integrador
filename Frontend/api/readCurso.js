import { processData, deleteByStatus } from "./utils.js";
import { tbl_curso } from "../models/tbl_curso.js";
import { tbl_professor } from "../models/tbl_professor.js";


try 
{
    const form_curso = document.getElementById('classes-list'); 
    const data = await processData(`http://localhost:8080/api/curso/read`, tbl_curso)

    for (let i = 0; i < data.length; i++) 
    {
        if (data[i].Status != 0) 
        {
            const dataProfessor = await processData(`http://localhost:8080/api/professor/read/${data[i].ID_Prof}`, tbl_professor)
        
            form_curso.innerHTML += `
                <li class="card-item">
                    <div>
                        <strong>Curso:</strong> ${data[i].Nome_Curso}<br>
                        <strong>Professor:</strong> ${dataProfessor.Nome}<br>
                        <strong>Trabalho:</strong> ${data[i].Tipo_Trabalho},
                    </div>
            
                    <button class="btn-edit-del" onclick="editCourse(${""})">Editar</button> 
                    <button class="btn-edit-del" id="delete-${data[i].Cod_Curso}">Deletar</button> 
                </li>
            `
    
            document
            .getElementById(`delete-${data[i].Cod_Curso}`)
            .addEventListener("click", 
            async () => 
            {
                await deleteByStatus(
                    `http://localhost:8080/api/curso/status/${data[i].Cod_Curso}`, 
                    'http://127.0.0.1:8081/views/readCurso.html'
                )
            })
        }
    }
   
} 
catch (error) {console.error('Erro ao receber dados:', error);}
