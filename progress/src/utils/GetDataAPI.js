import axios from 'axios';
const url = "http://localhost:8000/api/v1/signals";
export let GetDataAPI = async (dispatch) => {
    dispatch(
        {
            type: "DATA_LOADING"
        }
    )
    await axios.get(url).then(
        res => (dispatch(
            {
                type: "DATA_SUCCESS",
                data: res.data,
            }
        ))
    ).catch (
            err => (
                dispatch(
                    {
                        type: "DATA_ERROR",
                        error: err.response.statusText,
                    }
                )
            )
    )
}