class tbl_curso
{
    constructor(Cod_Curso, Nome_Curso, Tipo_Trabalho,
    Status, Descricao_Trabalho, ID_Prof, Tipo_Curso) 
    {
        this.Cod_Curso = Cod_Curso;
        this.Nome_Curso = Nome_Curso, 
        this.Tipo_Trabalho = Tipo_Trabalho,
        this.Status = Status,
        this.Descricao_Trabalho = Descricao_Trabalho, 
        this.ID_Prof = ID_Prof, 
        this.Tipo_Curso = Tipo_Curso
    }
}

export {tbl_curso}