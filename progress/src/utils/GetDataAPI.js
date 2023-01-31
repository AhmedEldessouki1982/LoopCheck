import axios from 'axios';
const url_ioList = "http://localhost:8000/api/v1/signals";

export let GetDataAPI = async (dispatch) => {
    dispatch(
        {
            type: "DATA_LOADING"
        }
    )
    await axios.get(url_ioList).then(
        res => dispatch(
            {
                type: "DATA_SUCCESS",
                data: res.data.IOList[0].IOList,
            }
        )
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