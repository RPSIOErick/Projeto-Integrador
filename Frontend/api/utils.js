// Create
async function createData(route, model, inputData) 
{
    try 
    {
        const dataToSend = new model(...Object.values(inputData));
        const response = await axios.post(route, dataToSend);
        return response.data;
    } 
    catch (error) {console.error(error);}
}

// Read
    function receiveData(data) 
    {
        return axios
            .get(data)
            .then(response => 
            {   
                const RESULT = response.data;
                return RESULT;
            })
            .catch(error => {console.error(error); throw error; });
    }

    function filterData(datas, model) 
    {
        let data_processed = 0

        if (datas.lenght > 1) 
        {
            data_processed =  datas.map(data => new model(...Object.values(data)));
        }
        else
        {
            data_processed = datas
        }
        return data_processed

    }

    async function processData(route, model)
    {
        const data_recived = await receiveData(route); 
        const data_processed = filterData(data_recived, model)

        return data_processed
    }

// Delete
    async function deleteByStatus(route, urlRead)
    {
        try 
        {
            await axios.put(route)
            .then(window.location.href = urlRead)
        } 
        catch (error) {console.error(error);}
    }

    async function deleteById(route, urlRead)
    {
        try 
        {
            await axios.delete(route)
            .then(window.location.href = urlRead)
        } 
        catch (error) {console.error(error);}
    }

export { processData, deleteByStatus, deleteById, createData };
