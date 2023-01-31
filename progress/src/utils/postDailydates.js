import axios from 'axios';
const url = "http://localhost:8000/api/v1/progress";

export let postDailydates = async (data) => {
    data = {"dates":data}
    await axios.post(url, data).then(
        res => console.log(`data exchanged with status code ${res.status}/found ${res.statusText}`)
    ).catch (
            err => console.log(err)
    )
}